import { useLayoutEffect, useRef } from "react";
import { MovingGlowAnimation } from "../../hooks/gsapAnimations";

const GlowingLight = () => {

    const glowRef = useRef();

    useLayoutEffect(() => {
        if (!glowRef.current) return;

        const cleanup = MovingGlowAnimation(".op-bg-glow", 11, glowRef.current);
        return () => cleanup?.();
    }, []);

    return (
        <div ref={glowRef} className="fixed top-0 left-0 w-full h-full backdrop-blur-[80px]">
            <div className="op-bg-glow fixed top-[10%] left-0 w-full h-full rounded-[50%]"></div>
        </div>
    )
}

export default GlowingLight