<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/" >Home </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/company-list" >Company Lists </router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="text">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="container" role="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Dashboard from './components/Dashboard'

export default {
  name: 'App',
  mounted () {
    console.log('This is an app built with bootstrap and vue.js')
  },
  data () {
    return {
      title: 'TradingInfo App'
    }
  },
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
body {
  margin-top: 4em;
  min-height: 100vh;
}
</style>
