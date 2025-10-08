import Cards from "../ui/Cards";

const ProjectsSection = () => {
    return (
        <>
            <section className="h-[200vh] relative z-10 rounded-xl bg-black">
                <h2 className="section-title-effect uppercase text-[10vw] text-center leading-normal">
                    Work
                </h2>
                <div className="relative z-10 pt-[8.5vw]">
                    <div className="flex justify-between gap-3">
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProjectsSection