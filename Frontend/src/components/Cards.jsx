import React from 'react'

function Cards({item}) {
  return (
    <div className='p-3'>  
      <div className="my-4 card bg-base-100 w-92 shadow-xl  hover:scale-105 duration-300 ease-in-out">
  <figure>
    <img 
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <div className='badge badge-secondary'>{item.category}</div>
    <p> {item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline hover:text-purple-600 duration-200 ease-in-out ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
