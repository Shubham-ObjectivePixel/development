import { TbGridDots } from "react-icons/tb";
import { useRef, useLayoutEffect } from "react";
import { navigationVisible, navigationInVisible, mainNavigationVisible, mainNavigationInVisible, navigationBGVisible, navigationBGInVisible, closeButtonVisible, closeButtonInVisible, RotateButton } from "../../hooks/gsapAnimations";

const Navigation = () => {
    const el = useRef();

    const navigationHandlerOpen = (e) => {
        navigationVisible(".navigation-wrapper", 0, el.current);
        mainNavigationVisible(".main-navigation", 1, el.current);
        navigationBGVisible(".navigation-animation", 0.8, el.current);
        closeButtonVisible(".navigation-close-button", 0.8, el.current);
    };

    const navigationHandlerClose = (e) => {
        navigationInVisible(".navigation-wrapper", 0.5, el.current);
        mainNavigationInVisible(".main-navigation", 0, el.current);
        navigationBGInVisible(".navigation-animation", 0.3, el.current);
        closeButtonInVisible(".navigation-close-button", 0.2, el.current);
    }

    useLayoutEffect(() => {
        if (!el.current) return;
        RotateButton(".op-rotation-buttons", 2, el.current);
    }, []);

    return (
        <>
            <div ref={el} className="w-[33%] flex flex-wrap justify-end relative">
                <div onClick={navigationHandlerOpen} className="w-[60%] text-white border-b border-op-white-25 py-3 px-4 navigation-section cursor-pointer transition duration-700 ease-in-out hover:bg-white hover:text-op-darkBlue">
                    <div className="flex flex-wrap justify-between items-center">
                        <span className="uppercase text-sm tracking-widest">Vision</span>
                        <TbGridDots className="w-[25px] h-[25px]" />
                    </div>
                </div>
                <div className="navigation-wrapper invisible fixed top-0 left-0 w-screen h-screen">
                    <div className="navigation-animation bg-op-navyBlue w-[80px] h-[80px] rounded-[50%] fixed right-0 top-0 scale-[0]"></div>
                    <div className="navigation-content relative z-10 w-full h-full">
                        <div onClick={navigationHandlerClose} className="op-rotation-buttons navigation-close-button absolute top-6 right-6 w-[8vw] h-[8vw] rounded-full z-10 flex flex-wrap items-center justify-center cursor-pointer text-op-darkBlue bg-op-green hover:bg-op-white-25 hover:text-white">
                            <span className="uppercase text-sm tracking-widest">close</span>
                        </div>
                        <div className="navigation-socialMedia absolute bottom-6 right-6">
                            <a href="#" target="_blank" className="uppercase text-sm tracking-widest text-white">Instagram</a>
                        </div>
                        <div className="main-navigation h-screen w-[89%] pl-[8vw] invisible">
                            <nav className="flex flex-col h-full justify-center">
                                <ul className="flex flex-col gap-[4vw] justify-between h-[70%]">
                                    <li className="op-nav-item"><a href="/about" className="text-stroke uppercase text-op-white-25 hover:text-white font-makizlo-font text-[8vw] leading-[normal] tracking-widest transition duration-700 ease-in-out">About</a></li>
                                    <li className="op-nav-item"><a href="/work" className="text-stroke uppercase text-op-white-25 hover:text-white font-makizlo-font text-[8vw] leading-[normal] tracking-widest transition duration-700 ease-in-out">Work</a></li>
                                    <li className="op-nav-item"><a href="/contact" className="text-stroke uppercase text-op-white-25 hover:text-white font-makizlo-font text-[8vw] leading-[normal] tracking-widest transition duration-700 ease-in-out">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation