import { useLayoutEffect, useRef } from "react";
import { VideoPlayOnScroll } from "../../hooks/gsapAnimations";

const BannerVideo = () => {

    const elRef = useRef();

    useLayoutEffect(() => {
        if (!elRef.current) return;

        const cleanup = VideoPlayOnScroll(".video", 11, elRef.current);
        return () => cleanup?.();
    }, []);

    return (
        <video ref={elRef} className="video fixed top-0 left-0 w-screen h-screen mix-blend-overlay scale-x-[1.2] scale-y-[1.009] object-cover" playsInline={true} webkit-playsinline="true" preload="auto" muted="muted">
            <source src="../src/assets/Video/white-waves-2.mp4" type="video/mp4" />
        </video>
    )
}

export default BannerVideo