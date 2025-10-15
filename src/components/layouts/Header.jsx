import { useEffect } from "react";
import { fadeDownHeader } from "../../hooks/gsapAnimations";

import Logo from "../ui/Logo";
import Navigation from "../ui/Navigation";
import Tagline from "../ui/Tagline";

const Header = () => {

    useEffect(() => {
        fadeDownHeader(".fade-down");
    }, []);

    return (
        <header id="header" className={`px-4 py-3 fixed w-full top-0 backdrop-blur-[4px] z-20 fade-down header-style`}>
            <div className="container">
                <div className="flex flex-wrap flex-row justify-between items-center">
                    <Logo></Logo>
                    <Tagline></Tagline>
                    <Navigation></Navigation>
                </div>
            </div>
        </header>
    );
};

export default Header;
