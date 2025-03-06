<template>

  <div class="">  
    <h1>💀 Ejemplo de Fetch con Vue 3 💀</h1>
    <h2>Usando composable y todo eso 👽</h2>
    <ExPostList/>
  </div>

</template>

<script lang="ts" setup>

  import ExPostList from './components/ExPostList.vue';

</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #000000;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  background-color: #171616;
}

</style>

<style scoped>

  h1, li, label {
    color: red;
    text-align: center;
  }

  h2 {
    color: tomato;
    text-align: center;
  }

</style>
