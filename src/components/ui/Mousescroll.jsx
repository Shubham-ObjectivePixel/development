import { useEffect } from "react"
import { scrollBarMove } from "../../hooks/gsapAnimations"

const Mousescroll = () => {

    useEffect(() => {
        scrollBarMove(".op-scrollBar", 0.8);
    }, []);

    return (
        <>
            <div className="w-[31px] h-[50px] rounded-full flex flex-wrap items-start justify-center pt-2 border-2 border-white fixed bottom-4 right-4">
                <div className="op-scrollBar w-[3px] h-[10px] bg-op-green rounded-full"></div>
            </div>
        </>
    )
}

export default Mousescroll