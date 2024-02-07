import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css';

const BasketPage = () => {
  const basket = useSelector(state => state.basket.items)

  return (
    <div>
      {basket.map((item, index) => ( // Добавляем уникальный ключ (index) к каждому элементу
        <div key={index} className='list--block'>
          <img src={item.picture} alt="image" />
          <span>{item.price}</span>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default BasketPage
