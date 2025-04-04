import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from "../../data/products.json"

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () =>{
        setVisibleProducts(prevCount => prevCount + 4)
    }
  return (
    <section className='section__container production__container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader mb-12'> Test1 test2 test3 test put what you want to say here</p>

        {/* products card*/}
        <div className='mt-12'>
        <ProductCards products={products}/>
        </div>
        
    </section>

  )
}

export default TrendingProducts