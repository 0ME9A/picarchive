"use client";
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../_functions";
import { FaMoon, FaSun } from "react-icons/fa";
import { RootState } from "../../_rtk/Store";
import { useEffect, useState } from "react";


export default function ThemeBtn() {
    const [isMount, setMount] = useState(false);
    const themeState = useSelector((state: RootState) => state.picarchive.theme)
    const dispatch = useDispatch()

    useEffect(() => setMount(true), [])

    if (!isMount) {
        return (
            <div className="px-2">
                <div className="rounded-full border-2 border-white animate-spin border-t-white/30 aspect-square w-5"></div>
            </div>
        )
    }
    return (
        <button
            title={`Theme toggler`}
            onClick={() => toggleTheme(dispatch)}
            className="border-2 p-2 aspect-square flex item-center border-transparent capitalize text-black dark:text-white rounded-lg shadow-lg shadow-neutel/20 hover:shadow-neutel/40 bg-lighter dark:bg-darker hover:border-xlight dark:hover:border-xdark">
            {themeState === "dark" ? (<FaSun />) : (<FaMoon />)}
        </button>
    );

}
