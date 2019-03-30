import Vue from "vue";
import Pagination from "./pagination.vue";


/*
Object.keys(Components).forEach(name=>{
  Vue.component(name, Components[name]);
});*/

Vue.component('simple-pagination', Pagination);
export default Pagination;



