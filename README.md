# very-simple-pagination-Vue

## Description

it is an easy pagination vue components to implement and to use. just by passing a total of pages, items per page,  color(default '#2c3e50') and current active page (default 1).
when the user click some page, it reander the comonent vue then send an event to parent component with  the clicked page, so the parent should look for content from a REST-API, server, array ....;
  

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


