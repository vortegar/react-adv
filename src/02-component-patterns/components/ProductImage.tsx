import { useContext } from 'react';
import NoImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export const ProductImage = ({ img= '' }) => {

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
        <img  className={ styles.productImg } src={ imaToShow } alt="ProductImage" />
    )
}
