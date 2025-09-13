import Logo from "../ui/Logo"
import Navigation from "../layouts/Navigation"
import Tagline from "../ui/Tagline"
const Header = () => {
    return (
        <>
            <header className="p-4 fixed w-full top-0 backdrop-blur-[12px] z-10 ">
                <div className="container">
                    <div className="flex flex-wrap flex-row justify-between items-center">
                        <Logo></Logo>
                        <Navigation></Navigation>
                        <Tagline></Tagline>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header