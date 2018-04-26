<template>
  <div class="overview-company card">
    <div class="card-body">
      <h5>{{ title | uppercase }}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
            v-for="company in listOfCompany"
            :key="company.symbol">
          <p class="lead">{{ company.symbol }}</p>
          <p><small>{{ company.companyName }}</small></p>
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
    }
  }
}
</script>
