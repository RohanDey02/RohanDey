const Navbar = () => {
    return <div className="pl-96 pt-16 text-slate-400">
        <a className="group navbar-link" href="#about">
            <span className="navbar-bullet"></span>
            <span>ABOUT</span>
        </a>
        <a className="group navbar-link" href="#experience">
            <span className="navbar-bullet"></span>
            <span>EXPERIENCE</span>
        </a>
        <a className="group navbar-link" href="#projects">
            <span className="navbar-bullet"></span>
            <span>PROJECTS</span>
        </a>
    </div>;
};

export default Navbar;
