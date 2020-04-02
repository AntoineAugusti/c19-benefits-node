const { routeUtils } = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  const name = route.name

  route.draw(app)
    .get((req, res) => {
      res.render(name, routeUtils.getViewData(req, {}))
    })
    .post(route.applySchema(Schema), postNoIncome)
}

const postNoIncome = (req, res) => {

  if (req.body.no_income === '6') {
    return res.redirect(res.locals.routePath('question-gross-income'))
  }

  return res.redirect(res.locals.routePath('question-mortgage-payments'))
  
}
