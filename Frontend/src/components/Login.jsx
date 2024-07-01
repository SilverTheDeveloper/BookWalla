import React from 'react'
import { useForm} from "react-hook-form"
function Login(props) {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className={props.class} >Login</label>

      {/* Put this part before </body> tag */}
      <form onSubmit={handleSubmit(onSubmit)}>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">

          <h1 className="font-bold mb-5" >Login</h1>
          <div className='flex flex-col space-y-2'>
            <p>Email</p>
            <input type="email" placeholder='Enter your Email' className='w-8/12 h-9 p-3 rounded-md border' 
              {...register("email", { required: true })}
               /><br/>
                {errors.exampleRequired && <span>Email is required</span>}
      
            <p>Password</p>
            <input  type="Password" placeholder='Enter your Password' className='w-8/12 h-9 p-3 rounded-md outline-1 border '
              {...register("password", { required: true })}
               /> <br />
                {errors.exampleRequired && <span>Password is required</span>}
          </div>

          <div className="modal-action justify-between mx-1 ">
            <div>
              {props.links}
            </div>
            <div className='flex'>
              <button  htmlFor="my_modal_6" className='btn  btn-secondary mx-2 '>Login</button>
              <label htmlFor="my_modal_6" className='btn '>Close! </label>
            </div>

            
          </div>
        </div>
    </div></form>
      </div>


  )
}

export default Login


