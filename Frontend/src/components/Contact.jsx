import React from 'react'
import { useForm } from "react-hook-form"
function Contact() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (

        <> <div className='max-w-screen-2xl h-screen container mx-auto flex justify-center items-start md:items-center   md:px-20 px-4'>
            <form className='rounded-md md:border p-9  w-screen md:w-9/12' onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-bold mb-5" >Contact Us</h1>
            <div className='flex flex-col space-y-2'>
                <p>Name</p>
                <input type="text" placeholder='Enter your Name' className='h-9 p-3 rounded-md border' 
                {...register("name",{required:true})}/>
                <br />
                {errors.exampleRequired && <span>Name is required</span> } 
                <p>Email</p>
                <input type="email" placeholder='Enter your Email' className=' h-9 p-3 rounded-md border'
                {...register("email", { required: true })}/>
                <br />
                {errors.exampleRequired && <span>Email is required</span>}
                <p>Message</p>
                <input type="text" className=' h-16 p-3 rounded-md border'  placeholder='Enter Your Message'
                {...register("message", { required: true })} />
                <br />
                {errors.exampleRequired && <span>Enter the message</span>}

               
                <button className='btn btn-secondary'>Submit</button>
            </div>
            </form>
            </div>
        </>
    )
}

export default Contact
