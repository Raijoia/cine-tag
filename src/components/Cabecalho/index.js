import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from 'components/CabecalhoLink'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      {/* link => direciona para outra página sem recarregar a página */}
      <Link to="./">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url='./'>
          Home
        </CabecalhoLink>
        <CabecalhoLink url='./favoritos'>
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}
