"use client";
import { useDispatch, useSelector } from "react-redux";
import { photos_routes } from "../../_meta/webText";
import { setRouteToStore } from "../../_functions";
import { theme } from "../../_rtk/Store/reducers";
import { usePathname } from "next/navigation";
import { RootState } from "../../_rtk/Store";
import { useEffect } from "react";
import SearchForm from "../Search/SearchForm";
import BasicLink from "../Links/BasicLink";
import ThemeBtn from "../Btns/ThemeBtn";
import NextLink from "next/link";
import Menu from "../Btns/Menu";
import Image from "next/image";


export default function Nav() {
    const routeState = useSelector((state: RootState) => state.picarchive.route);
    const themeState = useSelector((state: RootState) => state.picarchive.theme);
    const dispatch = useDispatch();
    const path = usePathname();

    useEffect(() => {
        if (localStorage.getItem('theme') === 'light') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove("dark");
            dispatch(theme('light'));
        }
        else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add("dark");
            dispatch(theme('dark'));
        }
    }, [])

    useEffect(() => {
        setRouteToStore(photos_routes, path, dispatch)
    }, [path])

    const renderNavLinks = photos_routes.map((item: string, index: number) => (
        <li key={index} className="h-full">
            <BasicLink
                props={{
                    href: `/${item}`,
                    title: item,
                    text: item,
                    style: `!no-underline !px-3 py-1 rounded-full font-light hover:bg-xlight dark:hover:bg-xdark ${routeState === item && "bg-xlight dark:bg-xdark"
                        }`,
                }}
            ></BasicLink>
        </li>
    ));

    return (
        <nav className="h-14 w-full flex justify-between gap-2 items-center p-3 bg-white text-black dark:bg-black dark:text-white fixed top-0 z-50">
            <header className="h-full w-fit contents">
                <NextLink href={"/"} className=" text-xl font-extrabold pr-2 -ml-1 contents" title="Picarchive/home">
                    <Image src={themeState === "dark" ? "/img/whiteLogo.png" : "/img/logo.png"} alt="icon" width={50} height={50} className="h-8 w-fit" />
                    <span className="hidden md:block">
                        picarchive
                    </span>
                </NextLink>
            </header>
            <SearchForm targetPath={"/search/"} basic={true} />
            <section className="flex gap-2">
                <ul className={`hidden md:flex capitalize h-full border-2 border-transparent rounded-full shadow-lg shadow-neutel/20 hover:shadow-neutel/40 bg-lighter dark:bg-darker hover:border-xlight dark:hover:border-xdark ${routeState ? "border-xlight dark:border-xdark" : "border-transparent"
                    }`}>
                    {renderNavLinks}
                </ul>
                <span className="border-2 self-center h-4 border-gray-500/50 rounded-sm"></span>
                <ThemeBtn />
                <Menu />
            </section>
        </nav>
    );
}