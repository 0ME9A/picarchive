"use client";
import { pphotos } from "../../_rtk/Store/reducers";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getRandom from "../../_api/getRandom";


export default function PhotosForWeb() {
    const dispatch = useDispatch();
    useEffect(() => {
        const call = async () => {
            const { raw, error } = await getRandom();
            if (!error) dispatch(pphotos(raw?.response));
        }
    }, []);

    return <></>
}