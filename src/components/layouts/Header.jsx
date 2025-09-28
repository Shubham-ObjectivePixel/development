import { useEffect } from "react";
import { fadeDownHeader } from "../../hooks/gsapAnimations";
import Logo from "../ui/Logo"
import Navigation from "../layouts/Navigation"
import Tagline from "../ui/Tagline"

const Header = () => {
    useEffect(() => {
        fadeDownHeader(".fade-down", 3);
    }, []);

    return (
        <>

        </>
    )
}

export default Header