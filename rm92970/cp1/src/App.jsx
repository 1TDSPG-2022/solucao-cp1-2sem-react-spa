import React from "react"

export default function App() {
    
    const listaProdutos = [
        {
            nomeProduto: "Mouse Óptico",
            qtde: 100,
            categoria: "Informática"
        }
        ,
        {
            nomeProduto: "Teclado",
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