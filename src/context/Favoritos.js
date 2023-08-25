import { useContext } from "react";
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

export function useFavoritoContext() {
  // pegando o favorito e o setFavorito do context
  const { favorito, setFavorito } = useContext(FavoritosContext)

  function adicionarFavorito(novoFavorito) {
    // verifica se já tem na lista
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    // colocando favoritos em uma nova lista
    let novaLista = [...favorito]

    // adiciona para a lista se não for repetido e retorna a nova lista pro setFavorito
    if(!favoritoRepetido) {
      novaLista.push(novoFavorito)
      return setFavorito(novaLista)
    }

    // filtra a lista, removendo apenas o elemento repetido
    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id)
    return setFavorito(novaLista)
  }

  return {
    favorito,
    adicionarFavorito
  }
}