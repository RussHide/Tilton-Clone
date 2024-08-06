
import GalleryOne from '@img/GalleryOne.webp'
import GalleryTwo from '@img/GalleryTwo.webp'
import GalleryThree from '@img/GalleryThree.webp'
import GalleryFour from '@img/GalleryFour.webp'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from 'react';
import { ImageCard } from './'

const Gallery = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

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
        <div>
            <div className="hidden lg:grid grid-cols-12 box gap-5">
                <img className='h-72 w-full object-cover col-span-5 rounded-2xl' src={GalleryOne} alt="" />
                <img className='h-72 w-full object-cover col-span-3 rounded-2xl' src={GalleryTwo} alt="" />
                <div className='col-span-4 rounded-2xl  bg-[#0B1114] text-white p-10 flex flex-col justify-center items-center'>
                    <button className='text-[#0B1114] w-full font-semibold mb-3 rounded-2xl py-2 bg-[#A9DD24]'>PROJECT SOLUTION</button>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos cupiditate ipsam dignissimos, totam deleniti impedit eveniet adipisci ut, veniam</p>
                </div>
                <div className='col-span-4 rounded-2xl bg-[#0B1114] text-white p-10 flex flex-col justify-center items-center'>
                    <button className='text-[#0B1114] w-full font-semibold mb-3 rounded-2xl py-2 bg-[#A9DD24]'>PROJECT SOLUTION</button>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos cupiditate ipsam dignissimos, totam deleniti impedit eveniet adipisci ut, veniam</p>
                </div>
                <img className='h-72 w-full object-cover col-span-4 rounded-2xl' src={GalleryThree} alt="" />
                <img className='h-72 w-full object-cover col-span-4 rounded-2xl' src={GalleryFour} alt="" />
            </div>
            <div className='block lg:hidden relative bg-black box rounded-2xl'>
                <div className='col-span-4 rounded-2xl  bg-[#0B1114] text-white p-10 flex flex-col justify-center items-center'>
                    <button className='w-full md:w-1/2 text-[#0B1114]  font-semibold mb-3 rounded-2xl py-2 bg-[#A9DD24]'>PROJECT SOLUTION</button>
                    <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos cupiditate ipsam dignissimos, totam deleniti impedit eveniet adipisci ut, veniam</p>
                </div>
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex gap-x-1 w-full'>
                        <ImageCard basis='basis-full' image={GalleryOne} location='The Hamptson, New York' price='$5 million to $20 million USD' />
                        <ImageCard basis='basis-full' image={GalleryTwo} location='Miami Waterfront Villa' price='$3 million to $15 million USD' />
                        <ImageCard basis='basis-full' image={GalleryThree} location='Torreon, Coahuila' price='$1 million to $1.5 million USD' />
                        <ImageCard basis='basis-full' image={GalleryFour} location='Torreon, Coahuila' price='$1 million to $1.5 million USD' />
                    </div>
                </div>
                <button disabled={!prevBtnEnabled} onClick={scrollPrev} className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-gray-800 rounded-full ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <HiOutlineArrowNarrowLeft size={15} />
                </button>
                <button disabled={!nextBtnEnabled} onClick={scrollNext} className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-gray-800 rounded-full ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <HiOutlineArrowNarrowRight size={15} />
                </button>
                <div className='col-span-4 rounded-2xl  bg-[#0B1114] text-white p-10 flex flex-col justify-center items-center'>
                    <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos cupiditate ipsam dignissimos, totam deleniti impedit eveniet adipisci ut, veniam</p>
                    <button className='w-full md:w-1/2 text-[#0B1114]  font-semibold mt-3 rounded-2xl py-2 bg-[#A9DD24]'>PROJECT SOLUTION</button>
                </div>
            </div>

        </div>

    )
}

export default Gallery