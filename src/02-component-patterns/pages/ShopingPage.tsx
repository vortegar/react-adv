import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/product';

import '../styles/custom-styles.css'

export const ShopingPage = () => {

const product = products[0];
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      {      
        <ProductCard 
          key={product.id}
          product={ product }
          className='bg-dark text-white'
          initialValues={{
            count   : 4,
            maxCount: 10,
          }}
        >
          {
            ({ reset, incresBy,maxCount, count, isMaxCountReached }) => (
              <>
                <ProductImage  className='custom-image'/>
                <ProductTitle  className='text-bold'/>
                <ProductButtons className='custom-buttons' />              
                
                <button onClick={ reset }>Reset</button>
                <button onClick={ () => incresBy(-2) }>-2</button>
                {
                  ( !isMaxCountReached &&  <button onClick={ () => incresBy(2) }>+2</button> ) 
                }
                
                <span>{count} - {maxCount}</span>
              </>
            )
          }
        </ProductCard>
        }
    </div>
  )
}
