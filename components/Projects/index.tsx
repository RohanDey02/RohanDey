import React from "react";
import projectData from "./projects.json";
import ProjectEntry from "../../types/ProjectEntry";
import TechChips from "../TechChips";

const ProjectEntryCard: React.FC<ProjectEntry> = ({ year, project, projectUrl, description, technologies }) => {
    return (
        <a className="card flex flex-col" href={projectUrl} target="_blank" rel="noreferrer">
            <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-accent-2 tabular-nums">{year}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                </svg>
            </div>
            <h3 className="card-title mt-2.5 text-[21px]">{project}</h3>
            <p className="mt-2 flex-grow">{description}</p>
            <TechChips technologies={technologies} className="mt-4" />
        </a>
    );
};

const Projects = (props: { sectionId: string; }) => {
    return <section className="wrap section pb-24" id={props.sectionId} data-section={props.sectionId} aria-labelledby="proj-h">
        <h2 id="proj-h" className="section-heading mb-7">Projects</h2>
        <div className="grid2">
            {projectData.map((entry: ProjectEntry, index: number) => (
                <ProjectEntryCard key={index} {...entry} />
            ))}
        </div>
    </section>;
};

export default Projects;
