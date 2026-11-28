export type SectionId = "experience" | "open-source" | "projects";

const navItems: { id: SectionId; label: string }[] = [
    { id: "experience", label: "Experience" },
    { id: "open-source", label: "Open source" },
    { id: "projects", label: "Projects" },
];

const Navbar = (props: { activeSection: SectionId; onNavigate: (id: SectionId) => void }) => {
    return <header className="wrap site-header">
        <nav className="navbar" aria-label="Sections">
            {navItems.map((item) => {
                const isActive = props.activeSection === item.id;
                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => props.onNavigate(item.id)}
                    >
                        {item.label}
                    </a>
                );
            })}
        </nav>
    </header>;
};

export default Navbar;
