import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center items-end lg:items-center box gap-10">
            <div className="w-full md:w-[45%]">
                <p className="font-extrabold text-2xl ">tilton</p>
                <p className="text-5xl my-4 md:my-10">SUBSCRIBE NEWSTELLER</p>
                <div className="flex justify-center items-center ">
                    <input className="h-10 bg-[#F2F2F2] w-full border-b-2 border-[#c0c3bd]"  type="text" placeholder="Email address" />
                    <div className="p-2 rounded bg-[#A9DD24]">
                        <IoMdArrowDropright  size={25}/>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[55%] grid grid-cols-3 gap-5">
                <p className="font-semibold">SERVICES</p>
                <p className="font-semibold">ABOUT</p>
                <p className="font-semibold">HELP</p>
                <p className="text-xs">CONSULTATION</p>
                <p className="text-xs">ABOUT US</p>
                <p className="text-xs">FAQS</p>
                <p className="text-xs">INVESTMENT</p>
                <p className="text-xs">OUR TEAM</p>
                <p className="text-xs">CONTACT US</p>
                <p className="text-xs">PROPERTY MANAGEMENT</p>
                <p className="text-xs">BENEFITS</p>
                <div className="flex justify-center md:justify-start col-span-3 md:col-span-1 items-center gap-10 md:gap-5">
                    <FaFacebook size={20} />
                    <FaInstagram size={20} />
                    <FaTwitter size={20} />
                    <FaLinkedin size={20} />
                </div>
            </div>
        </div>
    )
}

export default Footer