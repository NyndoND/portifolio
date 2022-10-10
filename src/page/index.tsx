import { ThemeProvider } from "styled-components";
import NavigationComponent from "../components/NaviagationComponent";
import { theme } from "../theme";
import {
  Container,
  NavigationBar,
  TitleName,
  SubTitleName,
  NavigationItems,
  Content,
  PresentationCard,
  ImageAvatarContainer,
  Name,
  Subtitle,
  DonwIcon,
} from "./styles";

import {
  IoArrowDownOutline
} from "react-icons/io5";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavigationBar>
          <TitleName>Renann de Oliveira</TitleName>
          <SubTitleName>Desenvolvedor Front End - React Engenharia de Software - 6° semestre Brasília - DF</SubTitleName>
          <NavigationItems>
            <NavigationComponent icon="home" text="Home" />
            <NavigationComponent icon="pencil" text="About me" />
            <NavigationComponent icon="fileStacked" text="Professional Experience" />
            <NavigationComponent icon="education" text="Education" />
            <NavigationComponent icon="telephone" text="Contact" />
            <NavigationComponent icon="linkedin" text="LinkedIn" />
            <NavigationComponent icon="github" text="Github" />
          </NavigationItems>
        </NavigationBar>

        <Content>
          <PresentationCard>
            <ImageAvatarContainer>

            </ImageAvatarContainer>
            <Name>Renann de Oliveira Gomes</Name>
            <Subtitle>Desenvolvedor Front End e futuramente full stack!</Subtitle>
            <DonwIcon> <IoArrowDownOutline size={"100%"} color={theme.colors.third}/> </DonwIcon>
          </PresentationCard>
        </Content>
      </Container>
    </ThemeProvider>
  )
}