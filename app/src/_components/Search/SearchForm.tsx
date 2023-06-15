"use client";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

interface SearchFormFace {
    targetPath: string;
    style?: string;
    basic?: boolean;
}

export default function SearchForm({ targetPath, basic, style, }: SearchFormFace) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${searchQuery}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    if (basic) return (
        <form
            onSubmit={handleSubmit}
            className={`flex shadow-lg shadow-neutral/20 hover:shadow-neutel/40 w-full rounded-full relative ${style}`}
            title="Search millions of high quality photos">
            <input
                type='search'
                placeholder='Search millions of high quality photos.'
                value={searchQuery}
                onChange={handleChange}
                className='bg-lighter dark:bg-darker text-md w-full rounded-full pr-14 md:pr-20 dark:text-white px-4 py-2 ring-2 !outline-none ring-transparent focus:!ring-xlight dark:focus:!ring-xdark'
            />
            <button type="submit" className='bg-lighter dark:bg-darker hover:bg-light dark:hover:bg-dark md:px-6 flex items-center justify-center aspect-square text-md rounded-full capitalize absolute right-0 h-full'>
                <FiSearch />
            </button>
        </form>
    )

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex mt-2 shadow-lg shadow-neutral-500/20 rounded-lg hover:shadow-neutral-500/40 relative ${style}`}
            title="Search millions of high quality photos">
            <input
                type='search'
                placeholder='Search millions of high quality photos.'
                value={searchQuery}
                onChange={handleChange}
                className='p-4 pr-24 text-xl w-full rounded-xl bg-white dark:bg-black dark:text-white ring-2 !outline-none ring-transparent focus:!ring-black dark:focus:!ring-white'
            />
            <button type="submit" className=' p-4 px-6 text-xl dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black bg-white hover:bg-black hover:text-white text-black rounded-xl capitalize absolute right-0 h-full'>
                <FiSearch />
            </button>
        </form>
    )
}