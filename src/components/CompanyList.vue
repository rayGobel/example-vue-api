<template>
  <div class="company-list card">
    <div class="card-body">
      <h2>Company Lists</h2>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(company, index) in filteredCompanyList" :key="index">
            <td scope="row">{{ company.symbol }}</td>
            <td>{{ company.date }}</td>
            <td>{{ company.name }}</td>
          </tr>
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul class="pagination" v-on:click="paginationClicked">
          <li v-for="symbol in alphabeticalOrder"
              :key="symbol"
              class="page-item">
            <a class="page-link" href="#" :data-pagination="symbol">{{ symbol }}</a>
          </li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayedCompany: 'A',
      companyList: [
        {
          'symbol': 'A',
          'name': 'AGILENT TECHNOLOGIES INC',
          'date': '2017-04-19',
          'isEnabled': true
        },
        {
          'symbol': 'AA',
          'name': 'ALCOA CORP',
          'date': '2017-04-19',
          'isEnabled': true
        },
        {
          'symbol': 'BAC-Y',
          'name': 'Bank of America Corporation Depositary Shares Series Y',
          'date': '2018-04-25',
          'isEnabled': true
        },
        {
          'symbol': 'BAF',
          'name': 'BlackRock Municipal Income Investment Quality Trust',
          'date': '2018-04-25',
          'isEnabled': true
        },
        {
          'symbol': 'BAH',
          'name': 'Booz Allen Hamilton Holding Corporation',
          'date': '2018-04-25',
          'isEnabled': true
        },
        {
          'symbol': 'MMYT',
          'name': 'MakeMyTrip Limited',
          'date': '2018-04-25',
          'isEnabled': true
        },
        {
          'symbol': 'MN',
          'name': 'Manning & Napier Inc. Class A',
          'date': '2018-04-25',
          'isEnabled': true
        }
      ]
    }
  },
  computed: {
    alphabeticalOrder () {
      return this.companyList.reduce((result, company) => {
        // First character of a company symbol
        let firstChar = company.symbol.slice(0, 1)
        // Check if first character available in accumulator
        if (result.some((alphabet) => alphabet === firstChar)) {
          return result
        } else {
          return result.concat([firstChar])
        }
      }, [])
    },
    filteredCompanyList () {
      return this.companyList.filter((company) => company.symbol.slice(0, 1) === this.displayedCompany)
    }
  },
  methods: {
    paginationClicked (event) {
      let pagination = event.target.dataset.pagination
      this.displayedCompany = pagination
    }
  }
}
</script>
