import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'


export const IcecreamView = () => {
  const dispatch = useDispatch()

  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream)
  return (
    <div>
        <h2>Number of ice creams - {numOfIcecreams} </h2>
        <button onClick={() => dispatch(ordered())}>Order ice cream</button>
        <button onClick={() => dispatch(restocked(3))}>Restock ice cream</button>
    </div>
  )
}
