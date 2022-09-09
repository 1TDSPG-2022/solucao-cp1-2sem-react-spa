import React from 'react'
import "./Produtos.css"

export default function Produtos(props) {

    return (
        <div>
            <h2>COMPONENTE PRODUTOS</h2>
            <table className="tblProdutos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {props.produtos.map((p, i) =>
                        // <tr key={i} style={i % 2 === 0 ? { backgroundColor: "#ccc" } : { backgroundColor: "#ddd333" }} >
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{p.nomeProduto}</td>
                            <td>{p.qtd}</td>
                            <td>{p.categoria}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <caption>PRODUTOS</caption>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}


// 4 – No componente Produtos deve ser realizada através dos método necessários o consumo
// da lista de produtos: (3, 5 Pontos)
// a) A lista de produtos deve ser apresentada em uma < table >.
//     b) Adicione a coluna ID a tabela.
//         c) As linhas da tabela devem ser de cores diferentes, ou seja, uma tabela zebrada.
// Utilize algum tipo de índice para poder realizar esse processo