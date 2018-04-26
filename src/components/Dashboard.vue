<template>
  <div class="dashboard-component card">
    <div class="card-body">
      <h2>This is Dashboard component</h2>

      <!-- list of company will goes here -->
      <div class="row">
        <div class="col-sm">
          <!-- most active company -->
          <company-list title="Most Active Company"
                        v-on:loadMoreClicked="loadMostActiveCompany"
                        :listOfCompany="mostActiveCompany" />
        </div>
        <div class="col-sm">
          <company-list title="Gainers Company"
                        v-on:loadMoreClicked="loadGainersCompany"
                        :listOfCompany="gainersCompany" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IEXService from './../api/iextrading'
import CompanyList from './dashboard/OverviewCompanyTemplate'

export default {
  components: {
    CompanyList
  },
  data () {
    return {
      mostActiveCompany: [],
      gainersCompany: []
    }
  },
  mounted () {
    this.loadMostActiveCompany()
    this.loadGainersCompany()
  },
  methods: {
    loadMostActiveCompany () {
      IEXService.getMostActiveCompany()
        .then(company => {
          this.mostActiveCompany = company
        })
        .catch(err => {
          console.log('An error has happened when: loadMostActiveCompany()')
          console.log(err)
        })
    },
    loadGainersCompany () {
      IEXService.getGainersCompany()
        .then(company => {
          this.gainersCompany = company
        })
        .catch(err => {
          console.log('An error has happened when: loadGainersCompany()')
          console.log(err)
        })
    }
  }
}
</script>
