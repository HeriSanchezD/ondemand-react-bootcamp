import React from 'react'
import {useState,useEffect} from 'react'

export const GridComponent = ({grid}) => {

    // let products=[]
    // grid.forEach((product,index) => {
    //     products.push(
    //         <div className='productContainer'>
    //             <img key={'img'+index}  src={product.url} alt=''></img>
    //             <p key={'name'+index}> {product.name}</p>
    //             <p key={'price'+index}> {product.price}</p>
    //             <p key={'category'+index}> {product.category}</p>
    //         </div>
                
        
            
    //         // <div key={index} className='gallery_img' style={{backgroundImage:`url(${product.url})`}}></div>
    //     )
    // });
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const timerId=setInterval(()=>{
            setCount(count=>count+1);
        },5000)
        return ()=>clearInterval(timerId);
    },[]);

    const tmp= <div className='productContainer'>
                    <img src={grid[count % grid.length].url} alt=''></img>
                    <p> {grid[count % grid.length].name}</p>
                    <p > {grid[count % grid.length].price}</p>
                    <p > {grid[count % grid.length].category}</p>
               </div>
    const tmp2=<div className='productContainer'>
        <img  src={grid[(count+1) % grid.length].url} alt=''></img>
                    <p > {grid[(count+1) % grid.length].name}</p>
                    <p > {grid[(count+1) % grid.length].price}</p>
                    <p > {grid[(count+1) % grid.length].category}</p>
        </div>
               
  return (
    <div>
        <div className='productsContainer'>
            {tmp}
            {tmp2}
        </div>
    </div>
  )
}
