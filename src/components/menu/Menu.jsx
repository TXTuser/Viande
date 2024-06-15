import React, { useState } from "react";
import cl from "../../components/menu/Menu.module.css";

import MenuOne from "../../image/MenuOne.svg";
import MenuTwo from "../../image/MenuTwo.svg";
import MenuThree from "../../image/MenuThree.svg";
import MenuFour from "../../image/MenuFour.svg";
import MenuFive from "../../image/MenuFive.svg";
import MenuSix from "../../image/MenuSix.svg";

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

  const [infoMenu, setInfoMenu] = useState(menuDB);
  const [infoMenuTwo, setInfoMenuTwo] = useState(menuDBTwo);

  return (
    <div className={cl.container}>
      <div className={cl.contentBlock}>
        <p className={cl.title}>Menu</p>
        <div className={cl.fullMenu}>
          {/* поменять на navlink */}
          <a href="">Барная карта</a>
          <a href="">Основное меню</a>
          <a href="">Винная карта</a>
          {/* поменять на navlink */}
        </div>
        <section className={cl.menu}>
          {infoMenu.map((el) => (
            <div className={cl.dish}>
              <img className={cl.img} src={el.img} alt="" />
              <div className={cl.dishInfo}>
                <p>{el.name}</p>
                <p>{el.price}</p>
              </div>
            </div>
          ))}
        </section>
        <section className={cl.menu}>
          {infoMenuTwo.map((el) => (
            <div className={cl.dish}>
              <img className={cl.img} src={el.img} alt="" />
              <div className={cl.dishInfo}>
                <p>{el.name}</p>
                <p>{el.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Menu;
