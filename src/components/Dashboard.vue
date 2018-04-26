<template>
  <div class="dashboard-component card">
    <div class="card-body">
      <h2>This is Dashboard component</h2>

      <!-- list of company will goes here -->
      <most-active-company />
    </div>
  </div>
</template>

<script>
import MostActiveCompany from './dashboard/MostActiveCompany'

export default {
  components: {
    MostActiveCompany
  }
}
</script>
