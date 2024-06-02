import React, { useState } from "react";
import cl from "../accordion/Accordion.module.css";

const Accordion = () => {
  const [isOpenSalad, setIsOpenSalad] = useState(false);
  const [isOpenSoup, setIsOpenSoup] = useState(false);
  const [isOpenPaste, setIsOpenPaste] = useState(false);
  const [isOpenSnack, setIsOpenSnack] = useState(false);
  const [isOpenHotDish, setIsOpenHotDish] = useState(false);
  const [isOpenDessert, setIsOpenDessert] = useState(false);
  //
  //
  //
  const accordionMenuDBSalad = [
    {
      name: "Нисуаз с тунцом",
      price: "1090 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Нисуаз с базиликом",
      price: "790 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Картофельный салат с яйцами и тунцом",
      price: "990 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Салат с крабом и лаймом",
      price: "1550 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Салат с голубым сыром и шалотом",
      price: "850 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Салат с осьминогом",
      price: "1490 ₽",
      img: "",
      compound: "",
    },
  ];

  const accordionMenuDBSoup = [
    {
      name: "Луковый суп",
      price: "890 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Буйабес",
      price: "1020 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Крем суп из шампиньенов",
      price: "790 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Луковый суп с кебабом из утки",
      price: "650 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Луковый суп с чесночными гренками",
      price: "690 ₽",
      img: "",
      compound: "",
    },
  ];

  const accordionMenuDBPaste = [
    {
      name: "Тальятелле с трюфелем",
      price: "1100 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Паста Карбонара",
      price: "1800 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Лингвини с вонголе",
      price: "749 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Гратен из пасты с сыром пармезан",
      price: "950 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Оливковый тапенад с томатами черри",
      price: "790 ₽",
      img: "",
      compound: "",
    },
  ];

  const accordionMenuDBSnack = [
    {
      name: "Брускетта с креветками и авокадо",
      price: "790 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Брускетта с камчатским крабом",
      price: "790 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Тар-Тар из говядины",
      price: "1250 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Картофельная закуска с мидиями",
      price: "850 ₽",
      img: "",
      compound: "",
    },
  ];

  const accordionMenuDBHotDish = [
    {
      name: "Ягненок в томатном соусе",
      price: "1450 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Филе Сибаса",
      price: "1200 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Телятина в апельсиновом соусе",
      price: "1130 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Петух в вине",
      price: "1710 ₽",
      img: "",
      compound: "",
    },
    {
      name: "Утиное конфи с картофелем",
      price: "1550 ₽",
      img: "",
      compound: "",
    },
  ];

  const accordionMenuDBDessert = [
    {
      name: "Бланманже",
      price: "450 ₽ ",
      img: "",
      compound: "",
    },
    {
      name: "Крем-брюле",
      price: "550 ₽ ",
      img: "",
      compound: "",
    },
    {
      name: "Профитроль",
      price: "380 ₽ ",
      img: "",
      compound: "",
    },
    {
      name: "Птифур (5 штук)",
      price: "610 ₽ ",
      img: "",
      compound: "",
    },
    {
      name: "Суфле (Мятное/Ягодное/Фисташковое)",
      price: "490 ₽ ",
      img: "",
      compound: "",
    },
  ];
  //
  //
  //
  const [accordionMenuSalad, setAccordionMeuSalad] =
    useState(accordionMenuDBSalad);
  const [accordionMenuSoup, setAccordionMeuSoup] =
    useState(accordionMenuDBSoup);
  const [accordionMenuPaste, setaccordionMenuPaste] =
    useState(accordionMenuDBPaste);
  const [accordionMenuSnack, setaccordionMenuSnack] =
    useState(accordionMenuDBSnack);
  const [accordionMenuHotDish, setaccordionMenuHotDish] = useState(
    accordionMenuDBHotDish
  );
  const [accordionMenuDessert, setaccordionMenuDessert] = useState(
    accordionMenuDBDessert
  );
  //
  //
  //
  const toggleAccordion = (accordionType) => {
    switch (accordionType) {
      case "salad":
        setIsOpenSalad(!isOpenSalad);
        break;
      case "soup":
        setIsOpenSoup(!isOpenSoup);
        break;
      case "paste":
        setIsOpenPaste(!isOpenPaste);
        break;
      case "snack":
        setIsOpenSnack(!isOpenSnack);
        break;
      case "hotDish":
        setIsOpenHotDish(!isOpenHotDish);
        break;
      case "dessert":
        setIsOpenDessert(!isOpenDessert);
        break;
      default:
        break;
    }
  };
  //
  //
  //
  return (
    <div className={cl.container}>
      <div className={cl.accordion}>
        <div
          className={`${cl.accordion_header} ${isOpenSalad ? cl.active : ""}`}
          onClick={() => toggleAccordion("salad")}
        >
          <h3>Салаты</h3>
          <span>{isOpenSalad ? "-" : "+"}</span>
        </div>
        {isOpenSalad && (
          <div className={cl.accordion_body}>
            {accordionMenuDBSalad.map((item, index) => (
              <div key={index} className={cl.accordion_item}>
                <h4>{item.name}</h4>
                <p>Цена: {item.price}</p>
                <p>Состав: {item.compound}</p>
              </div>
            ))}
          </div>
        )}
        {/*  */}
        <div
          className={`${cl.accordion_header} ${isOpenSoup ? cl.active : ""}`}
          onClick={() => toggleAccordion("soup")}
        >
          <h3>Супы</h3>
          <span>{isOpenSoup ? "-" : "+"}</span>
        </div>
        {isOpenSoup && (
          <div className={cl.accordion_body}>
            {accordionMenuDBSoup.map((item, index) => (
              <div key={index} className={cl.accordion_item}>
                <h4>{item.name}</h4>
                <p>Цена: {item.price}</p>
                <p>Состав: {item.compound}</p>
              </div>
            ))}
          </div>
        )}
        {/*  */}
        <div
          className={`${cl.accordion_header} ${isOpenPaste ? cl.active : ""}`}
          onClick={() => toggleAccordion("paste")}
        >
          <h3>Паста</h3>
          <span>{isOpenPaste ? "-" : "+"}</span>
        </div>
        {isOpenPaste && (
          <div className={cl.accordion_body}>
            {accordionMenuDBPaste.map((item, index) => (
              <div key={index} className={cl.accordion_item}>
                <h4>{item.name}</h4>
                <p>Цена: {item.price}</p>
                <p>Состав: {item.compound}</p>
              </div>
            ))}
          </div>
        )}
        {/*  */}
        <div
          className={`${cl.accordion_header} ${isOpenSnack ? cl.active : ""}`}
          onClick={() => toggleAccordion("snack")}
        >
          <h3>Закуски</h3>
          <span>{isOpenSnack ? "-" : "+"}</span>
        </div>
        {isOpenSnack && (
          <div className={cl.accordion_body}>
            {accordionMenuDBSnack.map((item, index) => (
              <div key={index} className={cl.accordion_item}>
                <h4>{item.name}</h4>
                <p>Цена: {item.price}</p>
                <p>Состав: {item.compound}</p>
              </div>
            ))}
          </div>
        )}
        {/*  */}
        <div
          className={`${cl.accordion_header} ${isOpenHotDish ? cl.active : ""}`}
          onClick={() => toggleAccordion("hotDish")}
        >
          <h3>Горячие блюда</h3>
          <span>{isOpenHotDish ? "-" : "+"}</span>
        </div>
        {isOpenHotDish && (
          <div className={cl.accordion_body}>
            {accordionMenuDBHotDish.map((item, index) => (
              <div key={index} className={cl.accordion_item}>
                <h4>{item.name}</h4>
                <p>Цена: {item.price}</p>
                <p>Состав: {item.compound}</p>
              </div>
            ))}
          </div>
        )}
        {/*  */}
        <div
          className={`${cl.accordion_header} ${isOpenDessert ? cl.active : ""}`}
          onClick={() => toggleAccordion("dessert")}
        >
          <h3>Десерты</h3>
          <span>{isOpenDessert ? "-" : "+"}</span>
        </div>
        {isOpenDessert && (
          <div className={cl.accordion_body}>
            {accordionMenuDBDessert.map((item, index) => (
              <div key={index} className={cl.accordion_item}>
                <h4>{item.name}</h4>
                <p>Цена: {item.price}</p>
                <p>Состав: {item.compound}</p>
              </div>
            ))}
          </div>
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default Accordion;
