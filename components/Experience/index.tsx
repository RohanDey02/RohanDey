import React from "react";
import experienceData from "./experiences.json";
import ExperienceEntry from "../../types/ExperienceEntry";

const ExperienceEntryObject: React.FC<ExperienceEntry> = ({ startYear, endYear, role, company, description, technologies }) => {
    return (
        <div className="exp-entry">
            <h2>{company}</h2>
            <h3>{role}</h3>
            <p>{startYear} - {endYear}</p>
            <p>{description}</p>
            <h4>Technologies:</h4>
            <ul>
                {technologies.map((tech, index) => (
                    <li className="text-white" key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    )
}

const Experience = () => {
    return <div className="experience-list">
        {experienceData.map((experience: ExperienceEntry, index: number) => (
            <ExperienceEntryObject key={index} {...experience} />
        ))}
    </div>;
};

export default Experience;