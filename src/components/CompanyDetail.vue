<template>
  <div class="company-detail card">
    <div class="card-body">
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

      <div class="row">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['symbol'],
  data () {
    return {
      companyDetail: {
        'symbol': 'AAPL',
        'companyName': 'Apple Inc.',
        'exchange': 'Nasdaq Global Select',
        'industry': 'Computer Hardware',
        'website': 'http://www.apple.com',
        'description': 'Apple Inc is an American multinational technology company. It designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players.',
        'CEO': 'Timothy D. Cook',
        'issueType': 'cs',
        'sector': 'Technology'
      },
      quote: {
        'symbol': 'AAPL',
        'companyName': 'Apple Inc.',
        'primaryExchange': 'Nasdaq Global Select',
        'sector': 'Technology',
        'calculationPrice': 'tops',
        'open': 154,
        'openTime': 1506605400394,
        'close': 153.28,
        'closeTime': 1506605400394,
        'high': 154.80,
        'low': 153.25,
        'latestPrice': 158.73,
        'latestSource': 'Previous close',
        'latestTime': 'September 19, 2017',
        'latestUpdate': 1505779200000,
        'latestVolume': 20567140,
        'iexRealtimePrice': 158.71,
        'iexRealtimeSize': 100,
        'iexLastUpdated': 1505851198059,
        'delayedPrice': 158.71,
        'delayedPriceTime': 1505854782437,
        'previousClose': 158.73,
        'change': -1.67,
        'changePercent': -0.01158,
        'iexMarketPercent': 0.00948,
        'iexVolume': 82451,
        'avgTotalVolume': 29623234,
        'iexBidPrice': 153.01,
        'iexBidSize': 100,
        'iexAskPrice': 158.66,
        'iexAskSize': 100,
        'marketCap': 751627174400,
        'peRatio': 16.86,
        'week52High': 159.65,
        'week52Low': 93.63,
        'ytdChange': 0.3665
      },
      keyStatistics: {
        'companyName': 'Apple Inc.',
        'marketcap': 760334287200,
        'beta': 1.295227,
        'week52high': 156.65,
        'week52low': 93.63,
        'week52change': 58.801903,
        'shortInterest': 55544287,
        'shortDate': '2017-06-15',
        'dividendRate': 2.52,
        'dividendYield': 1.7280395,
        'exDividendDate': '2017-05-11 00:00:00.0',
        'latestEPS': 8.29,
        'latestEPSDate': '2016-09-30',
        'sharesOutstanding': 5213840000,
        'float': 5203997571,
        'returnOnEquity': 0.08772939519857577,
        'consensusEPS': 3.22,
        'numberOfEstimates': 15,
        'symbol': 'AAPL',
        'EBITDA': 73828000000,
        'revenue': 220457000000,
        'grossProfit': 84686000000,
        'cash': 256464000000,
        'debt': 358038000000,
        'ttmEPS': 8.55,
        'revenuePerShare': 42.2830389885382,
        'revenuePerEmployee': 1900491.3793103448,
        'peRatioHigh': 25.5,
        'peRatioLow': 8.7,
        'EPSSurpriseDollar': null,
        'EPSSurprisePercent': 3.9604,
        'returnOnAssets': 14.15,
        'returnOnCapital': null,
        'profitMargin': 20.73,
        'priceToSales': 3.6668503,
        'priceToBook': 6.19,
        'day200MovingAvg': 140.60541,
        'day50MovingAvg': 156.49678,
        'institutionPercent': 32.1,
        'insiderPercent': null,
        'shortRatio': 1.6915414,
        'year5ChangePercent': 0.5902546932200027,
        'year2ChangePercent': 0.3777449874142869,
        'year1ChangePercent': 0.39751716851558366,
        'ytdChangePercent': 0.36659492036160124,
        'month6ChangePercent': 0.12208398133748043,
        'month3ChangePercent': 0.08466584665846649,
        'month1ChangePercent': 0.009668596145283263,
        'day5ChangePercent': -0.005762605699968781
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
