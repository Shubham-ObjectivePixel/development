import { TbGridDots } from "react-icons/tb";
import { useRef } from "react";
import { navigationAnimation, navigationCloseAnimation, mouseOverEffect } from "../../hooks/gsapAnimations";

const Navigation = () => {
    const el = useRef();

    const handleClick = (e) => {
        navigationAnimation(".navigation-animation", 0.8, el.current);
    };

    const handleCloseClick = (e) => {
        navigationCloseAnimation(".navigation-animation", 0.2, el.current);
    }

    const handelMouseOver = (e) => {
        mouseOverEffect(".navigation-section", 1, el.current);
    }

    return (
        <>
            <div ref={el} className="w-[33%] flex flex-wrap justify-end relative">
                <div onClick={handleClick} onMouseEnter={handelMouseOver} className="w-[60%] text-white border-b border-op-white-25 py-3 px-4 navigation-section cursor-pointer">
                    <div className="flex flex-wrap justify-between items-center">
                        <span className="uppercase text-sm tracking-widest">Vision</span>
                        <TbGridDots className="w-[25px] h-[25px]" />
                    </div>
                </div>
                <div className="navigation-wrapper">
                    <div className="bg-white w-[80px] h-[80px] rounded-[50%] fixed right-0 top-0 navigation-animation scale-[0]"></div>
                    <nav className="p-2 flex flex-row items-center rounded-full gap-4 bg-op-white-10 relative z-10">
                        <ul className="flex flex-row items-center">
                            <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">About</a></li>
                            <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Work</a></li>
                            <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Contact</a></li>
                        </ul>
                    </nav>
                    <div onClick={handleCloseClick} className="navigation-close relative z-10">
                        X
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation