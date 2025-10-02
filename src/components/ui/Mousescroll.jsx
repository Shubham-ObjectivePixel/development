import { useEffect } from "react"
import { scrollToExplore } from "../../hooks/gsapAnimations"

const Mousescroll = () => {

    useEffect(() => {
        scrollToExplore(".scroll-to-explore", 0.8);
    }, []);

    return (
        <>
            <div className="fixed bottom-4 left-4">
                <p className="text-white uppercase text-xs tracking-widest scroll-to-explore">scroll to explore</p>
            </div>
        </>
    )
}

export default Mousescroll