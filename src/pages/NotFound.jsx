import GlowingLight from "../components/ui/GlowingLight";

const NotFoundPage = () => {
    return (
        <>
            <main className="h-screen w-screen">
                <GlowingLight />
                <div className="flex flex-wrap h-full w-full items-center justify-center relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-[7vw] font-makizlo-font">404</h1>
                        <p className="text-xl">Oops! Page not found</p>
                        <a href="/" className="hover:text-op-green">Return to Home</a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default NotFoundPage