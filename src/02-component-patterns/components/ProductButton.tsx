import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export const ProductButtons = () =>  {

    const { counter, incresBy } = useContext( ProductContext )
    return (
        
        <div className={ styles.buttonsContainer }>
            <button
                onClick={ () => incresBy(-1)}
                className={ styles.buttonMinus }
            >-</button>

            <div className={ styles.countLabel }>{ counter }</div>
            
            <button 
                onClick={ () => incresBy(1)}
                className={ styles.buttonAdd }
            >+</button>
        </div>
    )
}