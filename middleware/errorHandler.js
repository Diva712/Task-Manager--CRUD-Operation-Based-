const { CustomAPIError } = require("../errors/customError")

const errorHandler = (err, req, res, next) => {


  return res.status(500).json({ msg: 'Something went wrong ! you are doing some wrong !!' })
}

module.exports = errorHandler
