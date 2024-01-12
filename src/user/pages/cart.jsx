import React, { useState } from 'react'
import { cartData } from '../../utils/DUMMY_DATA'

const Cart = () => {

  const [cartItems, setCartItems] = useState(cartData)

  const increase = (id) => {
    const newData = cartItems.map((prod) => {
      if (prod.id === id) {
        prod.quantity = prod.quantity + 1;
      }
      return prod;
    })
    setCartItems(newData);
  }

  const decrease = (id) => {
    const newData = cartItems.map((prod) => {
      if (prod.id === id) {
        prod.quantity = prod.quantity - 1;
      }
      return prod;
    })
    setCartItems(newData);
  }

  

  return (
    <div className='mt-[66px] flex flex-col gap-2 items-center justify-center'>

      {cartItems.map((product) => (

        product.quantity > 0 && (<div key={product.id} className='bg-gray-200 flex justify-evenly items-center h-[150px] w-full'>
          <img className='w-[100px] h-[100px] object-contain ' src="https://www.mobiledokan.co/wp-content/uploads/2021/10/Google-Pixel-7-Pro-Snow.jpg" alt="" />
          <h1 className='text-gray-800 text-xl'>{product.item}</h1>
          <div className='flex items-center justify-between w-24'>
            <button onClick={() => decrease(product.id)} className='bg-emerald-500 w-5 h-5 rounded-lg text-black flex justify-center items-center'>-</button>
            <input value={product.quantity} className='w-10 pl-[12px] text-black bg-transparent border-2 border-gray-900 rounded-lg' contentEditable={false} type="text" />
            <button onClick={() => increase(product.id)} className='bg-emerald-500 w-5 h-5 rounded-lg text-black flex justify-center items-center' >+</button>
          </div>
          <h2 className='text-xl font-bold text-black'>{product.price}</h2>
        </div>)

      ))}




      <div>

      </div>
    </div>
  )
}

export default Cart