import Clover from '@img/Clover.png'
import AboutUsOne from '@img/AboutUsOne.png'
import AboutUsTwo from '@img/AboutUsTwo.jpg'
import { IoIosArrowRoundUp } from 'react-icons/io'


const AboutUs = () => {
    return (
        <div className='box'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 mb-10">
                <div className='w-full order-2 md:order-1 md:w-1/2'>
                    <img src={AboutUsOne} className='h-80 rounded-2xl object-bottom w-full object-cover' alt="" />
                </div>
                <div className='w-full md:order-2 order-1 mb-5 md:mb-0 md:w-1/2 text-[#7E817C] space-y-3 md:space-y-5'>
                    <h4 className='text-black text-3xl'>ABOUT US</h4>
                    <p>We are full service real estate agency dedicated to helping you achieve your real estate goals. Whether you are looking to buy, sell, or rent a property, we have the experience and expertise to guide you through every step of the process.</p>
                    <p className='flex justify-start items-center'>99% satisfied clients  <IoIosArrowRoundUp className='rotate-45 h-6 w-6 mt-1' /></p>
                    <button className="bg-[#070C0E] text-[#F2F2F2] rounded-2xl px-5 py-1">CONTACT US</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center '>
                <div className='w-full md:w-1/2 flex flex-col justify-start items-stretch px-4 md:px-10 gap-y-10 '>
                    <div className='grid grid-cols-2 md:gap-5 lg:gap-10 place-items-baseline'>
                        <div className='flex justify-between w-full gap-x-2 lg:gap-x-4 items-center '>
                            <img src={Clover} className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" alt="" />
                            <div className="text-center w-full">
                                <p className='md:text-2xl lg:text-5xl'>1,500+</p>
                                <p className='mt-1 text-xs lg:text-sm'>PROJECTS COMPLETED</p>
                            </div>
                        </div>
                        <div className='flex justify-between gap-x-2 w-full lg:gap-x-4 items-center'>
                            <img src={Clover} className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" alt="" />
                            <div className="text-center w-full">
                                <p className='md:text-2xl lg:text-5xl'>950+</p>
                                <p className='mt-1 text-xs'>WORLD CLIENT</p>
                            </div>
                        </div>
                        <div className='flex justify-between w-full gap-x-2 lg:gap-x-4 items-center'>
                            <img src={Clover} className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" alt="" />
                            <div className="text-center w-full">
                                <p className='md:text-2xl lg:text-5xl'>235+</p>
                                <p className='mt-1 text-xs'>UNITS READY</p>
                            </div>
                        </div>
                        <div className='flex justify-between w-full gap-x-2 lg:gap-x-4 items-center'>
                            <img src={Clover} className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" alt="" />
                            <div className="text-center w-full">
                                <p className='md:text-2xl lg:text-5xl'>$55M+</p>
                                <p className='mt-1 text-xs'>EARNING REVENUE</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-[#7E817C] mb-8 md:mb-0 '>Embarking of your investment journey can be a thriling and rewarding experience . We walk you through the fundamental steps to kickstart your investment portfolio with confidence.</p>
                </div>
                <div className='w-full md:w-1/2 relative'>
                    <img src={AboutUsTwo} className='h-[400px] rounded-2xl object-bottom w-full object-cover' alt="" />
                    <div className='hidden md:block absolute bg-[#A9DD24] rounded-2xl p-4 bottom-4 left-4'>
                        <p className='md:text-lg lg:text-xl mb-1'>NORTH MELBOURNE</p>
                        <p className='text-[#7E817C] md:text-xs lg:text-sm'>Net Income $240.000</p>
                        <p className='text-[#7E817C] md:text-xs lg:text-sm'>Net valied 5,3%</p>
                        <button className="bg-[#070C0E] mt-2 text-[#F2F2F2] rounded-2xl md:text-sm md:py-0.5 md:px-3  lg:px-5 lg:py-1">CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs