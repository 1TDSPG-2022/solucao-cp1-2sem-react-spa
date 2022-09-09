import React from "react"
import { useState } from "react"
import Produtos from "./components/produtos/Produtos"

export default function App() {

    // const listaProdutos = [
    //     {
    //         nomeProduto: "Mouse Óptico",
    //         qtd: 100,
    //         categoria: "informatica"
    //     }
    //     ,
    //     {
    //         nomeProduto: "Teclado",
    //         qtd: 500,
    //         categoria: "informatica"
    //     }
    //     ,
    //     {
    //         nomeProduto: "Microfone Digital",
    //         qtd: 2000,
    //         categoria: "informatica"
    //     }
    //     ,
    //     {
    //         nomeProduto: "Lâmpada Led 15w",
    //         qtd: 250,
    //         categoria: "eletrica"
    //     }
    //     ,
    //     {
    //         nomeProduto: "Lenço de Papel",
    //         qtd: 10000,
    //         categoria: "higinene"
    //     }
    // ]

    // const [produtos, setProdutos] = useState(listaProdutos)
    const [produtos, setProdutos] = useState([
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
            categoria: "higinene"
        }
    ])
    return (
        <>
            <h1>CP1 de RWD 2º SEMESTRE</h1>
            <Produtos produtos={produtos} />
        </>
    )
}

// 3 – Crie um componente chamado Produtos. ( 1,5 Pontos)
// Esse componente deve receber através de props do componente App.jsx :
// a) A lista de produtos, no caso o state.

// 2 – No App.jsx crie a seguinte estrutura. ( 3,5 Pontos)
// a) Adicione um fragmento.
// b) Um elemento h1 com o texto “CP1 de RWD 1º SEMESTRE”.
// c) Declare um useState de nome produtos que recebe uma lista de produtos com no
// mínimo 5 produtos e com os seguintes atributos:
// nomeProduto = “Mouse Óptico”
// qtd = 100
// categoria = “informatica”, ...
