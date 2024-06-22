import React, { useState } from "react";

import cl from "../../components/menu/Menu.module.css";

import MenuOne from "../../image/MenuOne.svg";
import MenuTwo from "../../image/MenuTwo.svg";
import MenuThree from "../../image/MenuThree.svg";
import MenuFour from "../../image/MenuFour.svg";
import MenuFive from "../../image/MenuFive.svg";
import MenuSix from "../../image/MenuSix.svg";

import hoverImageBar from "../../image/hoverImageBar.svg";
import hoverImageMain from "../../image/hoverImageBar.svg";
import hoverImageWine from "../../image/hoverImageBar.svg";
// import hoverImageMain from "../../image/hoverImageMain.svg";
// import hoverImageWine from "../../image/hoverImageWine.svg";

const Menu = () => {
  const menuDB = [
    {
      name: "Телятина в апельсиновом соусе",
      img: MenuOne,
      price: "1100 ₽",
    },
    {
      name: "Паста Карбонара",
      img: MenuTwo,
      price: "1800 ₽",
    },
    {
      name: "Тар-тар из говядины",
      img: MenuThree,
      price: "1250 ₽",
    },
  ];

  const menuDBTwo = [
    {
      name: "Ягненок в томатном соусе",
      img: MenuFour,
      price: "1450 ₽",
    },
    {
      name: "Тальятелле с трюфелем",
      img: MenuFive,
      price: "1100 ₽",
    },
    {
      name: "Филе сибаса",
      img: MenuSix,
      price: "1200 ₽",
    },
  ];

  const [infoMenu] = useState(menuDB);
  const [infoMenuTwo] = useState(menuDBTwo);

  const [modalState, setModalState] = useState({
    isOpen: false,
    image: null,
  });

  const handleLinkClick = (image) => (e) => {
    e.preventDefault();
    setModalState({ isOpen: true, image });
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalState({ isOpen: false, image: null });
    }
  };

  return (
    <div className={cl.container}>
      <div className={cl.contentBlock}>
        <p className={cl.title}>Menu</p>
        <div className={cl.fullMenu}>
          <a href="#" onClick={handleLinkClick(hoverImageBar)}>
            Барная карта
          </a>
          <a href="#" onClick={handleLinkClick(hoverImageMain)}>
            Основное меню
          </a>
          <a href="#" onClick={handleLinkClick(hoverImageWine)}>
            Винная карта
          </a>
        </div>
        {modalState.isOpen && (
          <div className={cl.modal} onClick={handleModalClick}>
            <div className={cl.modalContent}>
              <img src={modalState.image} alt="Hover" />
            </div>
          </div>
        )}
      </div>
      <section className={cl.menu}>
        {infoMenu.map((el) => (
          <div key={el.name} className={cl.dish}>
            <img className={cl.img} src={el.img} alt={el.name} />
            <div className={cl.dishInfo}>
              <p>{el.name}</p>
              <p>{el.price}</p>
            </div>
          </div>
        ))}
      </section>
      <section className={cl.menu}>
        {infoMenuTwo.map((el) => (
          <div key={el.name} className={cl.dish}>
            <img className={cl.img} src={el.img} alt={el.name} />
            <div className={cl.dishInfo}>
              <p>{el.name}</p>
              <p>{el.price}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;
