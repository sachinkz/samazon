import { Search, ShoppingCart } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='z-50 w-full h-[60px] px-5 bg-emerald-500 fixed top-0 left-0 flex justify-between items-center'>
           <Link to={'/'}> <h2 className='font-extrabold text-white text-3xl'>Samazon</h2></Link>
            <div className='relative'>
                <input placeholder='Search an item' className='bg-transparent border-b h-[30px] text-white placeholder:text-white outline-none border-emerald-400 w-[300px] pl-2' type="text" />
                <Search className='absolute right-2 top-1 text-white cursor-pointer'/>
            </div>
            <ul className='flex gap-6 text-white' >
                <Link to={'/'}><li>Home</li> </Link>
                <Link to={'/orders'}><li>Orders</li> </Link>
                <Link to={'/cart'}><li><ShoppingCart /></li> </Link>
            </ul>
        </div>
    )
}

export default Navbar