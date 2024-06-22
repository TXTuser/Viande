const { Client } = require("pg");
const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const Table = sequelize.define("table", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Entry = sequelize.define("entry", {
  id: {},
  client: {},
  client_name: {},
  dateStart: {},
  dateEnd: {},
  tableId: {},
});
