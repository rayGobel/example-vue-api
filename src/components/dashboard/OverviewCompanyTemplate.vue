<template>
  <div class="overview-company card">
    <div class="card-body">
      <h5>{{ title | uppercase }}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
            v-for="company in listOfCompany"
            :key="company.symbol">
          <div class="row">
            <div class="col-sm">
              <h3>
              <router-link :to="`/company/${company.symbol}`">
                {{ company.symbol }}
              </router-link>
              </h3>
              <p><small>{{ company.companyName }}</small></p>
            </div>
            <div class="col-sm">
              <h3>{{ company.latestPrice }}</h3>
              <p class="muted" v-bind:class="{ 'positive': company.change > 0, 'negative': company.change <= 0 }">
              {{ company.change }} ( {{ (company.change * 100) | shorten }}% )
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div style="margin-top: 2em"></div>
      <a href="#"
         v-on:click.prevent="$emit('loadMoreClicked')"
         class="btn btn-primary btn-sm"
         role="button" aria-pressed="true">Load More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'listOfCompany',
    'title'
  ],
  filters: {
    uppercase (text) {
      if (!text) {
        return ''
      }
      return text.toUpperCase()
    },
    shorten (number) {
      return number.toFixed(2)
    }
  }
}
</script>

<style>
.positive {
  color: green
}

.negative {
  color: red
}
</style>
