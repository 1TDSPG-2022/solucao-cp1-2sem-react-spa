import React from 'react'
import { useState, useEffect } from 'react'
import Produtos from './components/Produtos'

export default function App() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    setProdutos([
      ["Mouse Óptico", 100, "Informática"],
      ["Teclado Mecânico", 50, "Informática"],
      ["Geladeira", 1000, "Eletrodoméstico"],
      ["Monitor 4K", 100, "Informática"],
      ["Garfo", 1000, "Utensílios Domésticos"],
      ["Gabinete", 100, "Informática"],
      ["Cabo HDMI", 10, "Informática"],
    ])
  }, [])

  return (
    <div>
      <h1>CP1 de RWD 2º SEMESTRE</h1>
      <Produtos lista={produtos} />
      <small>Caio Gallo Barreira - RM94526</small>
    </div>
  )
}
