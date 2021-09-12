import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #eaf1ef;
  border: 1px solid #b1c2be;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  display: inline-grid;
  grid-template-columns: 1fr 2fr;
  height: 15vh;
  width: auto;
`;

export const Paragraph = styled.p`
  align-items: center;
  background-color: rgba(242, 255, 252, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex: 1;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  padding: 10px;
`;

export const OrderWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center;
  padding: 15px;
`;

export const OrderLabel = styled.p`
  font-size: 1rem;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

export const PriceDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;

  > *:not( :last-child ) {
    margin-bottom: 5px;
  }
`;

export const Address = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  justify-content: flex-end;
  padding: 5px 0;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;

  > *:not( :last-child ) {
    margin-bottom: 5px;
  }
`;
