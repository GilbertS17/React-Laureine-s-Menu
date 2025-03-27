import { NavItem } from "./NavItem";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1 className="title">
                <span className="bg-clip-text">
                    Laurene's Menu
                </span>
            </h1>
            <div className="">
                <NavItem address="/" title="Home" />
                <NavItem address="/about" title="About" />
                <NavItem address="/contact" title="Contact" />
            </div>
        </div>
    );
}

export default Navbar;