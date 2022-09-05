import React from 'react'
import { useState } from 'react'
import Produtos from './components/produtos/Produtos'

export default function App() {
    const[produtos, setProdutos] = useState()

    const listaProdutos = [
        {nomeProduto : "Mouse Optico", 
         qtd : 100, 
         categoria : "informatica"
        }
        ,
        {nomeProduto : "Teclado", 
         qtd : 203, 
         categoria : "informatica"
        }
        ,
        {nomeProduto : "Monitor", 
         qtd : 36, 
         categoria : "informatica"
        }
        ,
        {nomeProduto : "MousePad", 
         qtd : 301, 
         categoria : "informatica"
        }
        ,
        {nomeProduto : "Placa de video", 
         qtd : 46, 
         categoria : "informatica"
        }
    ]

    return (
        <>
            <h1>CP1 de RWD 2 SEMESTRE</h1>
            <Produtos produtos={produtos}/>
        </>
    )
}