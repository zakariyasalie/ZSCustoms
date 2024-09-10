<template>
  <router-view/>
  <FooterComp/>
  <NavBar/>
</template>
<script>
  import NavBar from './components/NavbarComp.vue';
  import FooterComp from './components/FooterComp.vue';
  import SpinnerComp from './components/SpinnerComp1.vue';
  import CardComp from './components/CardComp.vue';
export default {
  components: {
    NavBar,
    FooterComp,
    SpinnerComp,
    CardComp,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>






