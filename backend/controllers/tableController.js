const { Table } = require("../models/models");
const ApiError = require("../error/ApiError");

class TableController {
  async create(req, res, next) {
    try {
        let table = await Table.create({

        })
        return res.json(table)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
  }
}
