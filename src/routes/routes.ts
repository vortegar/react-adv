import { lazy, LazyExoticComponent } from 'react'
// import { LazyPage2, LazyPage3, LazyPage1 } from '../01-lazyload/pages';

type JSXComponent =  () => JSX.Element;

interface Route {
    path: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string,
    children?: Route[]
}


const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))


export const route:Route[] = [
    {
    path     : '/lazy1',
    Component: Lazy1,
    name     : 'LazyPage-1'
    },
    {
    path     : '/lazy2',
    Component: Lazy2,
    name     : 'LazyPage-2'
    },
    {
    path     : '/lazy3',
    Component: Lazy3,
    name     : 'LazyPage-3'
    },
]