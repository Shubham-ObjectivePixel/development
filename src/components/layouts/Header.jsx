import { useEffect } from "react";
import { fadeDownHeader } from "../../hooks/gsapAnimations";

import Logo from "../ui/Logo";
import Navigation from "../ui/Navigation";
import Tagline from "../ui/Tagline";

import { useHeaderContext } from "../context/HeaderContext";

const Header = () => {
    const { activeSection } = useHeaderContext();

    useEffect(() => {
        fadeDownHeader(".fade-down");
    }, []);

    return (
        <header className={`p-4 fixed w-full top-0 backdrop-blur-[4px] z-20 fade-down header-style ${activeSection === "projects" ? "white-bg" : ""}`}>
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
