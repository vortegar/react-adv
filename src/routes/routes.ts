import { lazy ,LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';     
// import { Lazyload2, Lazyload3, Lazyload1 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to       : string,
    path     : string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent, 
    name     : string,
}
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));


/* webpackChunckName: "LazyPage1" */
export const routes:Route[] = [
    {
        path     : '/lazyload/*',
        to       : '/lazyload/',
        Component: LazyLayout,
        name     : 'LazyLayout - Dash'
    },
    {
        to       : '/no-lazy',
        path     : 'no-lazy',
        Component: NoLazy,
        name     : 'No Lazy'
    }
]

export default routes