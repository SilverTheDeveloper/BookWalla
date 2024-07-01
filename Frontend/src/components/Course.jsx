import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Cards.jsx'
import  {NavLink}  from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='z-50 max-w-screen-2xl container mx-auto md:px-20 px-4 '>
         <div className='mt-8   justify-center space-y-10 text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you  <span className='text-pink-500'>here!</span> </h1>

          <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa, cumque, ut nulla consequatur, natus ullam officia saepe enim harum sapiente eaque recusandae nostrum eum iure! Aspernatur laboriosam magni laudantium.</p>

          <NavLink to="/" >
          <button className=" mt-8 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md  duration-300">
              Back
          </button>
          </NavLink>
          
        </div>
      

      <div className='mt-2 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item)=>(
          <Cards key={item.id} item={item}/>
      ))}
      </div></div>
    </>
  )
}

export default Course
