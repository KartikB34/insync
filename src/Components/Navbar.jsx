import React from 'react'
import logo from "../Assests/logo.svg"
import search from "../Assests/search.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between border-[#C0C4CC] items-center border-b-[1px] pb-2'>
      <img src={logo} alt="logo" />
      <div className='flex border border-[#C0C4CC] py-1 px-3 items-center justify-center h-[35px]'>
        <img src={search} alt="searchico" className='h-[20px] mr-2' />
        <input type="text" className='outline-none' placeholder='Search for a movie' />
      </div>
    </div>
  )
}

export default Navbar
