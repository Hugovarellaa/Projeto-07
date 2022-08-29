import { ThemeProvider } from "styled-components";
import { Layout } from "./layout";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  )
}