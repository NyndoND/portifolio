import {
  Container,
  IconContainer,
  Text,
} from './styles';

import {
  IoPencil,
  IoHomeOutline,
  IoSchoolOutline,
  IoFileTrayStacked,
  IoCall,
  IoLogoLinkedin,
  IoLogoGithub
} from "react-icons/io5";

import { theme } from "../../theme";

interface INavigationComponent {
  icon: "home"|"pencil"|"fileStacked"|"education"|"telephone"|"linkedin"|"github";
  text: string;
}

export default function NavigationComponent({ icon, text }: INavigationComponent) {

  function selectIcon(icon: string) {
    switch (icon) {
      case "home":
        return <IoHomeOutline size={"100%"} color={theme.colors.third} />;
      case "pencil":
        return <IoPencil size={"100%"} color={theme.colors.third} />;
      case "fileStacked":
        return <IoFileTrayStacked size={"100%"} color={theme.colors.third} />;
      case "education":
        return <IoSchoolOutline size={"100%"} color={theme.colors.third} />;
      case "telephone":
        return <IoCall size={"100%"} color={theme.colors.third} />;
      case "linkedin":
        return <IoLogoLinkedin size={"100%"} color={theme.colors.third} />;
      case "github":
        return <IoLogoGithub size={"100%"} color={theme.colors.third} />;
    }
  }

  return (
    <Container>
      <IconContainer>
        {
          selectIcon(icon)
        }
      </IconContainer>
      <Text>
        {text}
      </Text>
    </Container>

  )
}