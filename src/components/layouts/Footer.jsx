import ScrollToExplore from '../ui/ScrollToExplore'
import Mousepointer from '../../hooks/Mousepointer'
import Smoothscroll from '../../hooks/Smoothscroll'

const Footer = () => {
    return (
        <>
            <footer className=''>
                <div className='w-full container xl:px-30 md:px-20 px-10 mx-auto max-w-4xl'>
                    <div className='flex flex-wrap sm:flex-row flex-col justify-between border-t-1 border-solid border-whiteColor-25 gap-y-2 lg:py-30 py-20'>
                        <div className='sm:w-1/2 w-full text-left text-secondaryColor'>&copy; Objective Pixel 2025</div>
                        <div className='sm:w-1/2 w-full sm:text-right text-left'><a href="mailto:shubham@objectivepixel.in" className='text-secondaryColor'>shubham@objectivepixel.in</a></div>
                    </div>
                </div>
            </footer>
            <ScrollToExplore />
            <Mousepointer />
            <Smoothscroll />
        </>
    )
}

export default Footer