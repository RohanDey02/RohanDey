const LeftHeading = () => {
    return <section className="main-div-left section-shell">
        <h1 className="mt-3 text-5xl md:text-6xl font-bold text-slate-100">Rohan Dey</h1>
        <h2 className="mt-3 text-xl text-slate-200 font-medium">Software Developer</h2>
        <h2 className="mt-0 text-xl text-slate-300 font-medium">University of Toronto Computer Science '24</h2>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
            I build high-impact software across product engineering, cloud systems, and AI-enabled workflows.
            I care deeply about elegant interfaces, reliable systems, and measurable business outcomes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
            <a
                href="mailto:deyrohan15@gmail.com"
                className="rounded-lg border border-slate-400/40 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-200 hover:text-white"
            >
                Email Me
            </a>
        </div>
    </section>;
};

export default LeftHeading;
