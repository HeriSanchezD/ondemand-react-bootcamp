import React from 'react'
import '../Styles/grid.css'
import { GridComponent } from './GridComponent';

export const ProductGridComponent = ({json}) => {
    let grid=[];
    json.results.forEach(product=>{
        const products={name:product.data.name,
                    price:product.data.price,
                    url:product.data.mainimage.url,
                    category:product.data.category.slug};
        grid=[...grid,products];
    });
  return (
    <div >
      <div className='container'>
        <GridComponent grid={grid}/>
      </div>
    </div>
  )
}
export default ProductGridComponent;