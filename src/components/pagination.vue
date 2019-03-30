<template>
  <div class="pager" v-bind:class="pagerClass" v-bind:style="{color:Color}">
    <span v-if="Pages.first !== Pages.current" class="label" v-on:click="setCurrent(Pages.current - 1)"> &#60; </span>
    <span v-if="Pages.first < Pages.from" class="label" v-on:click="setCurrent(Pages.first)">{{Pages.first}}</span>
    <span v-if="Pages.first < Pages.from" class="dots" v-on:click="setCurrent('first-half')">...</span>
    <span
      v-for="page in Pages.pages"
      v-bind:key="page.value"
      v-on:click="setCurrent(page.value)"
      v-bind:class="{active:page.isActive}"
    >{{page.value}}</span>
    <span v-if="Pages.last > Pages.to" class="dots" v-on:click="setCurrent('last-half')">...</span>
    <span v-if="Pages.last > Pages.to" class="label" v-on:click="setCurrent(Pages.last)">{{Pages.last}}</span>
    <span v-if="Pages.last !== Pages.current" class="label" v-on:click="setCurrent(Pages.current + 1)"> > </span>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["activePage", "total", "perPage", "color"],
  data() {
    return {
      first: 1,
      current:1,
    };
  },
  computed: {
    pagerClass() {
      return {
        normal: this.Pages.to === this.Pages.last && this.Pages.from === this.Pages.first,
        middel: this.Pages.to <   this.Pages.last && this.Pages.from >   this.Pages.first,
        first:  this.Pages.to <   this.Pages.last && this.Pages.from === this.Pages.first,
        last:   this.Pages.to === this.Pages.last && this.Pages.from >   this.Pages.first
      };
    },
    Color(){
      return this.color || '#2c3e50';
    },
    Last(){
      return Math.ceil(this.total / this.perPage);
    },
     Pages() {
      const pages = [];
      const last = this.Last;
      let from = this.current - 3 < 1 ? 1 : this.current - 3;
          from = (from - 1) === this.first? this.first:from;
      let to = this.current + 3 >= last ? last : this.current + 3;
          to = to + 1 === last ? last: to;
      for (let index = from; index <= to; index++) {
        pages.push({
          value: index,
          isActive: this.current === index
        });
      }
      return {
      pages,
      last,
      first:this.first,
      from,
      to,
      current:this.current
    }
    
    }
  },
  mounted() {
    this.current = this.activePage || 1;
  },
  methods: {
     setCurrent(value){
     if(!isNaN(value)){ this.current = value;}
     if(value === 'first-half') {
       this.current =this.Pages.first + Math.ceil((this.Pages.from - this.Pages.first) / 2); 
     }
     if(value === 'last-half'){
        this.current +=Math.ceil((this.Pages.last - this.Pages.to) / 2); 
     }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.pager {
  display: grid;
  grid-gap: 7.5px;
  width: 100%;
  -ms-flex-line-pack: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 21px);
}
.pager.normal {
  grid-template-columns: repeat(auto-fit, 21px);
}
.pager.first {
  grid-template-columns: repeat(auto-fit, 21px) ;
}
.pager.last {
  grid-template-columns: repeat(auto-fit, 21px);
}
.pager.middel {
  grid-template-columns: repeat(auto-fit, 21px);
}
.pager span {
  display: flex;
  width: 21px;
  height: 21px;
  border: 1px solid ;
  cursor: pointer;
  align-items: center;
  justify-content: center;
    transition: transform 0.3s linear;
}
.pager span:hover{
  transform: scale(0.9);
} 
.pager span.active{
  border:none;
  font-weight: bold;
}
.pager span.label {
  font-weight: bold
}
.pager span.dots {
  border: none;
  cursor: inherit;
}
</style>
