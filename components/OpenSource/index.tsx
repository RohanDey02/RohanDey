import React from "react";
import openSourceData from "./opensource.json";
import OpenSourceEntry from "../../types/OpenSourceEntry";

const OpenSourceEntryCards: React.FC<OpenSourceEntry> = ({ project, contributions }) => {
    return <>
        {contributions.map((contribution, index) => (
            <a key={index} className="card oss-card" href={contribution.contributionUrl} target="_blank" rel="noreferrer">
                <div className="flex-[1_1_220px]">
                    <p className="text-sm text-accent-3">{contribution.label}</p>
                    <h3 className="card-title mt-1 text-[22px]">{project}</h3>
                </div>
                <p className="flex-[3_1_360px]">{contribution.description}</p>
            </a>
        ))}
    </>;
};

const OpenSource = (props: { sectionId: string; }) => {
    return <section className="wrap section" id={props.sectionId} data-section={props.sectionId} aria-labelledby="oss-h">
        <h2 id="oss-h" className="section-heading mb-7">Open source</h2>
        <div className="grid gap-5">
            {openSourceData.map((entry: OpenSourceEntry, index: number) => (
                <OpenSourceEntryCards key={index} {...entry} />
            ))}
        </div>
    </section>;
};

export default OpenSource;
