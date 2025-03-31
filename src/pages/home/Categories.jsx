import React from 'react'
import ABC1 from "../../assets/Client2_IndividualKickboxing.png"
import ABC2 from "../../assets/Client2_IndividualPilates.png"
import ABC3 from "../../assets/Client2_IndividualYoga.png"
import ABC4 from "../../assets/Client2_YogaMat.png"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories =[
        {name: 'Kickboxing',path: 'kickingboxing',image:ABC1},
        {name: 'Pilates',path: 'pilate',image:ABC2},
        {name: 'Yoga',path: 'yoga',image:ABC3},
        {name: 'Products',path: 'product',image:ABC4},
        
    ]
  return (
    <>
    <div className='product__grid'>
      {
          categories.map((category) => (
            <Link key={category.name} to= "/shop" className=''>
              
              <img src={category.image} alt={category.name}/>
              <h4>{category.name}</h4>

              </Link>

          ))

      }

    </div>

    </>
  )
}

export default Categories