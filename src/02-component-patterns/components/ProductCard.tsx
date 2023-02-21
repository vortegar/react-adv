import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct'

import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductCardHandlers } from '../interface/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
  product        : Product;
  // children      ?: ReactElement | ReactElement[];
  children      : (args:ProductCardHandlers) => JSX.Element
  className     ?: String;
  style         ?: CSSProperties;
  onChange      ?: ( args:onChangeArgs ) => void;
  value         ?: number;
  initialValues ?: InitialValues;
}


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export const ProductCard = ({ children ,product, className, style, onChange, value, initialValues }:Props) => {

    const { counter ,incresBy, maxCount, isMaxCountReached, reset, } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
        counter,
        incresBy,
        product,
        maxCount
    }}>
        <div 
          className={ `${styles.productCard} ${ className }` }
          style={ style }
        >
            { 
             children({
              count             : counter,
              isMaxCountReached,
              maxCount          : initialValues?.maxCount,
              product,

              incresBy,
              reset,
             }) 
            }
        </div>
    </Provider>
  )
}


