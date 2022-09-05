import React from 'react'

export default function Produtos(props){
    
    
    return(
        <div>
            <h2>COMPONENTE PRODUTOS</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {props.produtos.map((p,i) =>
                    <tr key={i} {i % 2 == 0 ? style = {backgroudColor:'#ccc'} : style = {backgroundColor: '#ccc'}}>
                        <td>{i}</td>
                        <td>{p.nomeProduto}</td>
                        <td>{p.qtd}</td>
                        <td>{p.categoria}</td>
                    </tr>
                    )}
                    <tfoot>
                        <tr>
                            <td colSpan={4}>
                                <caption>PRODUTOS</caption>
                            </td>
                        </tr>
                    </tfoot>
                </tbody>
            </table>
        </div>
    )
}