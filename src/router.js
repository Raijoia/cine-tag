import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Favoritos from 'pages/Favoritos'
import Rodape from 'components/Rodape'
import Inicio from 'pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
        <Container>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/favoritos' element={<Favoritos />}></Route>
          </Routes>
        </Container>
      <Rodape />
    </BrowserRouter>
  )
}
