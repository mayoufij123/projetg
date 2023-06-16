import React, { useState } from 'react'
import './Livrable.css'
import Slider from "react-slick";
import { produite } from '../../data'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Livrable = ({HandelCkilk}) => {
  
   const settings = {
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
<div className='ll'>
    <Slider  {...settings}>
        {produite.map((item)=>(
            <div className='card'>
                <div className='card-top'>
                    <img className='img3' src={item.image} alt={item.name} />
                    <h1>{item.name}</h1>
                    <div className='card-bottom'>
                        <h3>{item.prices}</h3>
                    </div>

                </div>
                <button onClick={()=>HandelCkilk(item)}>add to cart</button>

            </div>

        ))
        }
        </Slider>
       
        
    </div>
  
  
  )
}

export default Livrable
