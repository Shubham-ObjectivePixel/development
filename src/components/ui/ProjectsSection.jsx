import Cards from "../ui/Cards";

const ProjectsSection = () => {
    return (
        <>
            <section className="h-[200vh] relative rounded-xl m-8 p-8">
                <h2 className="section-title-effect uppercase text-[10vw] text-center leading-normal text-op-white-25 fixed">
                    {/* Featured Work */}
                    Lorem Ipsum
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