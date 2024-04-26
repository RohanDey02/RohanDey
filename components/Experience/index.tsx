import React from "react";
import experienceData from "./experiences.json";
import ExperienceEntry from "../../types/ExperienceEntry";

const ExperienceEntryCard: React.FC<ExperienceEntry> = ({ startYear, endYear, role, company, companyUrl, description, technologies }) => {
    return (
        <div className="exp-card">
            <div className="exp-card-left text-xs uppercase tracking-wide text-slate-500 sm:col-span-2">
                <p>{startYear} - {endYear}</p>
            </div>
            <div className="exp-card-right">
                <a className="hover:text-teal-300" href={companyUrl}>
                    <h3>{role} · {company}</h3>
                </a>
                <p className="text-slate-400 mt-2 text-sm leading-normal">{description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
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

const Experience = () => {
    return <div className="experience-list">
        {experienceData.map((experience: ExperienceEntry, index: number) => (
            <ExperienceEntryCard key={index} {...experience} />
        ))}
    </div>;
};

export default Experience;