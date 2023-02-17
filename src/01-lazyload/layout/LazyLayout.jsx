import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { Lazyload1 ,Lazyload2 ,Lazyload3 } from "../pages"

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>

        <ul>
            <li>
                <NavLink to="Lazy1">Lazy 1</NavLink>
            </li>
            <li>
                <NavLink to="Lazy2">Lazy 2</NavLink>
            </li>
            <li>
                <NavLink to="Lazy3">Lazy 3</NavLink>
            </li>
        </ul>

        <Routes>
            <Route path="Lazy1" element={ <Lazyload1 /> }/>
            <Route path="Lazy2" element={ <Lazyload2 /> }/>
            <Route path="Lazy3" element={ <Lazyload3 /> }/>

            {/* <Route path="*" element={ <div> Not Found </div>  }/> */}
            <Route path="*" element={ <Navigate replace to="lazy1"/>}/>
        </Routes>
    </div>
  )
}

export default LazyLayout