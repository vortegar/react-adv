import { createContext, ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct'

import { Product, ProductContextProps  } from '../interface/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
  product    : Product;
  children  ?: ReactElement | ReactElement[];
  className ?: String;
  style     ?: CSSProperties;
}


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export const ProductCard = ({ children ,product, className, style }:Props) => {

    const { counter ,incresBy } = useProduct();

  return (
    <Provider value={{
        counter,
        incresBy,
        product
    }}>
        <div 
          className={ `${styles.productCard} ${ className }` }
          style={ style }
        >
            { children }
        </div>
    </Provider>
  )
}


