import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // same as your code
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
            smoothWheel: true,
            smoothTouch: true, // disable touch smooth scroll (optional)
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
