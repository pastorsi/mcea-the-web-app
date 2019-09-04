<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-slide-y-reverse-transition>
      <router-view></router-view>
    </v-slide-y-reverse-transition>
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
.home-hero,
.about-hero,
.my-page-titles,
.my-subtitles,
.my-paragraphs {
  font-family: "Montserrat", Verdana, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.home-hero,
.about-hero {
  font-size: 3em;
}
.my-page-titles {
  font-size: 2em;
}
.my-subtitles {
  font-size: 1.5em;
}
.my-paragraphs {
  font-size: 1em;
}
#app {
  font-family: Verdana, Impact, "Arial Narrow Bold", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
