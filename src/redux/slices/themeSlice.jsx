import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themes: true
}


export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        selectedTheme: (state, action) => {
            const root = document.getElementById('root')

            if (state.themes) {
                root.style.background = "black";
                root.style.color = "#fff";
                root.style.transition = "2s"

            } else {
                root.style.background = "#fff";
                root.style.color = "black";
                root.style.transition = "2s"
            }
            state.themes = !state.themes
        }
    }
})

export const { selectedTheme } = themeSlice.actions
export default themeSlice.reducer