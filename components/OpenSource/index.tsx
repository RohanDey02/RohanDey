import React from "react";
import openSourceData from "./opensource.json";
import OpenSourceEntry from "../../types/OpenSourceEntry";

const OpenSourceEntryCard: React.FC<OpenSourceEntry> = ({ project, projectUrl, description, technologies, contributions }) => {
    return (
        <div className="exp-card glass-hover">
            <div className="exp-card-right">
                <a className="hover:text-teal-300" href={projectUrl}>
                    <h3>{project}</h3>
                </a>
                <p className="text-slate-400 mt-2 text-sm leading-normal">{description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="contributions">
                    {contributions.map((contribution, index) => (
                        <li className="text-slate-400 mr-1.5 mt-2" key={index}>
                            <a className="flex-1 hover:text-teal-300" href={contribution.contributionUrl}>
                                <p className="mt-2 text-sm leading-normal">✅ {contribution.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
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

const OpenSource = () => {
    return <>
        <h2 className="mt-2 text-2xl text-slate-200 font-medium">Open-Source Contributions</h2>
        <div className="experience-list">
            {openSourceData.map((entry: OpenSourceEntry, index: number) => (
                <OpenSourceEntryCard key={index} {...entry} />
            ))}
        </div>
    </>;
};

export default OpenSource;