import React from 'react'
import styles from './Banner.module.css'

export default function Banner({ imagem }) {
return (  
    <div 
      className={styles.capa} 
      style={{backgroundImage: `url('/imagens/banner-${imagem}.png')`}}
    />
  )
}
