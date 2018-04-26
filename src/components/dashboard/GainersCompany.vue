<template>
  <div class="gainers-company card">
    <div class="card-body">
      <h5>Gainers Company</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
            v-for="company in gainersCompany"
            :key="company.symbol">
          <p class="lead">{{ company.symbol }}</p>
          <p><small>{{ company.companyName }}</small></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
