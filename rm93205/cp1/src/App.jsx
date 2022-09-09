import React from 'react'
import { useState } from 'react'
import Produtos from './components/produtos/Produtos'

export default function App() {
    const[produtos, setProdutos] = useState([
        {
            nomeProduto: "Mouse Óptico",
            qtd: 100,
            categoria: "informatica"
        }
        ,
        {
            nomeProduto: "Teclado",
            qtd: 500,
            categoria: "informatica"
        }
        ,
        {
            nomeProduto: "Microfone Digital",
            qtd: 2000,
            categoria: "informatica"
        }
        ,
        {
            nomeProduto: "Lâmpada Led 15w",
            qtd: 250,
            categoria: "eletrica"
        }
        ,
        {
            nomeProduto: "Lenço de Papel",
            qtd: 10000,
            categoria: "higiene"
        }
    ])

    return (
        <>
            <h1>CP1 de RWD 2 SEMESTRE</h1>
            <div>
                Escopo da div
                <p>Escopo do paragrafo</p>
            </div>
            <Produtos produtos={produtos}/>
        </>
    )
}