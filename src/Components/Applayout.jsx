import React from 'react'
import Navbar from './Navbar/Navbar'
import Themes from './Themes/Themes'
import { Outlet } from 'react-router'

const Applayout = () => {
        return (

        <>
        <Navbar/>
        <Outlet />
        <Themes/>
        </>

        )
        }

export default Applayout
