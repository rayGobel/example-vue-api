<template>
  <div class="most-active-company card">
    <div class="card-header">
      <p>Most Active Company</p>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
            v-for="company in mostActiveCompany"
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
      mostActiveCompany: [
        { symbol: 'TIME', companyName: 'Time Inc.' },
        { symbol: 'MARA', companyName: 'Marathon Patent Group Inc.' },
        { symbol: 'DPW', companyName: 'DPW Holdings Inc.' },
        { symbol: 'SQ', companyName: 'Square Inc. Class A' }
      ]
    }
  }
}
</script>
