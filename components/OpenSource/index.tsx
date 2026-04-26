import React from "react";
import openSourceData from "./opensource.json";
import OpenSourceEntry from "../../types/OpenSourceEntry";

const OpenSourceEntryCard: React.FC<OpenSourceEntry> = ({ project, projectUrl, description, technologies, contributions }) => {
    return (
        <article className="exp-card exp-card-single showcase-card glass-hover">
            <div className="exp-card-right">
                <a className="hover:text-cyan-200 transition" href={projectUrl} target="_blank" rel="noreferrer">
                    <h3>{project}</h3>
                </a>
                <p className="text-slate-300 mt-2 text-sm leading-normal">{description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="contributions">
                    {contributions.map((contribution, index) => (
                        <li className="text-slate-400 mr-1.5 mt-2" key={index}>
                            <a className="flex-1 hover:text-cyan-200 transition" href={contribution.contributionUrl} target="_blank" rel="noreferrer">
                                <p className="mt-2 text-sm leading-normal">Ship: {contribution.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
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

const OpenSource = (props: { refProp: React.LegacyRef<HTMLDivElement> | undefined; sectionId: string; }) => {
    return <section className="section-shell" id={props.sectionId} data-section={props.sectionId}>
        <p className="section-tag">Community</p>
        <h2 className="section-heading mt-1" ref={props.refProp}>Open-Source Contributions</h2>
        <div className="experience-list">
            {openSourceData.map((entry: OpenSourceEntry, index: number) => (
                <OpenSourceEntryCard key={index} {...entry} />
            ))}
        </div>
    </section>;
};

export default OpenSource;