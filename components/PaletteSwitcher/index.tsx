import { useEffect, useRef, useState } from "react";

export type PaletteId = "aurora" | "ocean" | "ember";

// Swatch colours only; the palettes themselves live in styles/global.css.
const palettes: { id: PaletteId; label: string; colors: [string, string, string] }[] = [
    { id: "aurora", label: "Aurora", colors: ["#ff7ac6", "#8b6cff", "#4fd8f5"] },
    { id: "ocean", label: "Ocean", colors: ["#5cd6ff", "#6cf7c8", "#7b8fff"] },
    { id: "ember", label: "Ember", colors: ["#ffb057", "#ff6b8b", "#c77dff"] },
];

const STORAGE_KEY = "palette";

const isPaletteId = (value: string | null): value is PaletteId =>
    palettes.some((p) => p.id === value);

const Swatch = (props: { colors: [string, string, string] }) => (
    <span
        className="palette-swatch"
        aria-hidden="true"
        style={{ background: `linear-gradient(135deg, ${props.colors[0]}, ${props.colors[1]}, ${props.colors[2]})` }}
    />
);

const PaletteSwitcher = () => {
    const [palette, setPalette] = useState<PaletteId>("aurora");
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    // Restore the saved choice once on the client.
    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            if (isPaletteId(saved)) {
                setPalette(saved);
            }
        } catch {
            // Storage can be unavailable (private mode); keep the default.
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.palette = palette;
        try {
            window.localStorage.setItem(STORAGE_KEY, palette);
        } catch {
            // Ignore storage failures.
        }
    }, [palette]);

    // Close on outside click or Escape.
    useEffect(() => {
        if (!open) return;

        const onPointerDown = (event: PointerEvent) => {
            if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const current = palettes.find((p) => p.id === palette) ?? palettes[0];

    const choose = (id: PaletteId) => {
        setPalette(id);
        setOpen(false);
        triggerRef.current?.focus();
    };

    return <div className="palette-switcher" ref={rootRef}>
        {open && (
            <div className="palette-menu" id="palette-menu" role="group" aria-label="Colour theme">
                {palettes.map((p) => {
                    const isActive = palette === p.id;
                    return (
                        <button
                            key={p.id}
                            type="button"
                            className={`palette-option ${isActive ? "palette-option-active" : ""}`}
                            aria-pressed={isActive}
                            onClick={() => choose(p.id)}
                        >
                            <Swatch colors={p.colors} />
                            <span>{p.label}</span>
                            {isActive && (
                                <svg className="ml-auto" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12.5 10 17.5 19 7" />
                                </svg>
                            )}
                        </button>
                    );
                })}
            </div>
        )}
        <button
            ref={triggerRef}
            type="button"
            className="palette-trigger"
            aria-expanded={open}
            aria-controls="palette-menu"
            aria-label={`Colour theme: ${current.label}`}
            onClick={() => setOpen((o) => !o)}
        >
            <Swatch colors={current.colors} />
            <span>{current.label}</span>
            <svg className={`palette-chevron ${open ? "palette-chevron-open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 15 12 9 18 15" />
            </svg>
        </button>
    </div>;
};

export default PaletteSwitcher;
