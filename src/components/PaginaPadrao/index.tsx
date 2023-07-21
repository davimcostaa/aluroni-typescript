import Header from 'components/Header'
import Menu from 'components/Menu'
import React from 'react'
import { Outlet } from 'react-router-dom'
import tema from 'styles/Tema.module.scss'

const PaginaPadrao = () => {
  return (
    <>
        <Header />

        <div className={tema.container}>
            <Outlet />
        </div>
    </>
  )
}

export default PaginaPadrao