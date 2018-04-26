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
  }
}

module.exports = api
