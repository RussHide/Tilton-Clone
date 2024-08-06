import { useEffect, useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { IoMdArrowDropright } from 'react-icons/io';
import AmenityOne from '@img/AmenityOne.jpg';
import AmenityTwo from '@img/AmenityTwo.jpg';
import AmenityThree from '@img/AmenityThree.webp';
import Clover from '@img/Clover.png';
import CurvedLines from '@img/CurvedLines.svg';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Amenities = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [emblaRef, emblaApi] = useEmblaCarousel([Autoplay()]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const containerRef = useRef(null);

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className='bg-black py-3 md:py-10 mb-10 md:mb-16 lg:mb-24 h-fit'>
            <div className='my-10 mx-3 md:mx-10'>
                <div className='flex justify-center items-center mb-10 text-center'>
                    <img src={CurvedLines} className='h-4 w-4 md:h-8 md:w-8 lg:h-12 lg:w-12' alt="" />
                    <p className='text-sm md:text-2xl lg:text-4xl text-white'>
                        WE ARE YOUR TRUSTED <span className='text-[#A9DD24]'>PARTNER</span> IN THE WORLD OF <span className='text-[#A9DD24]'>PROPERTY INVESTMENT.</span> WITH YEARS OF EXPERIENCE WE HELP YOU MAKE INFORMED INVESTMENT <span className='text-[#A9DD24]'>DECISIONS</span> THAT ALIGN WITH <span className='text-[#A9DD24]'>YOUR GOALS.</span>
                    </p>
                    <img src={Clover} className='h-4 w-4 md:h-8 md:w-8 lg:h-12 lg:w-12' alt="" />
                </div>
                <div className='overflow-hidden relative' ref={isMobile ? emblaRef : containerRef}>
                    <div className='flex w-full md:grid grid-cols-5 gap-5 py-3 md:py-10'>
                        <div className='grow-0 shrink-0 basis-full p-3 col-span-3 row-span-3 relative'>
                            <img src={AmenityThree} className='h-full object-fill rounded-2xl' alt="" />
                            <div className='absolute bottom-4 left-4 w-full lg:w-1/2 flex justify-center items-start'>
                                <img src={Clover} className='h-8 w-8 lg:h-10 lg:w-10' alt="" />
                                <div className='flex flex-col justify-start items-start space-y-3'>
                                    <p className='md:text-lg lg:text-xl text-white'>Property acquisition management investment consultation</p>
                                    <button className='bg-[#A9DD24] md:py-0.5 md:px-3 text-sm lg:text-base lg:px-5 lg:py-1 rounded-2xl'>DETAIL PROJECT</button>
                                </div>
                            </div>
                        </div>
                        <div className='hidden col-span-2 text-white md:flex flex-col justify-around'>
                            <p className='md:text-2xl lg:text-3xl mb-2'>OUR SERVICES</p>
                            <p className='text-sm lg:text-base'>
                                Look no further than our team of experts who specialize in quality home renovations to transform your space into a dream home you'll love. From design to execution, we'll work with you every step of the way.
                            </p>
                        </div>
                        <div className='grow-0 shrink-0 basis-full p-3 row-span-2 relative'>
                            <img src={AmenityOne} className='w-full h-full object-cover rounded-2xl' alt="" />
                            <div className='absolute bottom-4 left-4 w-1/2 flex justify-center items-start'>
                                <img src={Clover} className='h-5 w-5 lg:h-8 lg:w-8' alt="" />
                                <div className='flex flex-col justify-start items-start space-y-3'>
                                    <p className='text-sm lg:text-lg text-white'>Property management</p>
                                    <div className="md:px-1.5 lg:px-3 px-3 py-0.5 rounded-full bg-[#A9DD24]"><IoMdArrowDropright size={25} /></div>
                                </div>
                            </div>
                        </div>
                        <div className='grow-0 shrink-0 basis-full p-3 row-span-2 relative'>
                            <img src={AmenityTwo} className='w-full h-full object-cover rounded-2xl' alt="" />
                            <div className='absolute bottom-4 left-4 w-1/2 flex justify-center items-start'>
                                <img src={Clover} className='h-8 w-8' alt="" />
                                <div className='flex flex-col justify-start items-start space-y-3'>
                                    <p className='text-sm lg:text-lg leading-snug text-white'>Investment consultation</p>
                                    <div className="md:px-1.5 lg:px-3 py-0.5 rounded-full bg-[#A9DD24]"><IoMdArrowDropright size={25} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button disabled={!prevBtnEnabled} onClick={scrollPrev} className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-gray-800 rounded-full ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <HiOutlineArrowNarrowLeft size={15} />
                    </button>
                    <button disabled={!nextBtnEnabled} onClick={scrollNext} className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-gray-800 rounded-full ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <HiOutlineArrowNarrowRight size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Amenities;
