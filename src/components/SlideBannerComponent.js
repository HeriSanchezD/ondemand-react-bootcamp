import React from 'react'
import { ImageSlider } from './ImageSlider'
import json from '../mocks/en-us/featured-banners.json'
import '../Styles/featureBanner.css'

export const SlideBannerComponent = () => {
    let slide=[];
    json.results.forEach(furniture=>{
        const image={url:furniture.data.main_image.url,title:furniture.data.title};
        slide=[...slide,image];
    });
    console.log(slide);
  return (
    <div>
        <div className='containerStyles'>
            <ImageSlider slide={slide}/>
        </div>
    </div>
  )
}
export default SlideBannerComponent
