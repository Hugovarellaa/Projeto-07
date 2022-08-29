import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LayoutContent = styled.div`
  margin: 0 4.6875rem 0 10.3125rem;
  
  img {
    margin-top: 2.375rem;
  }
  
  h1 {
    margin-top: 8.25rem;
    font-size: 3.8125rem;
    line-height: 71.48px;
  }

  p {
    font-size: 1rem;
    line-height: 18.75px;
    font-weight: 500;
    opacity: 0.7;
    margin-top: 1.25rem;
  }

  button {
    margin-top: 3.75rem;
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
    padding: 1.1875rem 3rem;
    border-radius: 100px;
    border: 0;
    font-weight: bold;

    &:hover {
      filter: brightness(0.7);
    }
  }

`


export const IlustrationContainer = styled.div`
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  align-items: center;
  object-fit: contain;
  
  img{
    width: 48.3125rem;
    height: 27.3125rem;
  }

`