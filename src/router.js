import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Favoritos from 'pages/Favoritos'
import Rodape from 'components/Rodape'
import Inicio from 'pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavoritosProvider from 'context/Favoritos'
import Player from 'pages/Player'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
        <Container>
          <FavoritosProvider>
            <Routes>
              <Route path='/' element={<Inicio />}></Route>
              <Route path='/favoritos' element={<Favoritos />}></Route>
              <Route path='/:id' element={<Player />}></Route>
            </Routes>
          </FavoritosProvider>
        </Container>
      <Rodape />
    </BrowserRouter>
  )
}
