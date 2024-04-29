const Navbar = (props: { expRef: React.LegacyRef<HTMLDivElement>, osRef: React.LegacyRef<HTMLDivElement>, projRef: React.LegacyRef<HTMLDivElement> }) => {
    const execScroll = (pos: number) => {
        let refObject = null;
        console.log(pos);
        switch (pos) {
            case 0:
                refObject = props.expRef as React.RefObject<HTMLDivElement>;
                if (refObject !== null && refObject.current) {
                    refObject.current.scrollIntoView();
                }
                break;
            case 1:
                refObject = props.osRef as React.RefObject<HTMLDivElement>;
                if (refObject !== null && refObject.current) {
                    refObject.current.scrollIntoView();
                }
                break;
            case 2:
                refObject = props.projRef as React.RefObject<HTMLDivElement>;
                if (refObject !== null && refObject.current) {
                    refObject.current.scrollIntoView();
                }
                break;
            default:
                console.log("Error, no such case!")
        }
    };

    return <div className="smMax:hidden main-div-left lg:block">
        <a className="group navbar-link" href="#experience" onClick={() => execScroll(0)}>
            <span className="navbar-bullet"></span>
            <span>EXPERIENCE</span>
        </a>
        <a className="group navbar-link" href="#open-source" onClick={() => execScroll(1)}>
            <span className="navbar-bullet"></span>
            <span>OPEN-SOURCE CONTRIBUTIONS</span>
        </a>
        <a className="group navbar-link" href="#projects" onClick={() => execScroll(2)}>
            <span className="navbar-bullet"></span>
            <span>PROJECTS</span>
        </a>
    </div>;
};

export default Navbar;
