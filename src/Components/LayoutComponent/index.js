import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { withRouter } from "react-router-dom";
import routes from '../../routes/routes';
const IndexLayout = (props) => {
    const { children } = props
    const activeRoute = localStorage?.getItem('activeRoute')
    const [route, setRoute] = useState(activeRoute)
    const nextRoute = routes.find((_, index) => index == routes.findIndex(item => item.path === activeRoute) + 1)
    const moveToNext = () => {
        props?.history.push(nextRoute?.path)
        localStorage?.setItem('activeRoute', nextRoute?.path)
        setRoute(nextRoute?.path)
    }
    useEffect(() => {
        if (props?.location.pathname === '/') {
            props?.history.push('/subscription')
            localStorage?.setItem('activeRoute', '/subscription')
        }
    }, [])
    return (
        <React.Fragment>
            <div>
                <Header />
                <div className="container page-body-wrapper">
                    <Sidebar />
                    {children}
                </div>
                <Footer {...props} moveToNext={moveToNext} />
            </div>

        </React.Fragment>
    )
}

export default withRouter(IndexLayout)