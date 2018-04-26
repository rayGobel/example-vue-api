<template>
  <div class="overview-company card">
    <div class="card-body">
      <h5>{{ title }}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
            v-for="company in listOfCompany"
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
  props: [
    'listOfCompany',
    'title'
  ]
}
</script>
