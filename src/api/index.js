const search = require('./search')
const suggest = require('./suggest')

module.exports = () => {
  search()
  suggest()
}
