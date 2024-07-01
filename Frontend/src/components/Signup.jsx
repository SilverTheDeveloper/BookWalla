import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Login from './Login'
import { useForm} from "react-hook-form"


function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
  <div className=' justify-center h-screen items-center md:flex'>
<div className='rounded-md md:border border-base-300  w-full md:w-1/2 p-4  md:shadow-xl'>
<h1 className="font-bold mb-5" >Sign Up</h1>
        <div className='flex flex-col space-y-2'>
        <p>Name</p>
        <input type="text" placeholder='Enter your Email' className='w-8/12 h-9 p-3 rounded-md border'   {...register("name", { required: true })}
               /><br/>
                {errors.exampleRequired && <span>Name is required</span>}

          <p>Email</p>
          <input type="email" placeholder='Enter your Email' className='w-8/12 h-9 p-3 rounded-md border'   {...register("email", { required: true })}
               /><br/>
                {errors.exampleRequired && <span>Email is required</span>}
      
          <p>Password</p>
          <input type="Password" placeholder='Enter your Password' className='w-8/12 h-9 p-3 rounded-md outline-1 border '  {...register("password", { required: true })}
               /><br/>
                {errors.exampleRequired && <span>Password is required</span>}
      
        </div>
        
          <div className="modal-action justify-between mx-1 ">
            <div className='flex flex-row space-x-2'>
            <p>registered?</p> < Login class="underline text-blue-500 " />       
            </div>
            <div className='space-x-3'>
            <button className='btn btn-secondary' > Sign In </button>
            <Link to='/'><button className='btn'>Back!</button></Link>
            </div>
   
    </div>
    </div>
    </div>
    </form>
</>
  )
}

export default Signup
