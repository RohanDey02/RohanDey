import React from "react";
import projectData from "./projects.json";
import ProjectEntry from "../../types/ProjectEntry";

const ProjectEntryCard: React.FC<ProjectEntry> = ({ year, project, projectUrl, description, technologies }) => {
    return (
        <article className="exp-card showcase-card glass-hover">
            <div className="exp-card-left text-xs uppercase tracking-wide text-slate-500">
                <p>{year}</p>
            </div>
            <div className="exp-card-right">
                <a className="hover:text-cyan-200 transition" href={projectUrl} target="_blank" rel="noreferrer">
                    <h3>{project}</h3>
                </a>
                <p className="text-slate-300 mt-2 text-sm leading-normal">{description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="technologies">
                    {technologies.map((tech, index) => (
                        <li className="text-slate-400 mr-1.5 mt-2" key={index}>
                            <div className="flex items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold leading-5 text-cyan-200">
                                {tech}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

const Projects = (props: { refProp: React.LegacyRef<HTMLDivElement> | undefined; sectionId: string; }) => {
    return <section className="section-shell" id={props.sectionId} data-section={props.sectionId}>
        <p className="section-tag">Builds</p>
        <h2 className="section-heading mt-1" ref={props.refProp}>Projects</h2>
        <div className="experience-list">
            {projectData.map((experience: ProjectEntry, index: number) => (
                <ProjectEntryCard key={index} {...experience} />
            ))}
        </div>
    </section>;
};

export default Projects;