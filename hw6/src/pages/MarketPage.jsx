import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../components/basketSlice.jsx';
import products from '../store/products.json';
import '../App.css'

const MarketPage = () => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToBasket(product))
  }

  return (
    <div>
      {products.map((item, index) => ( // Добавляем уникальный ключ (index) к каждому элементу
        <div key={index} className='list--block'>
          <img src={item.picture} alt="image" />
          <span>{item.price}</span>
          <h3>{item.name}</h3>
          <button onClick={() => handleClick(item)} className='btn'>BUY</button>
        </div>
      ))}
    </div>
  )
}

export default MarketPage;

