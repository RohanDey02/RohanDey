import ReactMarkdown from 'react-markdown';
import { GitHub, LinkedIn } from './Icons';

const AboutMe = `
My career trajectory has led me through diverse experiences, crafting software solutions for both nimble startups and industry giants leading to **over 1 year of work experience**.

Let's connect and explore the possibilities together!
`

const Contact = () => {
    return <div className='glass-hover sm:pl-2 sm:pr-2 sm:pb-2'>
        <ReactMarkdown className="text-slate-400 mt-2 text-base leading-normal whitespace-pre-line">{AboutMe}</ReactMarkdown>
        <div className='flex lg:justify-start lg:gap-3 pt-2'>
            <LinkedIn />
            <GitHub />
        </div>
    </div>;
};

export default Contact;