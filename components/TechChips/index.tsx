const TechChips = (props: { technologies: string[]; className?: string }) => {
    return <ul className={`flex flex-wrap gap-1.5 ${props.className ?? ""}`} aria-label="Technologies">
        {props.technologies.map((tech) => (
            <li className="chip" key={tech}>{tech}</li>
        ))}
    </ul>;
};

export default TechChips;
