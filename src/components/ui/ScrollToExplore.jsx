import { useEffect } from "react"
import { scrollToExplore } from "../../hooks/gsapAnimations"

import { useHeaderContext } from "../context/HeaderContext";

const ScrollToExplore = () => {

    const { activeSection } = useHeaderContext();

    useEffect(() => {
        scrollToExplore(".scroll-to-explore", 1);
    }, []);

    return (
        <>
            <div className="fixed z-10 bottom-4 left-4">
                <p className={`uppercase text-xs tracking-widest scroll-to-explore transition duration-700 ease-in-out ${activeSection === "projects" ? "text-op-darkblue" : "text-white"}`}>scroll to explore</p>
            </div>
        </>
    )
}

export default ScrollToExplore