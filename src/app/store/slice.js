import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    lang: "en",
}
export const Slice = createSlice({
    name: 'valores',
    initialState,   
    reducers: {
        setLang(state, action) {
            state.lang = action.payload;
        },
    }
})

export const {setLang} = Slice.actions