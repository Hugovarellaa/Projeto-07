import incomeImg from "../../assets/income.svg";
import oucomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.500,00</strong>
      </div>

      <div>
        <header>
          <p>Saida</p>
          <img src={oucomeImg} alt="Saida" />
        </header>
        <strong>-R$ 700,00</strong>
      </div>

      <div className="green">
        <header>
          <p>total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 800,00</strong>
      </div>

    </Container>
  );
}
