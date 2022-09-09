import React from 'react'
import '../produtos/produtos.scss'

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