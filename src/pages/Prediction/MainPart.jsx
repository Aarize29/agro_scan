import React, {useState} from 'react'
import './MainPart.css'
import ChatBot from "/src/components/ChatBot/ChatBot"
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import NavBar from "/src/components/NavBar/Navbar"
import * as tf from '@tensorflow/tfjs';

const MainPart = () => {
  const [imageUpload, setImageUpload] = useState(null)
  const [form,setForm]=useState({
      name:'',
      prompt:'',
      photo:'',
  })
  console.log(imageUpload)
  const handleUpload = (e) => {
    const file=e.target.files[0]
    setImageUpload(file);

    if(file && file.type.substr(0,5)==='image'){
        const reader=new FileReader()
        reader.onloadend=()=>{
            setForm({...form,photo:reader.result})
        }
        reader.readAsDataURL(file)
    }
    else{
        alert('Please upload animage')
    }
    }
   
    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
  }
  const handlPrediction=(e)=>{
    e.preventDefault()
    alert("Prediction Started")
  }
  
  return (
    <>
      <NavBar />
      <div className='flex  justify-between mt-5'>
       <div className="model flex flex-col  justify-center items-center w-[950px] border-[Red] h-[600px] border-solid border-[2px] m-3 ">
         <h1 className='text-2xl mb-10  font-bold'>Upload image to detect disease</h1>
         <form className='flex flex-col items-center justify center' onSubmit={handlPrediction}>
          <div className='text-xl flex justify-center items-center  border-[black] w-[500px] h-[300px] border-solid border-2 rounded-[15px]'>
           {form.photo ? <img src={form.photo} alt="uploaded" className='border-[black] w-[500px] h-[299px] border-solid border-2 w-[500px] h-[300px] border-solid border-2 rounded-[15px]'/> : <h1 className='text-2xl font-bold'>No Image Uploaded</h1>}
          </div>
          <div className='flex'>
                <label htmlFor="photo" className="cursor-pointer">
                    <div className='mt-3 text-white bg-[#6469ff] hover:text-[#6469ff] hover:bg-blue-200 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Upload</div>
                    <input type="file" accept="image/*" name="photo" id="photo" className="sr-only" onChange={handleUpload} />
                </label>
                <button className='m-3 text-white bg-[#6469ff] hover:text-[#6469ff] hover:bg-blue-200 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'  type='submit'>Predict</button>
            </div>
            </form>
           <h1 className='text-2xl font-bold  mt-5'>Disease name here</h1>
       </div>
       <ChatBot/>
    </div>
    </>
  )
}

export default MainPart
