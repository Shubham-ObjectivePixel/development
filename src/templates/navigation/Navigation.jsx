const Navigation = () => {
    return (
        <nav className="sticky top-6 bottom-6 flex items-center justify-center w-[40%] mx-[auto]">
            <ul className="p-2 flex flex-row items-center rounded-full gap-4 bg-op-white-25">
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 bg-op-green text-op-darkBlue font-medium leading-none">Home</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">About</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Projects</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 transition duration-500 transition-discrete hover:bg-op-green text-white hover:text-op-darkBlue font-medium leading-none">Contact</a></li>
            </ul>
        </nav>
    ) 
}

export default Navigation