import React from 'react'
import banner from '../mocks/en-us/featured-banners.json'
import products from '../mocks/en-us/product-categories.json'
import featuredProducts from '../mocks/en-us/featured-products.json'
import SliderComponent from './SliderComponent';
import ProductGridComponent from './ProductGridComponent';
import '../Styles/homePage.css'

export const HomePageComponent = () => {
    // featuredProducts.results[0].data.price
  return (
    <div className='homePage'>
        <SliderComponent json={banner} isCarousel={false}/>
        <SliderComponent json={products} isCarousel={true}/>
        <ProductGridComponent json={featuredProducts}/>
    </div>
  )
}
export default HomePageComponent
