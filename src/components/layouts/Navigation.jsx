const Navigation = () => {
    return (
        <div className="flex items-end justify-end w-[33%] mx-[auto]">
            <nav className="p-2 flex flex-row items-center rounded-full gap-4 bg-op-white-10">
                <ul className="flex flex-row items-center">
                    {/* <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 bg-op-green text-op-darkBlue font-medium leading-none">Home</a></li> */}
                    <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">About</a></li>
                    <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Work</a></li>
                    <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Contact</a></li>
                </ul>
                {/* <div className="toggler text-white">Open/Close</div> */}
            </nav>
        </div>
    )
}

export default Navigation