import styled from 'styled-components';
import { ButtonPrimary } from '../../components/Input/Button';

export const ListContainer = styled.div`
  background-color: rgba(251, 255, 254, 1);
  border: 1px solid rgba(177, 194, 190, 1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  overflow-x: auto;
  padding: 10px;
  position: relative;

  > * {
    flex: 1;
  }
`;

export const FormContainer = styled.div`
  display: flex;

  > *:not( :last-child ) {
    margin-right: 10px;
  }
`;

export const Button = styled(ButtonPrimary)`
  align-self: center;
`;
