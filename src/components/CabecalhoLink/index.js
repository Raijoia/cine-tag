import React from 'react'
import styles from './CabecalhoLink.module.css'
import { Link } from 'react-router-dom'

export default function CabecalhoLink({ children, url }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  )
}
