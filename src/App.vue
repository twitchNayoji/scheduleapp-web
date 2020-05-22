<template>
  <b-container class="appdefault">
    <router-view />
  </b-container>
</template>

<script>
export default {
  mounted() {
    document.body.className = "default";
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body.default{
  background-color: black;
}
div {
  background-color: rgb(26, 26, 26);
  color: rgb(221, 223, 215);
}
</style>
