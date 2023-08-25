import { useState } from "react";
import { createContext } from "react";

// criando context
export const FavoritosContext = createContext()

// dando nome ao context
FavoritosContext.displayName = "Favoritos"

// function para prover o context
export default function FavoritosProvider({ children }) {
  // elemento dinamico, podendo mudar valor useState
  const [favorito, setFavorito] = useState([])

  // retorna com o provider e os valores de favorito e setFavorito
  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}