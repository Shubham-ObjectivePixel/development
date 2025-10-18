import { useEffect, useRef } from "react";

const Mousepointer = () => {
    const cursorRef = useRef(null);
    const glowRef = useRef(null);
    const projectViewRef = useRef(null);

    // ===== Mouse movement follow logic =====
    useEffect(() => {
        let mouseX = 0,
            mouseY = 0;
        let xp = 0,
            yp = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            xp += (mouseX - xp) / 10;
            yp += (mouseY - yp) / 10;

            if (cursorRef.current) {
                cursorRef.current.style.left = `${xp}px`;
                cursorRef.current.style.top = `${yp}px`;
            }

            // Move “View Project” text with cursor
            if (projectViewRef.current) {
                projectViewRef.current.style.left = `${mouseX}px`;
                projectViewRef.current.style.top = `${mouseY}px`;
            }

            requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", handleMouseMove);
        requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // ===== Glow effect on hover for links / nav =====
    useEffect(() => {
        const boxes = document.querySelectorAll(
            "body a, .navigation-section, .navigation-close-button"
        );

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

    // ===== Custom hover effect for .view-project links =====
    useEffect(() => {
        const viewLinks = document.querySelectorAll("a.view-project");

        const showViewText = () => projectViewRef.current?.classList.add("active");
        const hideViewText = () => projectViewRef.current?.classList.remove("active");

        viewLinks.forEach((link) => {
            link.addEventListener("mouseenter", showViewText);
            link.addEventListener("mouseleave", hideViewText);
        });

        return () => {
            viewLinks.forEach((link) => {
                link.removeEventListener("mouseenter", showViewText);
                link.removeEventListener("mouseleave", hideViewText);
            });
        };
    }, []);

    return (
        <>
            {/* Cursor */}
            <div ref={cursorRef} className="cursor-element">
                <div ref={glowRef} className="cursor-glow"></div>
                <span></span>
            </div>

            {/* Hover text for .view-project links */}
            <div ref={projectViewRef} className="project-view">
                View Project
            </div>
        </>
    );
};

export default Mousepointer;
