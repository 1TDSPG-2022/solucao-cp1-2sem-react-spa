import React from 'react'
import { useState } from 'react'
import Produtos from './components/Produtos/Produtos'

export default function App() {
  const [produtos, setProdutos] = useState([
    {
      nomeProduto: 'Mouse Óptico',
      qtd: 100,
      categoria: 'informatica'
    },
    {
      nomeProduto: 'Teclado',
      qtd: 500,
      categoria: 'informatica'
    },
    {
      nomeProduto: 'Microfone Digital',
      qtd: 2000,
      categoria: 'informatica'
    },
    {
      nomeProduto: 'Lâmpada Led 15w',
      qtd: 250,
      categoria: 'eletrica'
    },
    {
      nomeProduto: 'Lenço de Papel',
      qtd: 10000,
      categoria: 'higinene'
    }
  ])
  return (
    <>
      <h1>CP1 de RWD 2º SEMESTRE</h1>
      <div>
        Escopo da Div
        <p>Escopo do Paráagrafo</p>
      </div>
      <Produtos listaDeProdutos={produtos} />
    </>
  )
}
