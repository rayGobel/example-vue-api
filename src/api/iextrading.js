// IEX Trading Api
//
const Axios = require('axios')
const API_ROOT = 'https://api.iextrading.com/1.0/'

const api = {
  getMostActiveCompany: function () {
    const endpoint = 'stock/market/list/mostactive'
    const url = API_ROOT + endpoint
    return Axios.get(url)
      .then(result => result.data)
  },
  getGainersCompany: function () {
    const endpoint = 'stock/market/list/gainers'
    const url = API_ROOT + endpoint
    return Axios.get(url)
      .then(result => result.data)
  },
  getCompanyList: function () {
    const endpoint = 'ref-data/symbols'
    const url = API_ROOT + endpoint
    return Axios.get(url)
      .then(result => result.data)
  },
  getCompanyDetail: function (symbol) {
    const endpoint = `stock/${symbol}/company`
    const url = API_ROOT + endpoint
    return Axios.get(url)
      .then(result => result.data)
  },
  getCompanyKeyStatistics: function (symbol) {
    const endpoint = `stock/${symbol}/stats`
    const url = API_ROOT + endpoint
    return Axios.get(url)
      .then(result => result.data)
  },
  getCompanyQuote: function (symbol) {
    const endpoint = `stock/${symbol}/quote`
    const url = API_ROOT + endpoint
    return Axios.get(url)
      .then(result => result.data)
  }
}

module.exports = api
