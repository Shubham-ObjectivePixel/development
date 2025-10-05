import { useEffect, useRef } from "react";

const Mousepointer = () => {
    const cursorRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        let mouseX = 0,
            mouseY = 0;
        let xp = 0,
            yp = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX; // <-- stays relative to viewport
            mouseY = e.clientY; // <-- no scroll shift
        }; 1

        const animate = () => {
            xp += (mouseX - xp) / 10;
            yp += (mouseY - yp) / 10;

            if (cursorRef.current) {
                cursorRef.current.style.left = `${xp}px`;
                cursorRef.current.style.top = `${yp}px`;
            }

            requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", handleMouseMove);
        requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const boxes = document.querySelectorAll("body a, .navigation-section, .navigation-close-button");

        const addGlow = () => glowRef.current?.classList.add("active");
        const removeGlow = () => glowRef.current?.classList.remove("active");

        boxes.forEach((box) => {
            box.addEventListener("mouseenter", addGlow);
            box.addEventListener("mouseleave", removeGlow);
        });

        return () => {
            boxes.forEach((box) => {
                box.removeEventListener("mouseenter", addGlow);
                box.removeEventListener("mouseleave", removeGlow);
            });
        };
    }, []);

    return (
        <div ref={cursorRef} className="cursor-element">
            <div ref={glowRef} className="cursor-glow"></div>
            <span></span>
        </div>
    );
};

export default Mousepointer;
