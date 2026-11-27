import React from "react";
import experienceData from "./experiences.json";
import ExperienceEntry from "../../types/ExperienceEntry";
import TechChips from "../TechChips";

// Timeline dots cycle through the accent colours.
const dotColors = ["var(--a1)", "var(--a2)", "var(--a3)", "var(--a2)"];

const ExperienceEntryRow: React.FC<ExperienceEntry & { dot: string }> = ({ startYear, endYear, role, company, companyUrl, description, technologies, previousRole, dot }) => {
    return (
        <div className="tl">
            <p className="tl-when">{startYear} – {endYear}</p>
            <div className="tl-rail" aria-hidden="true">
                <div className="tl-line"></div>
                <div className="tl-dot" style={{ background: dot }}></div>
            </div>
            <div className="tl-body">
                <a className="card" href={companyUrl} target="_blank" rel="noreferrer">
                    <h3 className="card-title text-lg">{role} <span className="text-accent-2">at {company}</span></h3>
                    {previousRole && (
                        <p className="mt-0.5 text-sm">{previousRole.title}, {previousRole.period}</p>
                    )}
                    <p className="mt-2.5 max-w-[40em]">{description}</p>
                    <TechChips technologies={technologies} className="mt-3.5" />
                </a>
            </div>
        </div>
    );
};

const Experience = (props: { sectionId: string; }) => {
    return <section className="wrap section" id={props.sectionId} data-section={props.sectionId} aria-labelledby="exp-h">
        <h2 id="exp-h" className="section-heading mb-9">Experience</h2>
        {experienceData.map((experience: ExperienceEntry, index: number) => (
            <ExperienceEntryRow key={index} {...experience} dot={dotColors[index % dotColors.length]} />
        ))}
    </section>;
};

export default Experience;
