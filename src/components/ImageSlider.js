import React from 'react'
import {useState} from 'react'
import '../Styles/featureBanner.css'

export const ImageSlider = ({slide}) => {
    const [currentIndex,setCurrentIndex]=useState(0);
    // style={{backgroundImage:`url(${slides[currentIndex].url})`}}
    
    const goToPrevious =()=>{
        const isFirstSlide = currentIndex===0;
        const newIndex = isFirstSlide?slide.length-1:currentIndex-1
        setCurrentIndex(newIndex);
    }
    const goToNext =()=>{
        const isLastSlide = currentIndex===slide.length-1;
        const newIndex = isLastSlide?0:currentIndex+1
        setCurrentIndex(newIndex);
    }
    const goToSlide =slideIndex=>{
        setCurrentIndex(slideIndex);
    }
  return (
    <div className='sliderStyle'>
        <div className='leftArrowStyle' onClick={goToPrevious}>←</div>
        <div className='rightArrowStyle' onClick={goToNext}>→</div>
        <div className='slideStyle' style={{backgroundImage:`url(${slide[currentIndex].url})`}}></div>
        <div className='dotsContainerStyles'>
            {slide.map((slid,slideIndex)=>(
                <div className='dotStyle' key={slideIndex} onClick={()=>goToSlide(slideIndex)}>•</div>
            ))}
        </div>
    </div>
  )
};
export default ImageSlider