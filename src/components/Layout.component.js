import React from 'react'
import Navbar from './NavBar.component'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
