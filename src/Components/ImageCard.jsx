import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const ImageCard = ({ image, basis, location, price }) => {
    return (
        <div className={` grow-0 shrink-0 ${basis} min-w-0 relative flex justify-center items-center p-3`}>
            <img src={image} className='rounded-2xl h-full object-cover' alt='image' />
            <div className='bg-[#CAEE0D] hidden lg:block absolute top-1/2 left-1/2 text-black -rotate-45 p-4 rounded-full font-semibold w-fit ml-3'><HiOutlineArrowNarrowRight size={20} /></div>
            <div className={`absolute bottom-10 p-4 text-left lg:p-10'}`}>
                <p className={`text-white font-semibold md:text-xl`}>{location}</p>
                <p className='text-white '>{price}</p>
            </div>
        </div>
    )
}

export default ImageCard