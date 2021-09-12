import styled from 'styled-components';
import ListHeader from './ListHeader';

export const StyledProductListHeader = styled(ListHeader)`
  > * {
    display: flex;
    flex-basis: 130px;
    font-size: 1rem;
    justify-content: center;
  }
`;

export const Id = styled.p`
  flex-basis: 70px;
`;

export const Name = styled.p`
  flex: 1;
`;

export const Email = styled.p`
  flex-basis: 300px;
`;

export const Role = styled.p`
  flex-basis: 300px;
`;

export const RemoveButton = styled.p`
  flex-basis: 170px;
`;
