import React from 'react'
import Header from '../../Share/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Share/Footer/FooterComponent'
import FooterComponent from '../../Share/Footer/FooterComponent'
import  { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
      <Toaster />
    </div>
  )
}

export default Layout
