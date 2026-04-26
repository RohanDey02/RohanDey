import React, { RefObject } from "react";
import experienceData from "./experiences.json";
import ExperienceEntry from "../../types/ExperienceEntry";

const ExperienceEntryCard: React.FC<ExperienceEntry> = ({ startYear, endYear, role, company, companyUrl, description, technologies, previousRole }) => {
    return (
        <article className="exp-card showcase-card glass-hover">
            <div className="exp-card-left text-xs uppercase tracking-wide text-slate-500">
                <p>{startYear} - {endYear}</p>
            </div>
            <div className="exp-card-right">
                <a className="hover:text-cyan-200 transition" href={companyUrl} target="_blank" rel="noreferrer">
                    <h3>{role} · {company}</h3>
                </a>
                {previousRole && (
                    <div className="flex items-center text-slate-400 text-sm font-normal mt-1" style={{ opacity: 0.85 }}>
                        <span>{previousRole.title}</span>
                        <span className="mx-2 text-xs">•</span>
                        <span className="text-xs">{previousRole.period}</span>
                    </div>
                )}
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

const Experience = (props: { refProp: React.LegacyRef<HTMLDivElement> | undefined; sectionId: string; }) => {
    return <section className="section-shell" id={props.sectionId} data-section={props.sectionId}>
        <p className="section-tag">Career</p>
        <h2 className="section-heading mt-1" ref={props.refProp}>Experience</h2>
        <div className="experience-list">
            {experienceData.map((experience: ExperienceEntry, index: number) => (
                <ExperienceEntryCard key={index} {...experience} />
            ))}
        </div>
    </section>;
};

export default Experience;