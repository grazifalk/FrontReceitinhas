import { Sidebar } from "../../components/sidebar";
import "./style.css";
import Banner from "../../../src/assets/newbanner.png";
import { BodyContent, ContainerCards } from "./style";
import { CardLarge } from "../../components/card-lg";
import { CardSmall } from "../../components/card-sm";

export const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            <Sidebar />
            <BodyContent>
              <img
                src={Banner}
                alt="Receitinhas by Grazi Falk"
                className="banner-image"
              />
              <ContainerCards>
                <div>
                  <CardLarge />
                </div>
                <div>
                  <CardSmall />
                  <CardSmall />
                </div>
              </ContainerCards>
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
