<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>News Page</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWord',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App News'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
