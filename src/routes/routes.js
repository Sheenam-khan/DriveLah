import React,{lazy} from 'react'
import componentLoader from '../utils/componentLoader'
const loadable = (loader) => lazy(() => componentLoader(loader, 5))

// const routes = [
//     {
//         url: '/location',
//         name: 'Location',
//         completed: true
//     },
//     {
//         url: '/about',
//         name: 'About',
//         completed: true

//     },
//     {
//         url: '/features',
//         name: 'Features',
//         completed: true

//     },
//     {
//         url: '/rules',
//         name: 'Rules',
//         completed: true

//     },
//     {
//         url: '/pricing',
//         name: 'Pricing',
//         completed: true

//     },
//     {
//         url: '/promotion',
//         name: 'Promotion',
//         completed: true

//     },
//     {
//         url: '/pictures',
//         name: 'Pictures',
//         completed: true

//     },
//     {
//         url: '/insurance',
//         name: 'Insurance',
//         completed: true

//     },
//     {
//         url: '/subscription',
//         name: 'Subscription',
//         completed: true

//     },
//     {
//         url: '/device',
//         name: 'Device',
//         completed: false

//     },
//     {
//         url: '/access',
//         name: 'Easy Access',
//         completed: false
//     },
// ]
const routes = [
    {
        path: '/',
        component: loadable(() => import('../Components/Pages/Subscription')),
        exact: true,
        completed:true
    },
    {
        path: '/location',
        name:'Location',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true
    },
    {
        path: '/about',
        name:'About',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true
    },
    {
        path: '/features',
        name:'Features',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true
    },
    {
        path: '/rules',
        name:'Rules',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true
    },
    {
        path: '/promotion',
        name: 'Promotion',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true

    },
    {
        path: '/pictures',
        name: 'Pictures',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true

    },
    {
        path: '/insurance',
        name: 'Insurance',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:true

    },
    {
        path: '/subscription',
        name:'Subscription',
        component: loadable(() => import('../Components/Pages/Subscription')),
        exact: true,
        completed:true

    },
    {
        path: '/device',
        name:'Device',
        component: loadable(() => import('../Components/Pages/Device')),
        exact: true,
        completed:false

    },
    {
        path: '/access',
        name: 'Easy Access',
        component: loadable(() => import('../Components/Pages/Default')),
        exact: true,
        completed:false

    },
    {
        path: '*',
        component: loadable(() => import('../Components/PageNotFound/index')),
        exact: false,
        completed:false,
        disabled:true
    },


]
export default  routes