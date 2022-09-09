import React from "react"
<<<<<<< HEAD
import { useState } from "react"
import Produtos from "./components/Produto"

export default function App() {

    const [produtos, setProdutos] = useState([
        {
            nomeProduto: "Mouse Óptico",
            qtd: 100,
            categoria: "informatica"
=======

export default function App() {


    
    const listaProdutos = [
        {
            nomeProduto: "Mouse Óptico",
            qtde: 100,
            categoria: "Informática"
>>>>>>> 30f2ff74a58c94cb89a722e52cf028d217747892
        }
        ,
        {
            nomeProduto: "Teclado",
<<<<<<< HEAD
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
            <div>
                Escopo da Div
                <p>Escopo do parágrafo</p>
            </div>
            <Produtos produtos={produtos} />
        </>
    )
}

=======
            qtde: 500,
            categoria: "Informática"
        }
        ,
        {
            nomeProduto: "Headset",
            qtde: 2000,
            categoria: "Informática"
        }
        ,
        {
            nomeProduto: "Cabo HDMI",
            qtde: 200,
            categoria: "Informática"
        }
        ,
        {
            nomeProduto: "Mousepad",
            qtde: 30,
            categoria: "Informática"
        }
    ]

    return(
        <>
            <h1>CP1 de RWD 2º SEMESTRE</h1>
            <Produtos produtos={produtos}/>
        </>
    )
}
>>>>>>> 30f2ff74a58c94cb89a722e52cf028d217747892
