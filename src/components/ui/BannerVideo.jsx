const BannerVideo = () => {

    return (
        <video className="video fixed top-0 left-0 w-screen h-screen scale-x-[1.2] scale-y-[1.009] object-cover mix-blend-overlay" loop autoPlay muted="muted">
            <source src="../src/assets/Video/bg.mp4" type="video/mp4" />
        </video>
    )
}

export default BannerVideo