import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateFace {
    theme: string;
    dialog: boolean,
    qualityWin: boolean;
    route: string | null;
    pphotos: BasicPhotoFace[]
}

const initialState: initialStateFace = {
    theme: "dark",
    route: null,
    dialog: false,
    qualityWin: false,
    pphotos: []
}


const picarchiveSlice = createSlice({
    name: "picarchive",
    initialState,
    reducers: {
        qualityWin: (state, action) => {
            state.theme = action.payload;
        },
        theme: (state, action) => {
            state.theme = action.payload;
        },
        route: (state, action) => {
            state.route = action.payload;
        },
        dialog: (state, action) => {
            state.dialog = action.payload;
        },
        pphotos: (state, action) => {
            state.pphotos = action.payload
        }
    }
})


export const { qualityWin, theme, dialog, route, pphotos } = picarchiveSlice.actions;
export default picarchiveSlice.reducer;


