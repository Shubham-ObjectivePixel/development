import ScrollToExplore from '../ui/ScrollToExplore'
import Mousepointer from '../../hooks/Mousepointer'
import Smoothscroll from '../../hooks/Smoothscroll'

const Footer = () => {
    return (
        <>
            <footer className=''>
                <div className='w-full container px-30 mx-auto max-w-4xl'>
                    <div className='flex flex-wrap flex-row justify-between border-t-1 border-solid border-whiteColor-25 py-30'>
                        <div className='w-1/2 text-left text-secondaryColor'>&copy; Objective Pixel 2025</div>
                        <div className='w-1/2 text-right'><a href="mailto:shubham@objectivepixel.in" className='text-secondaryColor'>shubham@objectivepixel.in</a></div>
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