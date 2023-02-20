import { useContext, CSSProperties } from 'react';
import NoImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export interface Props {
    img      ?: string;
    className?: string;
    style    ?: CSSProperties;

}

export const ProductImage = ({ img= '',className, style }:Props) => {

    const { product } = useContext( ProductContext );
    let imaToShow: string;

    if ( img ) {
        imaToShow = img
    }else if ( product.img ) {
        imaToShow = product.img
    }else{
        imaToShow = NoImage
    }

    return (
        <img 
            style={ style }
            className={ `${ styles.productImg } ${ className }` } src={ imaToShow } alt="ProductImage" />
    )
}
