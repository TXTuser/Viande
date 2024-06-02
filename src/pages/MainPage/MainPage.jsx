import React from "react";
import logo from "../../image/logo.png";
import cl from "./MainPage.module.css";
import Header from "../../components/header/Header";
import Team from "../../components/team/Team";
import Menu from "../../components/menu/Menu";
import Accordion from "../../components/accordion/Accordion";
import FullMenu from "../../pages/FullMenu/FullMenu";

const MainPage = () => {
  return (
    <>
      <Header />

      <section className={cl.hero}>
        <div className={cl.container}>
          <img className={cl.logo} src={logo} alt="" />
        </div>
      </section>

      {/* <section className={cl.mail}>
        <div className={cl.container}>
          <div className={cl.mailContent}>
            <p className={cl.mailText}>
              Mon amour,Depuis ce doux baiser du début d’année, mon coeur
              s’emballe pour un rien, les sourires ne me quittent plus. Tu es
              là, dans mon coeur, et ma vie change de couleurs ! Tu es si tendre
              dans tes paroles, tes gestes, tu me fais rire et me rassures. Avec
              toi, je n’ai peur de rien…
            </p>
            <p className={cl.mailSign}>Le premier amour du fondateur du restaurant "Viande"</p>
          </div>
        </div>
      </section> */}

      {/* <section className="slider"></section> */}

      <Team />

      <Menu />

      {/* <Accordion /> */}

      {/* <FullMenu /> */}
    </>
  );
};

export default MainPage;
