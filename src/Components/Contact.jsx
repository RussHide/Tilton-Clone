import ContactImage from '@img/Contact.jpg'
import Clover from '@img/Clover.png'
import { HiOutlineArrowLongUp } from "react-icons/hi2";

const Contact = () => {
    return (
        <div className='box flex lg:flex-row flex-col  justify-center items-center bg-black rounded-2xl'>
            <div className='w-full lg:w-1/2 relative p-5 lg:order-1 order-2'>
                <img src={ContactImage} className='rounded-2xl ' alt="" />
                <p className="font-extrabold text-2xl absolute top-5 left-8 text-white">tilton</p>
            </div>
            <div className='w-full lg:w-1/2 p-5 lg:order-2 order-1'>
                <p className='text-white md:text-3xl'>CONTACT TO LEARN AMORE ABOUT</p>
                <div className='text-[#A9DD24] md:text-3xl flex justify-end items-center space-x-3 mb-5'>
                    <HiOutlineArrowLongUp className='text-white rotate-90 mt-1' />
                    <p>REAL ESTATE INVESTING</p>
                    <img src={Clover} className='h-4 w-4 md:h-8 md:w-8' alt="" />
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <input className='w-full rounded-2xl px-5  py-2 md:py-3.5' type="text" placeholder='Name' />
                    <input className='w-full rounded-2xl px-5  py-2 md:py-3.5' type="text" placeholder='Email' />
                    <input className='w-full rounded-2xl px-5  py-2 md:py-3.5' type="text" placeholder='Phone number' />
                </div>
                <button className='bg-[#A9DD24] text-center mt-8 w-full rounded-2xl py-2 md:py-3.5'>SEND REQUEST</button>
            </div>
        </div>
    )
}

export default Contact