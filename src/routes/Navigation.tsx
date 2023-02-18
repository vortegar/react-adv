import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg';
import { route } from './routes';
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span> }>
      <Router>
            <div className="main-layout">
              <nav>
                  <img src={ logo } alt="React Logo" />
                <ul>
                  {
                    route.map( ({name, path, Component}) => {
                      return <li key={ name }>
                              <NavLink to={ path } activeClassName="nav-active" exact>{ name }</NavLink>
                            </li>
                    })
                  }

                </ul>
              </nav>
                
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                {
                  route.map( ({name, Component, path}) => {
                    return  <Route key={name} path={path}>
                              <Component />
                            </Route>
                  })
                }

                <Redirect to={ route[0].path } /> 
              </Switch>
            </div>
          </Router>
    </Suspense>
  );
}