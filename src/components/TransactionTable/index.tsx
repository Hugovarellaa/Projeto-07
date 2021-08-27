import { Container } from "./styles";

export function TransactionTable() {
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
            <td>R$ 12.000,00 </td>
            <td>Freelancer </td>
            <td>28/10/2021 </td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td>R$ 1.000,00 </td>
            <td>Casa </td>
            <td>05/11/2021 </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
