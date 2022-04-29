import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './containers/Footer'
import Header from './containers/Header'

export default function Layout() {
  return (
    <>
        <Header></Header>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}
