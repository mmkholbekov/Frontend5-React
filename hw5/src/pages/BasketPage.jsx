import React from 'react'
import { useSelector } from 'react-redux'
import '../index.css'


const BasketPage = () => {
  const addestProductToBasket = useSelector(state => state.posts.basket)

  return (
    <div>
      {addestProductToBasket.map((item) => (
        <div key={item.payload._id} className='list--block'>
          <img src={item.payload.picture} alt="image" />
          <span>{item.payload.price}</span>
          <p>{item.payload.name}</p>
        </div>
      ))}
    </div>
  )
}

export default BasketPage