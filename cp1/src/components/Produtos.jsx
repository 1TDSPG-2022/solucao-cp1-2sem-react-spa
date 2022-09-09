import React from 'react'

export default function Produtos(props) {
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do Produto</th>
                    <th>Quantidade</th>
                    <th>Categoria do Produto</th>
                </tr>
            </thead>
            <tbody>
                { props.lista.map((produto, index) => 
                    <tr className={(index%2 === 0) ? "impar" : ""}>
                        <td>{index}</td>
                        <td>{produto[0]}</td>
                        <td>{produto[1]}</td>
                        <td>{produto[2]}</td>
                    </tr>
                ) }
            </tbody>
        </table>
    </div>
  )
}
