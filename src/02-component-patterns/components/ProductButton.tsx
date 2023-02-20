import { useContext, CSSProperties} from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props{ 
    className?: string;
    style    ?: CSSProperties;
}
export const ProductButtons = ({ className, style }:Props) =>  {

    const { counter, incresBy } = useContext( ProductContext )
    return (
        
        <div 
            className={ `${ styles.buttonsContainer } ${ className }` }
            style={ style }    
        >
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