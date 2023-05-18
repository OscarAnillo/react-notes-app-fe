import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './features/note-slice';

export const store = configureStore({
    reducer: {
        noteSlice
    }
})