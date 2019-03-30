# very-simple-pagination-Vue

## Description

it is an easy pagination  to implement and to use. just by passing a total of pages, items per page, color(default '#2c3e50') and current active page (default 1). when the user click some page, the component renders itself and send an event to parent component with the clicked page, so the parent should look for content from an API, server, array ....;
  

### Instalation
```
npm i very-simple-pagination-vue --save
```

### How to use
```javascript
<template>
  <Pagination v-bind:activePage="currentPage" v-bind:total="total" v-bind:perPage="perPage" v-bind:color="'#f00'"/>
</template>

<script>
import Components  from 'v-simple-pagination';

export default {
  name: 'app',
  components: {
    Components
  },
   data() {
    return {
      currentPage: 6,
      total: 101,
      perPage: 10
    };
  }
}
</script>
```
#### when a page is clicked

The component send an pageChanged event to his parent with the page number.

```javascript
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
     // request the content page
    }
  }
}
</script>
```


