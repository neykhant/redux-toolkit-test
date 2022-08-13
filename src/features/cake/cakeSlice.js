// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'CAke',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes --
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions
export const { ordered, restocked } = cakeSlice.actions