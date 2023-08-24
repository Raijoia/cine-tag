import Banner from 'components/Banner'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import React from 'react'

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem='home' />
      <Rodape />
    </>
  )
}
