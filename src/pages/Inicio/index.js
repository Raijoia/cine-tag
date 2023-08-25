import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import React from 'react'
import styles from './Inicio.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Raijoia/cinetag-api/videos").then(respota => respota.json()).then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <>
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          // express manda as características de cada object
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}
