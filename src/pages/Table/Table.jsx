import React, { useState } from "react";
import Header from "../../components/header/Header";

import cl from "../Table/Table.module.css";

import tableOneGreen from "../../image/tableOneGreen.svg";
import tableTwoGreen from "../../image/tableTwoGreen.svg";
import tableThreeGreen from "../../image/tableThreeGreen.svg";
import tableFourGreen from "../../image/tableFourGreen.svg";
import tableOneRed from "../../image/tableOneRed.svg";
import tableTwoRed from "../../image/tableTwoRed.svg";
import tableThreeRed from "../../image/tableThreeRed.svg";
import tableFourRed from "../../image/tableFourRed.svg";

const Table = () => {
  const [currentTime, setCurrentTime] = useState("12:00");

  const [showModal, setShowModal] = useState(false);

  const [tableImages, setTableImages] = useState([
    {
      green: tableOneGreen,
      red: tableOneRed,
    },
    {
      green: tableTwoGreen,
      red: tableTwoRed,
    },
    {
      green: tableThreeGreen,
      red: tableThreeRed,
    },
    {
      green: tableFourGreen,
      red: tableFourRed,
    },
  ]);

  const [tables, setTables] = useState([
    {
      id: 1,
      date: {
        "08.06.2024": [
          {
            name: "Mars",
            time: ["17:00:00", "18:00:00"],
          },
          {
            name: "Volt",
            time: ["12:00:00", "14:00:00"],
          },
        ],
      },
    },
    {
      id: 2,
      date: {
        "08.06.2024": [
          {
            name: "Vova",
            time: ["14:30:00", "18:00:00"],
          },
          {
            name: "Oleg",
            time: ["12:00:00", "14:00:00"],
          },
        ],
      },
    },
    {
      id: 3,
      date: {
        "08.06.2024": [
          {
            name: "Danya",
            time: ["16:30:00", "17:45:00"],
          },
          {
            name: "Oleg",
            time: ["12:00:00", "14:00:00"],
          },
        ],
      },
    },
    {
      id: 4,
      date: {
        "08.06.2024": [
          {
            name: "Mars",
            time: ["17:00:00", "18:00:00"],
          },
          {
            name: "Volt",
            time: ["12:00:00", "14:00:00"],
          },
        ],
      },
    },
  ]);

  function isReserved(tableId) {
    let reserved = false;
    for (let i = 0; i < tables[tableId].date["08.06.2024"].length; i++) {
      let startTime = tables[tableId].date["08.06.2024"][i].time[0];
      let endTime = tables[tableId].date["08.06.2024"][i].time[1];

      let startDate = new Date();
      startDate.setHours(startTime.split(":")[0]);
      startDate.setMinutes(startTime.split(":")[1]);
      startDate.setSeconds("00");

      let endDate = new Date();
      endDate.setHours(endTime.split(":")[0]);
      endDate.setMinutes(endTime.split(":")[1]);
      endDate.setSeconds("00");

      let currentDate = new Date();
      currentDate.setHours(currentTime.split(":")[0]);
      currentDate.setMinutes(currentTime.split(":")[1]);
      currentDate.setSeconds("00");

      reserved = startDate <= currentDate && endDate >= currentDate;

      if (reserved) {
        console.log(reserved);
        return reserved;
      }
    }
    return reserved;
  }

  return (
    <div>
      {/* <Header /> */}

      <div
        className={cl.modal + (showModal ? cl.showModal : "")}
        onClick={() => setShowModal(false)}
      >
        <form
          action=""
          className={cl.form}
          onClick={(event) => event.stopPropagation()}
        >
          <h1>
            Стол #<span>Зал с открытой кухней</span>
          </h1>
          <img src="" alt="" />
          <h2>На какое время был забронирован стол</h2>
          <button>1 час</button>
          <button>2 час</button>
          <button>3 час</button>
          <button>Забронировать</button>
        </form>
      </div>

      <div className={cl.container}>
        <div className={cl.title}>
          <h1>Бронирование столов</h1>
        </div>
        <div className={cl.time}>
          <button>←</button>
          <input
            type="time"
            value={currentTime}
            onChange={(e) => setCurrentTime(e.target.value)}
          />
          <button>→</button>
        </div>
        <div className={cl.tables}>
          {tables.map((el, id) => (
            <div className={cl.table} onClick={() => setShowModal(true)}>
              <img
                src={
                  isReserved(id) ? tableImages[id].red : tableImages[id].green
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
