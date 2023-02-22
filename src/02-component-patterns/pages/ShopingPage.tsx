import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/product';

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
          initialValues={{
            count   : 4,
            maxCount: 10,
          }}
        >
          {
            ({ reset, incresBy,maxCount, count, isMaxCountReached }) => (
              <>
                <ProductImage   />
                <ProductTitle   />
                <ProductButtons />              
              </>
            )
          }
        </ProductCard>
        }
    </div>
  )
}
