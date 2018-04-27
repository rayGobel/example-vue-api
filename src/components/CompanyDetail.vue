<template>
  <div class="company-detail card">
    <div v-if="isError" class="card-body">
      <h5 class="card-title">Error</h5>
      <p>{{ err.message }}</p>
    </div>
    <div v-if="isLoading" class="card-body">
      <h5 class="card-title">Loading...</h5>
    </div>
    <div v-if="isLoading === false && isError === false" class="card-body">

      <div class="row">
        <div class="col-sm">
          <p>
          <span class="display-4">{{ quote.latestPrice }}</span>
          <span class="lead">{{ quote.change }}</span>
          <span class="lead">{{ quote.changePercent * 100 }} %</span></p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <h2 class="card-title">{{ companyDetail.symbol }} - {{ companyDetail.companyName }}</h2>
          <p class="lead">{{ companyDetail.description }}</p>
          <p>Website: <a :href="companyDetail.website">{{ companyDetail.website }}</a></p>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col-sm">
          <h3>Market Cap</h3>
          <h4>{{ keyStatistics.marketcap | dollar }}</h4>
        </div>
        <div class="col-sm">
          <h3>Revenue</h3>
          <h4>{{ keyStatistics.revenue | dollar }}</h4>
        </div>
        <div class="col-sm">
          <h3>Gross Profit</h3>
          <h4>{{ keyStatistics.grossProfit | dollar }}</h4>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import IEXService from './../api/iextrading'

export default {
  props: ['symbol'],
  mounted () {
    this.getPageData()
  },
  methods: {
    getPageData () {
      const symbol = this.symbol.toLowerCase()
      Promise.all([
        this.getCompanyDetail(symbol),
        this.getCompanyKeyStatistics(symbol),
        this.getCompanyQuote(symbol)
      ])
        .then(([companyDetail, keyStats, quote]) => {
          this.companyDetail = companyDetail
          this.keyStatistics = keyStats
          this.quote = quote
        })
        .then(_ => {
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          this.isError = true
          this.err = err
        })
    },
    getCompanyDetail (symbol) {
      return IEXService.getCompanyDetail(symbol)
    },
    getCompanyKeyStatistics (symbol) {
      return IEXService.getCompanyKeyStatistics(symbol)
    },
    getCompanyQuote (symbol) {
      return IEXService.getCompanyQuote(symbol)
    }
  },
  data () {
    return {
      companyDetail: {},
      quote: {},
      keyStatistics: {},
      isLoading: true,
      isError: false,
      err: {
        message: ''
      }
    }
  },
  filters: {
    dollar (money) {
      let ONE_BILLION = 1000000000
      let ONE_MILLION = 1000000

      let result = money
      if (money / ONE_BILLION > 1) {
        result = (money / ONE_BILLION).toFixed(2) + ' Bil.'
      } else if (money / ONE_MILLION > 1) {
        result = (money / ONE_MILLION).toFixed(2) + ' Mil.'
      }
      return 'USD ' + result
    }
  }
}
</script>
