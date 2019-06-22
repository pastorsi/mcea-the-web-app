<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import AppNavigation from "@/components/AppNavigation";
export default {
  name: "App",
  components: { AppNavigation }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates&display=swap);
.home-hero {
  font-family: "Montserrat", Verdana, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 3em;
}
#app {
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.acro {
  font-family: "Montserrat Alternates", Verdana, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
