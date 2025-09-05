const Navigation = () => {
    return (
        <nav className="sticky top-6 bottom-6 flex items-center justify-center">
            <ul className="p-2 flex flex-row items-center rounded-full gap-4 op-nav-items">
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 bg-white hover:bg-white hover:text-black">Home</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 hover:bg-white text-white hover:text-black">About</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 hover:bg-white text-white hover:text-black">Projects</a></li>
                <li className="op-nav-item"><a href="" className="inline-block rounded-full px-5 py-2 hover:bg-white text-white hover:text-black">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation