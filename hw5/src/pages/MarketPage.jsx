import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { marketActions } from '../store/marketActions.js'
import '../app.css'


const MarketPage = () => {
  const marketPagePostsList = useSelector(state => state.posts.product)
  const dispatch = useDispatch()

  const handleClick = (addElement) => {
    dispatch(marketActions({payload: addElement}))
  }

  return (
    <>
      {marketPagePostsList.map((item) => (
        <div key={item._id} className='list--block'>
          <img src={item.picture} alt="image" />
          <span>{item.price}</span>
          <h3>{item.name}</h3>
          <button onClick={() => handleClick(item)} className='btn'>BUY</button>
        </div>
      ))}
    </>
  )
}

export default MarketPage