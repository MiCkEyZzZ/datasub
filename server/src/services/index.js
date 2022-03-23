const customers = require('./customers/customers.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(customers)
}
