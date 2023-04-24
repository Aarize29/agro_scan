import React,{useState,useEffect}from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsSun,BsFillMoonFill } from 'react-icons/bs'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { signOut } from '../../supabase/auth'
const Navbar = () => {
    const [darkMode,setDarkMode]=useState(true)
    const [theme,setTheme]=useState('light-theme')
    const handleDarkmode = () => {  
        setDarkMode(!darkMode)
        if (darkMode) {
          setTheme('dark-theme')
        }
        else {
          setTheme('light-theme')
        }
  }
  useEffect(() => {
    document.body.className = theme
  }
  , [theme])

  return (
    <div className='navbar flex justify-between w-full pr-10 lg:pl-12 pt-10 border-b-2 border-sky-900 border-solid items-center shadow-xl text-1xl lg:text-3xl md:text-2xl shadow-black-900 items-center '>
      <div className='text-2xl font-bold'>
        <Link to='/'>Chicken 69</Link>
      </div>
      <div className='text-2xl font-bold'>
        <button onClick={() => signOut()}>Logout</button>
      </div>
      <div className='flex items-center text-2xl font-bold  '>
        <div className='mr-5'>
           <Link to='/'>Home</Link>
        </div>
        <div className='mr-5 cursor-pointer' onClick={handleDarkmode}>
            {darkMode?<BsSun/>:<BsFillMoonFill/>}
        </div>
        <div className='mr-5 cursor-pointer'>
            <a href="https://github.com/Aarize29/chicken_69"><AiFillGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
