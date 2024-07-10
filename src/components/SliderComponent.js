import React from 'react'
import { Banner } from './BannerComponent'
import { Carousel } from './CarouselComponent'
import '../Styles/featureBanner.css'
import '../Styles/Carousel.css'


export const SliderComponent = ({json,isCarousel}) => {
    let slide=[];
    let styleSlider;
    json.results.forEach(product=>{
        const image={url:product.data.main_image.url,title:product.data.title};
        slide=[...slide,image];
    });
    if(isCarousel)
    {
      styleSlider=<div className='containerCarousel'>
                      <Carousel slide={slide}/>
                  </div>
    }else{
      styleSlider=<div className='containerBanner'>
                      <Banner slide={slide}/>
                  </div>
    }
      
  return (
    <div>
        {styleSlider}
    </div>
  )
}
export default SliderComponent
