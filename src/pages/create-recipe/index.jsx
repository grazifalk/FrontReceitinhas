import { useEffect, useState } from "react";
import { FormCreate } from "../../components/form-create";
import { Sidebar } from "../../components/sidebar";
import { BodyContent, Title } from "./style";
import { SidebarMobile } from "../../components/sidebar-mobile";

export const CreateRecipe = () => {
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
              <Title>Enviar uma nova receita:</Title>
              <FormCreate />
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
