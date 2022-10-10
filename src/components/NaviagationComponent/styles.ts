import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
`;

export const IconContainer = styled.div`
  height: 30px;
  margin-right: 10px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({theme})=> theme.colors.fourth};
`;
