import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCard } from '../hooks/useShoppingCard';
import { products } from '../data/product';

import '../styles/custom-styles.css'

export const ShopingPage = () => {

  const {onProductCountChange, shoppingCart } = useShoppingCard()
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display      : 'flex',
        flexDirection: 'row',
        flexWrap     : 'wrap'
      }}>

        {
          products.map(product => (
            <ProductCard 
              className='bg-dark text-white'
              product={ product }
              key={product.id}
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage  className='custom-image'/>
              <ProductTitle  className='text-bold'/>
              <ProductButtons className='custom-buttons' />
          </ProductCard>
          ))
        }
      </div>
      <div className='shopping-cart'>
        {
          Object.entries( shoppingCart ).map( ([key, product]) => (
            <ProductCard 
              key={ key }
              className='bg-dark text-white'
              product={ product }
              style={{ width: '100px'}}
              onChange={ onProductCountChange }
              value={ product.count }
            >
              <ProductImage  className='custom-image'/>
              <ProductButtons 
                className='custom-buttons' 
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}  
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
