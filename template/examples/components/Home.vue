<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <hello></hello>
  </div>
</template>

<script>
export default {
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
