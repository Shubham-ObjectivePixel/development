import { useLayoutEffect, useRef } from "react";
import { MovingGlowAnimation } from "../../hooks/gsapAnimations";

const GlowingLight = () => {

    const glowRef = useRef();

    useLayoutEffect(() => {
        if (!glowRef.current) return;

        const cleanup = MovingGlowAnimation(".video", 11, glowRef.current);
        return () => cleanup?.();
    }, []);

    return (
        // <div className="fixed top-0 left-0 w-full h-full backdrop-blur-[80px]">
        //     <div className="op-bg-glow fixed top-[10%] left-0 w-full h-full rounded-[50%]"></div>
        // </div>

        <video ref={glowRef} className="video fixed top-0 left-0 w-screen h-screen mix-blend-overlay scale-x-[1.2] scale-y-[1.009]" playsInline={true} webkit-playsinline="true" preload="auto" muted="muted">
            <source src="../src/assets/Video/white-waves-2.mp4" type="video/mp4" />
        </video>
    )
}

export default GlowingLight