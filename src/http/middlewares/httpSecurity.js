import Cors from 'cors'
import Helmet from 'helmet'

module.exports = app => {
  app.use(Cors())
  app.use(Helmet())
}
