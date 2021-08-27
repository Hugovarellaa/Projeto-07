import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(()=>{
    api.get('/transactions')
    .then(response => console.log(response.data))
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00 </td>
            <td>Freelancer </td>
            <td>28/10/2021 </td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 1.000,00 </td>
            <td>Casa </td>
            <td>05/11/2021 </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
