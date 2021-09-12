import React from 'react';
import {
  StyledProductListHeader,
  Id,
  Name,
  Email,
  Role,
  RemoveButton,
} from '../../styles/components/List/UserListHeader';

const ProductListHeader = () => (
  <StyledProductListHeader>
    <Id>Item</Id>
    <Name>Nome</Name>
    <Email>E-mail</Email>
    <Role>Tipo</Role>
    <RemoveButton>Excluir</RemoveButton>
  </StyledProductListHeader>
);

export default ProductListHeader;
