<template>
  <div class="dashboard-component card">
    <div class="card-body">
      <h2>This is Dashboard component</h2>

      <!-- list of company will goes here -->
      <div class="row">
        <div class="col-sm">
          <most-active-company />
        </div>
        <div class="col-sm">
          <gainers-company />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MostActiveCompany from './dashboard/MostActiveCompany'
import GainersCompany from './dashboard/GainersCompany'

export default {
  components: {
    MostActiveCompany,
    GainersCompany
  }
}
</script>
