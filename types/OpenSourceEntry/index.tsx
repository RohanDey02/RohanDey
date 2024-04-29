type Contribution = {
    description: string;
    contributionUrl: string;
}

type OpenSourceEntry = {
    project: string;
    projectUrl: string;
    description: string;
    technologies: string[];
    contributions: Contribution[];
};

export default OpenSourceEntry;
