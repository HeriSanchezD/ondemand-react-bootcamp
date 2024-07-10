import React from 'react'
import {useState,useEffect} from 'react'
import '../Styles/featureBanner.css'

export const Banner = ({slide}) => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const timerId=setInterval(()=>{
            setCount(count=>count+1);
        },3000)
        return ()=>clearInterval(timerId);
    },[]);

  return (
    <div className='sliderStyle'>
        {/* <div className='slideStyle' style={{backgroundImage:`url(${slide[count % slide.length].url})`}}></div> */}
        <img className='slideStyle'  src={slide[count % slide.length].url} alt=''></img>
    </div>
  )
};
export default Banner