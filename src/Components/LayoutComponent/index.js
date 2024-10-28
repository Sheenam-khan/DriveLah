import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useHistory, withRouter } from "react-router-dom";
const routes = [
    {
        url: '/location',
        name: 'Location',
        completed: true
    },
    {
        url: '/about',
        name: 'About',
        completed: true

    },
    {
        url: '/features',
        name: 'Features',
        completed: true

    },
    {
        url: '/rules',
        name: 'Rules',
        completed: true

    },
    {
        url: '/pricing',
        name: 'Pricing',
        completed: true

    },
    {
        url: '/promotion',
        name: 'Promotion',
        completed: true

    },
    {
        url: '/pictures',
        name: 'Pictures',
        completed: true

    },
    {
        url: '/insurance',
        name: 'Insurance',
        completed: true

    },
    {
        url: '/subscription',
        name: 'Subscription',
        completed: true

    },
    {
        url: '/device',
        name: 'Device',
        completed: false

    },
    {
        url: '/access',
        name: 'Easy Access',
        completed: false
    },
]
const IndexLayout = (props) => {
    console.log("hello props in layout", props)
    const { children } = props
    const details = localStorage?.getItem('activeRoute')
    const [route, setRoute] = useState(details)
    const nextRoute = routes.find((item, index) => index == routes.findIndex(item => item.url === details) + 1)
    const moveToNext = () => {
        props?.history.push(nextRoute?.url)
        localStorage?.setItem('activeRoute', nextRoute?.url)
        setRoute(nextRoute?.url)
    }

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