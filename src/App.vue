<template>
  <Pager v-on:pageChanged="doSomething" v-bind:activePage="currentPage" v-bind:total="total" v-bind:perPage="perPage" v-bind:color="'#f00'"/>
</template>

<script>
import Pager from './components/pagination.vue'

export default {
  name: 'app',
  components: {
    Pager
  },
   data() {
    return {
      currentPage: 6,
      total: 101,
      perPage: 10
    };
  },
  methods: {
    doSomething: function(page) {
      console.log(page);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
