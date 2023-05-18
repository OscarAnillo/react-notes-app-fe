import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    noteSelected: []
}

export const notesSlice = createSlice({
    name: "noteSlice",
    initialState,
    reducers: {
          setTitleSelection(state, action) {
            state.noteSelected = action.payload;
        },
        resetTitle(state){
            state.noteSelected.pop();
        }
    }
});

export const {setTitleSelection, resetTitle} = notesSlice.actions;
export default notesSlice.reducer