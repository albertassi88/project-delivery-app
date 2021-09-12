import styled from 'styled-components';
import Container from '../../components/Container';

export const Image = styled.img`
  width: 700px;
`;

export const LoginContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  width: 500px;
`;
