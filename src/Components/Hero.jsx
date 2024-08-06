import HeroImage from '@img/HeroImage.jpg'
import CuvedLines from '@img/CurvedLines.svg'
import HeroCardBuilding from '@img/HeroCardBuilding.jpg'
import { IoIosArrowRoundUp } from "react-icons/io";
import Clover from '@img/Clover.png'

const Hero = () => {
    return (
        <section style={{ backgroundImage: `url(${HeroImage})` }} className='h-[calc(100vh-90px)] md:h-[calc(100vh-120px)]  bg-left lg:bg-center bg-cover bg-no-repeat text-white relative rounded-2xl py-10 px-11 mx-3 my-5  md:m-10 md:mb-16 lg:mb-24'>
            <div className='absolute w-[80%] lg:w-[40%] top-1/3 lg:top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-10 transform -translate-y-1/2 lg:translate-y-0'>
                <h4 className='mb-4 lg:text-base lg:text-left text-lg  md:text-4xl text-[#A9DD24] flex justify-center lg:justify-start  items-center'>
                    <img className='h-5 w-5 md:h-7 md:w-7 rotate-12 mr-1.5' src={CuvedLines} alt="" />
                    Welcome to Tilton properties
                </h4>
                <p className='text-[#DDDBDB] text-center text-sm lg:text-left md:text-lg lg:text-base'>Welcome to Tilton properties, your trusted pertner in finding the perfect place to call home, where every step of yout real estate journey is guided by expertise, integrity and a commitment o fulfilling your vision of ideal ving</p>
            </div>
            <div className='hidden lg:block w-[45%] absolute top-0 right-0 bg-[#F2F2F2] rounded-tr-2xl rounded-bl-2xl p-6 text-[#070C0E] text-[40px] -space-y-3'>
                <div className='rounded-full absolute top-3 right-3 p-2 bg-[#A9DD24] text-[#070C0E] flex justify-center items-center text-sm font-medium'> <IoIosArrowRoundUp className='rotate-45 mt-1' size={30} /></div>
                <div className='flex justify-start items-center gap-x-2.5'>
                    <p>YOUR</p>
                    <p className='text-[20px] text-[#7E817C]'>+100K SATISFIED CLIENTS</p>
                </div>
                <div className='flex justify-start items-center gap-x-2.5'>
                    <p>EXPERIENCE</p>
                    <p className='text-[#7E817C] italic'>REAL ESTATE</p>
                </div>
                <div className='flex justify-between items-center max-w-[80%]'>
                    <p>PARTNER IS HERE</p>
                    <img src={Clover} className='h-10 w-10' alt="" />
                </div>
            </div>
            <div className=' absolute bottom-2 left-2 right-2  md:left-auto md:right-auto md:bottom-10 bg-[#F2F2F2] md:p-2 p-0.5 rounded-xl flex justify-center items-center gap-x-4 pr-4'>
                <img src={HeroCardBuilding} className='w-32 md:w-40 rounded-xl' alt="" />
                <div className='flex flex-col h-full justify-between gap-y-2 md:gap-y-5'>
                    <div className='h-full'>
                        <p className='font-medium text-[#070C0E]'>FULLSET BUILDING</p>
                        <p className='text-[#212121]'>$15.000 <span className='text-[#DDDBDB]'>6 Month</span></p>
                    </div>
                    <button className='rounded-2xl py-1 px-2 bg-[#A9DD24] text-[#070C0E] flex justify-center items-center text-sm font-medium'>DETAILS <IoIosArrowRoundUp className='rotate-45 h-6 w-6 mt-1' /></button>
                </div>
            </div>
        </section>
    )
}

export default Hero