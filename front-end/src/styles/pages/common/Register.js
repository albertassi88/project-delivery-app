import styled from 'styled-components';
import Container from '../../components/Container';

export const RegisterContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const StyledContainer = styled(Container)`
  width: 500px;
`;
