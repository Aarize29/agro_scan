import React, { useEffect, useState } from 'react'
import './Home.css'
import NavBar from "/src/components/NavBar/Navbar"
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase/config'
const Home = () => {

  const [session, setSession] = useState(null)
  const navigate = useNavigate()
  useEffect(() => { 
    const call = async () => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
      const response = await supabase.auth.getSession()
      setSession(response.data.session)

      console.log(session)
  
      if(session)
        console.log("Logged")
      else
      console.log("Not Logged")
    }
    call()

  }, [])

  return (
    <>
      <NavBar />
      <div className='flex justify-between items-center mt-[10%] m-20'>

      <div className="card cursor-pointer">
            <Link to='/main'><h1 className='flex justify-center items-center font-bold text-xl rounded-2xl border-[2px] border-solid border-black w-[500px] h-[300px] shadow-xl shadow-black-900 hover:shadow-black'>Plant Diseases Detection</h1></Link>
      </div>

      <div className="card cursor-pointer">
        <Link to='/main'><h1 className='flex justify-center items-center font-bold text-xl rounded-2xl border-[2px] border-solid border-black w-[500px] h-[300px] shadow-xl shadow-black-900 hover:shadow-black'>Chicken Disease Detection</h1></Link>
      </div>
        {/* <button className='border-solid border-[4px] border-[red]'><Link to='/main'>Go to Main</Link></button> */}
      </div>
    </>
  )
}

export default Home
