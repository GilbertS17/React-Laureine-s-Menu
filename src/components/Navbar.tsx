import { NavItem } from "./NavItem";

const Navbar = () => {
    return (
        <div className="navbar flex justify-between p-10">
            <h1 className="text-4xl font-bold text-gray-800 tracking-wide drop-shadow-md md:text-5xl">
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