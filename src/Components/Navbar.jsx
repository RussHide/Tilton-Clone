import Popover from 'antd/es/popover';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-5 md:mx-2.5 lg:mx-10 mt-3 md:mt-5 items-center bg-[#F2F2F2]">
      <h3 className="font-extrabold text-2xl">tilton</h3>
      <ul className="bg-[#FBFAFB] hidden  rounded-2xl md:flex justify-center items-center text-center">
        <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">HOME</li>
        <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">ABOUT US</li>
        <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">SERVICES</li>
        <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">FAQS</li>
        <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">CONTACT</li>
      </ul>
      <button className="hidden md:block bg-[#070C0E] text-[#F2F2F2] rounded-2xl px-3 py-1">CONTACT US</button>
      <Popover className='block md:hidden' content={
        <div>
          <ul className="bg-[#FBFAFB] md:hidden rounded-2xl flex flex-col justify-center items-center text-center gap-3">
            <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">HOME</li>
            <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">ABOUT US</li>
            <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">SERVICES</li>
            <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">FAQS</li>
            <li className="hover:bg-[#DDDBDB] pulse hover:cursor-pointer px-4 py-1 w-28  rounded-3xl">CONTACT</li>
          </ul>
          <button className="bg-[#070C0E] text-[#F2F2F2] rounded-2xl px-3 py-1 mt-3">CONTACT US</button>
        </div>
      }>
        <div className='bg-white shadow-lg p-3 rounded-xl'><IoMenu /></div>
      </Popover>
    </div>
  )
}

export default Navbar