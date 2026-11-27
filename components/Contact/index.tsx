import { GitHub, LinkedIn } from './Icons';

const aboutParagraphs = [
    "I'm a software developer with 3+ years of professional experience building reliable, high-impact products across startups and enterprise teams.",
    "I enjoy solving complex engineering problems across web, cloud, and AI-enabled workflows, and I love turning ideas into production-ready systems.",
    "I care deeply about clean architecture, thoughtful user experience, and mentoring teammates while delivering measurable business impact.",
];

// Each focus area takes one of the palette's accent colours. Class names are
// written out in full so Tailwind keeps them when it purges unused CSS.
const focusAreas = [
    { label: "Full-Stack Development", className: "focus-chip-1" },
    { label: "Cloud and Platform Engineering", className: "focus-chip-2" },
    { label: "AI-Enabled Product Work", className: "focus-chip-3" },
];

const Contact = () => {
    return <section className="wrap section" id="about" aria-labelledby="about-h">
        <div className="about-card">
            <h2 id="about-h" className="about-tag">About</h2>
            <div className="mt-2 grid gap-5 text-[17px] leading-relaxed text-[var(--text-intro)]">
                {aboutParagraphs.map((text) => <p key={text}>{text}</p>)}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Focus areas">
                {focusAreas.map((area) => (
                    <li key={area.label} className={`focus-chip ${area.className}`}>{area.label}</li>
                ))}
            </ul>
            <div className="mt-6 flex gap-3">
                <LinkedIn />
                <GitHub />
            </div>
        </div>
    </section>;
};

export default Contact;
