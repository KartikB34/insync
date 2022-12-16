import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadMovies, searchMovies } from '../Actions/Movies'
import logo from "../Assests/logo.svg"
import search from "../Assests/search.svg"

const Navbar = ({setSearch}) => {

  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(text){
      dispatch(searchMovies(text))
      setSearch(true)
    }else{
      dispatch(loadMovies())
      setSearch(false)
    }
  }

  return (
    <div className='flex justify-between border-[#C0C4CC] items-center border-b-[1px] pb-2'>

      <img src={logo} alt="logo" className='h-12 md:h-[54px]' />

      <div className='flex border border-[#C0C4CC] py-1 px-3 items-center justify-center h-[35px] '>
        <img src={search} alt="searchico" className='h-[20px] mr-2' />

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className='outline-none w-[150px]' 
            value={text} 
            onChange={(e)=>{setText(e.target.value)}} 
            placeholder='Search for a movie' 
          />

        </form>
      </div>
    </div>
  )
}

export default Navbar
