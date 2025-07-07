import ReactMarkdown from 'react-markdown';
import { GitHub, LinkedIn } from './Icons';

const AboutMe = `
I'm a software developer with over 2 years of hands-on experience building solutions for both startups and large companies. I enjoy tackling new challenges, learning new technologies, and creating real impact through code.

Let's connect!
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