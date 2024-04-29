import React from "react";
import projectData from "./projects.json";
import ProjectEntry from "../../types/ProjectEntry";

const ProjectEntryCard: React.FC<ProjectEntry> = ({ year, project, projectUrl, description, technologies }) => {
    return (            
        <div className="exp-card glass-hover">
            <div className="exp-card-left text-xs uppercase tracking-wide text-slate-500 sm:col-span-2">
                <p>{year}</p>
            </div>
            <div className="exp-card-right">
                <a className="hover:text-teal-300" href={projectUrl}>
                    <h3>{project}</h3>
                </a>
                <p className="text-slate-400 mt-2 text-sm leading-normal">{description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="technologies">
                    {technologies.map((tech, index) => (
                        <li className="text-slate-400 mr-1.5 mt-2" key={index}>
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Projects = () => {
    return <div className="experience-list">
        {projectData.map((experience: ProjectEntry, index: number) => (
            <ProjectEntryCard key={index} {...experience} />
        ))}
    </div>;
};

export default Projects;