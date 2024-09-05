import { createSlice } from '@reduxjs/toolkit'

const initialState = { open: false, footer: '', body: '', title: '', data: {} }

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openDialog: (state, action) => {
            state.open = action.payload.open
            state.footer = action.payload.footer
            state.body = action.payload.body
            state.title = action.payload.title

        },
        closeDialog: (state, action) => {
            state.open = action.payload.open
            state.footer = action.payload.footer
            state.title = action.payload.title
        },
        submitDta: (state, action) => {
            state.data = action.payload.data
        }
    },
})

// Action creators are generated for each case reducer function
export const { openDialog, closeDialog, submitDta } = modalSlice.actions
export default modalSlice.reducer