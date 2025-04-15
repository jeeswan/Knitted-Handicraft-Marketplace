import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className="flex flex-col items-center text-center border border-gray-400">
            <div className="w-full h-64 flex justify-center items-center bg-gray-100 overflow-hidden">
              <img src={image} alt={name} className="object-cover w-full h-full hover:scale-110 transition ease-in-out" />
            </div>
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem