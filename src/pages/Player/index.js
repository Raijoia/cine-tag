import React from 'react'
import styles from './Player.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Player() {
  const [video, setVideo] = useState()
  // pega o parametro da url :id e coloca na variável
  const parametros = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Raijoia/cinetag-api/videos?id=${parametros.id}`).then(resposta => resposta.json()).then(dados => setVideo(...dados))
  }, [])

  if (!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem='player' />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe 
          width="100%" 
          height="100%" 
          src={video.link} 
          title={video.titulo}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        >
        </iframe>
      </section>
    </>
  )
}
