import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';


import logo from '../logo.svg'

export const Navigation = () => {


    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {
                                routes.map( ({to ,name}) => (
                                            <li key={ name }>
                                                <NavLink 
                                                    to={ to } 
                                                    className={ ({ isActive }) => isActive ? 'nav-active' : '' } 
                                                >
                                                    { name }</NavLink>
                                            </li>
                                ))
                            }
                        </ul>
                    </nav>


                    <Routes>
                       {
                        routes.map( ({Component,name,path}) => {
                            return <Route 
                                        key={name} 
                                        path={path} 
                                        element={<Component />}
                                    />
                        })
                       }
                        <Route path="/*" element={ <Navigate to={routes[0].to } replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
