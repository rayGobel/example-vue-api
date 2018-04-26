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
          <tr v-for="(company, index) in companyList" :key="index">
            <td scope="row">{{ company.symbol }}</td>
            <td>{{ company.date }}</td>
            <td>{{ company.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
        }
      ]
    }
  }
}
</script>
