import React, { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Auth from '../pages/auth/Auth'
import { useAuth } from '../providers/useAuth'
import { routes } from './list'
import { Routes } from 'react-router-dom';
const Routess: FC = () => {
    const { user } = useAuth()
    return (
        <Router>
            <Layout>
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            path={route.path}
                            key={`route ${route.path}`}
                            element={route.auth && !user ? <Auth /> : <route.component />}
                        >

                                {/*{route.auth && !user ? <Auth /> : <route.component />}*/}

                        </Route>
                    )
                })}
            </Routes>
            </Layout>
        </Router>
    )
}

export default Routess
