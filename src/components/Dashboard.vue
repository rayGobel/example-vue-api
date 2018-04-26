<template>
  <div class="dashboard-component card">
    <div class="card-body">
      <h2>This is Dashboard component</h2>

      <!-- list of company will goes here -->
      <div class="row">
        <div class="col-sm">
          <!-- most active company -->
          <company-list title="Most Active Company" :listOfCompany="mostActiveCompany" />
        </div>
        <div class="col-sm">
          <company-list title="Gainers Company" :listOfCompany="gainersCompany" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyList from './dashboard/OverviewCompanyTemplate'

export default {
  components: {
    CompanyList
  },
  data () {
    return {
      mostActiveCompany: [
        { symbol: 'TIME', companyName: 'Time Inc.' },
        { symbol: 'MARA', companyName: 'Marathon Patent Group Inc.' },
        { symbol: 'DPW', companyName: 'DPW Holdings Inc.' },
        { symbol: 'SQ', companyName: 'Square Inc. Class A' }
      ],
      gainersCompany: [
        { symbol: 'TEUM', companyName: 'Parateum Corporation' },
        { symbol: 'NXTD', companyName: 'NXT-ID Inc.' },
        { symbol: 'CPRX', companyName: 'Catalyst Pharmaceuticals Inc.' },
        { symbol: 'EARS', companyName: 'Auris Medical Holding AG' }
      ]
    }
  }
}
</script>
