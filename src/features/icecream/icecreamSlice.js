// const { cakeActions } = require('../cake/cakeSlice')
// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'


const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: 'IceCream',
    initialState,
    reducers:  {
        ordered: (state) => {
            state.numOfIcecream --
        },
        restocked: (state, action) => {
            state.numOfIcecream += action.payload
        }
    },
    // extraReducers: {
    //     ['CAke/ordered']: (state) => {
    //         state.numOfIcecream --
    //     }
    // }
    extraReducers: (builder) =>{
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecream --
        })
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions