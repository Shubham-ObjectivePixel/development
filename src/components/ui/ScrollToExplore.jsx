import { useEffect } from "react"
import { scrollToExplore } from "../../hooks/gsapAnimations"

const ScrollToExplore = () => {

    useEffect(() => {
        scrollToExplore(".scroll-to-explore", 1);
    }, []);

    return (
        <>
            <div className="fixed bottom-4 right-4">
                <p className="text-white uppercase text-xs tracking-widest scroll-to-explore">scroll to explore</p>
            </div>
        </>
    )
}

export default ScrollToExplore