import { TbGridDots } from "react-icons/tb";

const Navigation = () => {
    return (
        <>
            <div className="w-[33%] flex flex-wrap justify-end relative">
                <div className="w-[60%] text-white border-b border-op-white-25 py-3 px-4 navigation-section cursor-pointer">
                    <div className="flex flex-wrap justify-between items-center">
                        <span className="uppercase text-sm tracking-widest">Vision?</span>
                        <TbGridDots className="w-[25px] h-[25px]" />
                    </div>
                </div>
                {/* <div className="w-[80%] bg-white h-[400px] p-8 absolute rounded-lg backdrop-blur-[80px]"></div> */}

            </div>
        </>
    )
}

export default Navigation