type PreviousRole = {
    title: string;
    period: string;
};

type ExperienceEntry = {
    startYear: string;
    endYear: string;
    role: string;
    company: string;
    companyUrl: string;
    description: string;
    technologies: string[];
    previousRole?: PreviousRole;
};

export default ExperienceEntry;