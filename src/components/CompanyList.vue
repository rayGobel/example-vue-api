<template>
  <div class="company-list card">
    <div class="card-body">
      <h2>Company Lists</h2>
      <table class="table table-sm table-striped">
        <thead>
          <tr>
            <th scope="col" class="w-25">Symbol</th>
            <th scope="col" class="w-25">Date</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(company, index) in filteredCompanyList" :key="index">
            <td scope="row">
              <router-link :to="`/company/${company.symbol}`">
                {{ company.symbol }}
              </router-link>
            </td>
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
const IEXService = require('./../api/iextrading')

export default {
  data () {
    return {
      displayedCompany: 'A',
      companyList: []
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
  mounted () {
    IEXService.getCompanyList()
      .then(company => {
        this.companyList = company
      })
  },
  methods: {
    paginationClicked (event) {
      let pagination = event.target.dataset.pagination
      this.displayedCompany = pagination
    }
  }
}
</script>
