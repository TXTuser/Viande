import React from "react";
import { useState } from "react";
import cl from "../team/Team.module.css";

import Telfor from "../../image/Telfor.svg";
import Karoly from "../../image/Karoly.svg";
import Mai from "../../image/Mai.svg";

const Team = () => {
  const teamDB = [
    {
      name: "Telfor Davault",
      img: Telfor,
      // description:
      //   "Главной чертой его работы является профессионализм и творческий подход к созданию блюд. ",
    },
    {
      name: "Karoly Soule",
      img: Karoly,
      // description:
      //   "Владелец одного из лучших ресторанов мира французской кухни по оценке Michelin.",
    },
    {
      name: "Mai Labell",
      img: Mai,
      // description:
      //   "На данный момент является лучшей управляющей во всей Франции. Управляла лучшими ресторанами по всему миру.",
    },
  ];

  const [infoTeam, setInfoTeam] = useState(teamDB);

  return (
    <>
      <div className={cl.container}>
        <p className={cl.title}>Команда "Viande"</p>
        <section className={cl.team}>
          {infoTeam.map((el) => (
            <div className={cl.info}>
              <p className={cl.name}>{el.name}</p>
              <img className={cl.img} src={el.img} alt={el.name} />
              <p className={cl.description}>{el.description}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Team;
