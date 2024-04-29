const Navbar = () => {
    return <div className="smMax:hidden main-div-left lg:block">
        <a className="group navbar-link" href="#experience">
            <span className="navbar-bullet"></span>
            <span>EXPERIENCE</span>
        </a>
        <a className="group navbar-link" href="#open-source">
            <span className="navbar-bullet"></span>
            <span>OPEN-SOURCE CONTRIBUTIONS</span>
        </a>
        <a className="group navbar-link" href="#projects">
            <span className="navbar-bullet"></span>
            <span>PROJECTS</span>
        </a>
    </div>;
};

export default Navbar;
