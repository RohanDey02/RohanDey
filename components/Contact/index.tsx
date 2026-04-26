import ReactMarkdown from 'react-markdown';
import { GitHub, LinkedIn } from './Icons';

const AboutMe = `
I'm a software developer with 2+ years of hands-on experience building software for startups and enterprise teams.

I love solving high-leverage product and platform problems, and I thrive in environments where strong engineering meets strong collaboration.
`

const Contact = () => {
    return <section className='section-shell glass-hover'>
        <p className='section-tag'>About</p>
        <h3 className='section-heading'>Building software that people remember</h3>
        <ReactMarkdown className="text-slate-300 mt-2 text-base leading-relaxed whitespace-pre-line">{AboutMe}</ReactMarkdown>
        <div className='mt-4 flex flex-wrap gap-2'>
            <span className='rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200'>Cloud and Platform Engineering</span>
            <span className='rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200'>AI-Enabled Solutions</span>
            <span className='rounded-full border border-indigo-300/35 bg-indigo-300/10 px-3 py-1 text-xs font-semibold text-indigo-200'>Product-Focused Development</span>
        </div>
        <div className='flex lg:justify-start lg:gap-3 gap-3 pt-4'>
            <LinkedIn />
            <GitHub />
        </div>
    </section>;
};

export default Contact;