import illustrationImg from "../images/illustration.png";
import logoImg from "../images/Logo.svg";
import { IlustrationContainer, LayoutContainer, LayoutContent } from "./styles";

export function Layout() {
  return (
    <LayoutContainer>
      <LayoutContent>
        <img src={logoImg} alt="" />
        <h1>The easiest way to manage team projects & tasks</h1>
        <p>Take a tour of work management platform to see how you can do more of your best work.</p>
        <button>Know More</button>
      </LayoutContent>
      <IlustrationContainer>
        <img src={illustrationImg} alt="" />
      </IlustrationContainer>
    </LayoutContainer>
  )
}