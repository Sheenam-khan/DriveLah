import React, { Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary'
import IndexLayout from '../Components/LayoutComponent'
import routes from './routes'
const Router = () => {
    return (

        <React.Fragment>
            <ErrorBoundary>
                <BrowserRouter>
                    <Suspense fallback={<div style={{ position: "absolute", left: "50%", top: "50%" }}><p>Loading....</p></div>}>
                        <IndexLayout>

                            <Switch >

                                {routes.map((route,index) => {
                                    return (
                                        <Route
                                            path={route.path == "/" ? <Redirect to="/subscription" /> : route.path}
                                            component={route.component}
                                            key={route.path}
                                            exact={route.exact}
                                            index={index}
                                        />
                                    )
                                })}
                            </Switch>
                        </IndexLayout>
                    </Suspense>
                </BrowserRouter>
            </ErrorBoundary>
        </React.Fragment>

    )
}
export default Router