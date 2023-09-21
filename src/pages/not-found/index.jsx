import { Sidebar } from "../../components/sidebar";
import { BodyContent, Picture, Title } from "./style";
import Photo from "../../../src/assets/404grazi.png";
import { useEffect, useState } from "react";
import { SidebarMobile } from "../../components/sidebar-mobile";

export const NotFound = () => {
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
      {windowSize < 801 ? <SidebarMobile /> : null}
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            {windowSize > 800 ? <Sidebar /> : null}
            <BodyContent>
              <Title>404 - Página não encontrada!</Title>
              <Picture src={Photo} alt="Página não encontrada" />
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
