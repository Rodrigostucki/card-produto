import React, { useState } from 'react';
import CardProduto from './components/CardProduto';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh; /* altura total da tela */
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: center;     /* centraliza verticalmente */
  background-color: #f8f9fa;
`;

function App() {
  const [adicionado, setAdicionado] = useState(false);

  const handleAdicionar = () => {
    setAdicionado(!adicionado);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <CardProduto
        nome="Notebook Gamer"
        preco="4.299,00"
        adicionado={adicionado}
        onClick={handleAdicionar}
      />
    </AppContainer>
  );
}

export default App;
