"use client";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "../../_rtk/Store";

export default function RTKLayout({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}