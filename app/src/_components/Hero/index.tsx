"use client";
import { picarchiveDescriptions } from '../../_meta/webText';
import { RootState } from '../../_rtk/Store';
import { useEffect, useState } from 'react';
import { random } from '../../_functions';
import { useSelector } from 'react-redux';
import SearchForm from '../Search/SearchForm';
import BasicLink from '../Links/BasicLink';
import Image from 'next/image';

const topicsData = [
    "mountain",
    "technology",
    "background",
    "city",
]

export default function Hero() {
    const [isMount, setMount] = useState(false);
    const select = useSelector((state: RootState) => state.picarchive.pphotos);

    useEffect(() => setMount(true), []);

    if (!isMount) return <></>

    const desc = Math.ceil(Math.random() * picarchiveDescriptions.length)

    return (
        <section className='relative overflow-hidden w-full max-h-screen min-h-[400px] h-[50vh] lg:h-[60vh] bg-gradient-to-tl dark:from-gray-900 dark:to-black from-gray-100 to-white flex items-center justify-center flex-col mt-14'>
            <Image src={select[20]?.urls?.regular || '/img/intro.jpg'} alt={'hero background'} width={1000} height={600} className='w-full h-full object-cover absolute top-0 left-0' />
            <div className='absolute w-full h-full backdrop-blur-sm top-0 left-0'>

            </div>
            <header className='relative max-w-4xl px-2 space-y-2'>
                <h1 className='text-3xl sm:text-[5vw] font-extrabold py-[1vw] md:py-[2vw] text-stroke text-white dark:text-black' title='picarchive'>picarchive</h1>
                <p className='px-1 font-normal opacity-80 text-white dark:text-black pb-3 '>{picarchiveDescriptions[desc]}</p>
                <SearchForm targetPath={'/search/'} />
                <p className='font-bold px-1 !text-white dark:!text-black text-sm'>
                    Tranding:
                    {topicsData.map((item: string) => {
                        return (
                            <BasicLink
                                key={random()}
                                props={{
                                    href: `/search/${item}`,
                                    title: item,
                                    text: item,
                                    style: `!px-2 opacity-75 hover:opacity-100 !font-normal !text-white dark:!text-black`
                                }}>
                            </BasicLink>
                        )
                    })}
                </p>
            </header>
        </section>
    )
}
