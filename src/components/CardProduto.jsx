import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 12px;
  padding: 16px;
  width: 280px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  background-color: #fff;
`;

const ProdutoNome = styled.h2`
  font-size: 1.2rem;
  color: #343a40;
`;

const ProdutoPreco = styled.p`
  font-size: 1rem;
  color: #495057;
  margin-bottom: 16px;
`;

const BotaoAdicionar = styled.button`
  background-color: ${({ adicionado }) => (adicionado ? '#198754' : '#6c757d')};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const CardProduto = ({ nome, preco, adicionado, onClick }) => {
  return (
    <CardContainer>
      <ProdutoNome>{nome}</ProdutoNome>
      <ProdutoPreco>R$ {preco}</ProdutoPreco>
      <BotaoAdicionar adicionado={adicionado} onClick={onClick}>
        {adicionado ? 'Adicionado' : 'Adicionar ao carrinho'}
      </BotaoAdicionar>
    </CardContainer>
  );
};

export default CardProduto;