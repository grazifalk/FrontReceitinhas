import { Sidebar } from "../../components/sidebar";
import { BodyContent, Picture, Text, Title } from "./style";
import Photo from "../../../src/assets/about-vector.png";
import { SidebarMobile } from "../../components/sidebar-mobile";
import { useEffect, useState } from "react";

export const About = ({
  HandledarkMode,
  checar,
  decreaseFontSize,
  increaseFontSize,
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  function getWindowSize() {
    return window.screen.width;
  }

  return (
    <>
      {windowSize < 801 ? (
        <SidebarMobile
          increaseFontSize={increaseFontSize}
          decreaseFontSize={decreaseFontSize}
          checar={checar}
          HandledarkMode={HandledarkMode}
        />
      ) : null}
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            {windowSize > 800 ? (
              <Sidebar
                increaseFontSize={increaseFontSize}
                decreaseFontSize={decreaseFontSize}
                checar={checar}
                HandledarkMode={HandledarkMode}
              />
            ) : null}
            <BodyContent>
              <Title>O projeto</Title>
              <Text>
                Esse projeto foi desenvolvido para treinar habilidades
                FullStack. O BackEnd é composto de uma API feita em C# com .NET
                e a parte de FrontEnd foi criada utilizando React.
              </Text>
              <Title>A autora</Title>
              <Text>
                Graziela Falk, 33 anos. Desenvolvedora FullStack Trainee II,
                gosta de colocar uma pitada de criatividade em tudo o que faz.
              </Text>
              <Picture src={Photo} alt="Autora" />
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
