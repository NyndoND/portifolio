import styled from "styled-components";
import { theme } from "../theme";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  //background-color: red;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  min-width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: solid 1px ${({ theme }) => theme.colors.fourth};
  padding-left: 30px;
  padding-right: 30px;
`;

export const TitleName = styled.div`
  //height: 20px;
  margin-top: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fourth};
`;

export const SubTitleName = styled.div`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.fourth};
`;

export const NavigationItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  height: 80%;
  justify-content: center;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100;
  align-items: center;
  justify-content: center;
  //background-color: #000;
`;

export const PresentationCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  //background-color: #000;
`;

export const ImageAvatarContainer = styled.div`
  width: auto;
  height: auto;
`;

export const Name = styled.div`
  width: auto;
  height: auto;
  font-size: 35px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fourth};
  
`;

export const Subtitle = styled.div`
  width: auto;
  height: auto;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.fourth};
`;

export const DonwIcon = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 2vh  
`;

