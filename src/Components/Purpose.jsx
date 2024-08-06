import Clover from '@img/Clover.png'

const Purpose = () => {
    return (
        <div className="bg-[#0B1114] rounded-2xl flex flex-col justify-center items-center box py-10 px-5 md:px-14 md:py-20">
            <button className="bg-[#A9DD24] px-6 lg:px-10  rounded-2xl font-semibold mb-4 md:text-lg lg:text-xl py-0.5 lg:py-1.5">PURPOSE</button>
            <p className='text-[#F2F2F2] text-center text-sm  md:text-4xl lg:text-4xl max-w-5xl relative'>
            <img src={Clover} className='h-4 w-4 md:h-6 md:w-6 lg:h-10 lg:w-10 inline-block absolute -left-2.5 md:-left-5 lg:left-0' alt="" />
                The main task of this project was to create an
                <span className="text-[#A9DD24]"> attractive and easy to use </span>
                website. The site should contain
                <span className="text-[#A9DD24]"> convenient navigation, </span>
                complete information about the company’s
                <span className="text-[#A9DD24]"> services and benefits </span>
                for users.
            </p>
        </div>
    )
}

export default Purpose