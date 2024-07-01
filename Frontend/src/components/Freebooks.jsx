import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards.jsx'
import Slider from "react-slick";

function Freebooks() {
    const Freebooks = list.filter((data)=> data.category=== 'free')

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='mt-20 md:mt-3'>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4  '>
        <div>
      <h1 className='font-semibold text-xl'>Free Offered Courses</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus officiis ratione eum repellat! Ut enim tempore et laboriosam quasi, beatae ab est repellendus placeat hic quidem nesciunt accusamus quis!
      </p>
    </div>
   
  
    <div className="mt-4 slider-container">

      <Slider {...settings}>
      {Freebooks.map((item)=>(
        <Cards item={item} key={item.id} />
        ))}

      </Slider>
    </div>
    </div>
    </div>    


    </>
  )
}

export default Freebooks
