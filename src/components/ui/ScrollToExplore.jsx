import { useEffect } from "react"
import { scrollToExplore } from "../../hooks/gsapAnimations"

const ScrollToExplore = () => {

    useEffect(() => {
        scrollToExplore(".scroll-to-explore", 1);
    }, []);

    return (
        <>
            <div id="footer" className="fixed z-10 bottom-4 left-4">
                <p className={`uppercase text-xs tracking-widest scroll-to-explore transition duration-700 ease-in-out text-secondaryColor`}>scroll to explore</p>
            </div>
        </>
    )
}

export default ScrollToExplore