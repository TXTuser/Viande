import React, { useState } from "react";
import logo from "../../image/logo.png";
import cl from "./MainPage.module.css";
import Header from "../../components/header/Header";
import Team from "../../components/team/Team";
import Menu from "../../components/menu/Menu";

import NewsOne from "../../image/newsOne.jpg";
import NewsTwo from "../../image/newsTwo.png";

const MainPage = () => {
  const newsDB = [
    {
      image: NewsOne,
      date: "14.02.2024",
      title: '8 марта в ресторане "Viande".',
      description:
        "Порадуйте свою возлюбленную новым и изумительным авторским десертом.",
    },
    {
      image: NewsTwo,
      date: "10.06.2024",
      title: 'Открыта летняя веранда ресторана "Viande".',
      description:
        "После наступления лета, хочется больше проводить времени на свежем воздухе. Нашей командой было принято решение построить Террасу специально для наших гостей.",
    },
  ];

  const [news, setNews] = useState(newsDB);
  return (
    <>
      <Header />

      <section className={cl.hero}>
        <div className={cl.container}>
          <img className={cl.logo} src={logo} alt="" />
        </div>
      </section>

      <Team />

      <Menu />

      <section className={cl.news}>
        <div className={cl.container}>
          <p className={cl.newsTitle}>События</p>
          <div className={cl.newsMainBlock}>
            {news.map((item) => (
              <div className={cl.newsBlock}>
                <img src={item.image} alt={item.title} />
                <div className={cl.newsInfo}>
                  <p className={cl.newsInfoTitle}>{item.title}</p>
                  <p className={cl.newsInfoDescription}>{item.description}</p>
                  <p className={cl.newsInfoDate}>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
