import ReactMarkdown from 'react-markdown';
import { GitHub, LinkedIn } from './Icons';

const AboutMe = `
I'm a software developer with 2+ years of professional experience building reliable, high-impact products across startups and enterprise teams.

I enjoy solving complex engineering problems across web, cloud, and AI-enabled workflows, and I love turning ideas into production-ready systems.

I care deeply about clean architecture, thoughtful user experience, and mentoring teammates while delivering measurable business impact.
`

const Contact = () => {
    return <section className='section-shell glass-hover'>
        <p className='section-tag'>About</p>
        <ReactMarkdown className="text-slate-300 mt-2 text-base leading-relaxed whitespace-pre-line">{AboutMe}</ReactMarkdown>
        <div className='mt-4 flex flex-wrap gap-2'>
            <span className='rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200'>Full-Stack Development</span>
            <span className='rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200'>Cloud and Platform Engineering</span>
            <span className='rounded-full border border-indigo-300/35 bg-indigo-300/10 px-3 py-1 text-xs font-semibold text-indigo-200'>AI-Enabled Product Work</span>
        </div>
        <div className='flex lg:justify-start lg:gap-3 gap-3 pt-4'>
            <LinkedIn />
            <GitHub />
        </div>
    </section>;
};

export default Contact;