import Navigation from "../layouts/Navigation"
const Header = () => {
    return (
        <>
            <header className="p-4 fixed w-full top-0 backdrop-blur-[12px] z-10 ">
                <div className="container">
                    <div className="flex flex-wrap flex-row justify-between items-center">
                        <a href="/" className="w-[30%]">
                            <img src="/src/assets/images/logo.png" width={'175px'} alt="" />
                        </a>
                        <Navigation></Navigation>
                        <h6 className='text-white text-xl w-[30%] text-right'>Think Beyond With. <span className='text-op-green font-medium'>Shubham.</span></h6>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header