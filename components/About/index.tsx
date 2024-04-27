import ReactMarkdown from 'react-markdown';

const AboutMe = `
My career trajectory has led me through diverse experiences, crafting software solutions for both nimble startups and industry giants leading to **over 1 year of work experience**.

My journey into the world of Computer Science started with a leap of faith, guided only by the desire to immerse myself in technology. Fast-forward to today and I've honed my skills and knowledge through hands-on experience and academic rigour where I've thrived on the challenges of transforming concepts into tangible, impactful software solutions. Whether navigating the intricate landscapes of small-scale projects or orchestrating the complexities of enterprise-level systems, I've embraced each opportunity as a chance to innovate, collaborate, and push boundaries.

As I continue to evolve in this dynamic field, I remain committed to leveraging technology to address real-world challenges, empower individuals, and drive positive change. With a blend of technical expertise, creative problem-solving, and a relentless passion for learning, I am eager to embark on the next chapter of my journey, where I can continue to contribute, grow, and make a meaningful impact in the world of software development/engineering.

Let's connect and explore the possibilities together!
`

const About = () => {
    return <div className='glass-hover pl-2 pr-2'>
        <ReactMarkdown className="text-slate-400 mt-2 text-base leading-normal whitespace-pre-line">{AboutMe}</ReactMarkdown>
    </div>;
};

export default About;