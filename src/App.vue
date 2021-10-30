<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="about">Nosotros</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/sass/apycbootstrap.scss";
@import "bootstrap/scss/bootstrap.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: $primary;
  a {
    text-decoration: none;
    &.router-link-exact-active {
      color: $primary;
      font-weight: bold;
    }
  }
}
</style>
