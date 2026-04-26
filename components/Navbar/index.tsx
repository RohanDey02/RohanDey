type SectionId = "experience" | "open-source" | "projects";

const navItems: { id: SectionId; label: string }[] = [
    { id: "experience", label: "Experience" },
    { id: "open-source", label: "Open-Source" },
    { id: "projects", label: "Projects" },
];

const Navbar = (props: { activeSection: SectionId; onNavigate: (id: SectionId) => void }) => {
    return <nav className="smMax:hidden main-div-left lg:block section-shell mt-4" aria-label="Portfolio sections">
        {navItems.map((item) => {
            const isActive = props.activeSection === item.id;
            return (
                <button
                    key={item.id}
                    className={`group navbar-link ${isActive ? "navbar-link-active" : ""}`}
                    onClick={() => props.onNavigate(item.id)}
                    type="button"
                >
                    <span className="navbar-bullet" aria-hidden="true"></span>
                    <span>{item.label}</span>
                </button>
            );
        })}
    </nav>;
};

export default Navbar;
