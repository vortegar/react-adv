import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'

import { ProductContextProps, ProductCardsProps } from '../interface/interfaces';

import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export const ProductCard = ({ children ,product }:ProductCardsProps) => {

    const { counter ,incresBy } = useProduct();

  return (
    <Provider value={{
        counter,
        incresBy,
        product
    }}>
        <div className={ styles.productCard}>
            { children }
        </div>
    </Provider>
  )
}


