<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="cyan darken-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <router-link :to="{ path: item.route }">
                {{ item.title }}
              </router-link>
            </v-list-tile-content>
            <v-divider :key="'divider-${index}'"></v-divider>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="cyan darken-1" dark>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title
        class="font-weight-bold orange--text text--accent-1 acro"
      >
        {{ appTitle }}
      </v-toolbar-title>
      <v-btn flat to="/" class="hidden-sm-and-down">Home</v-btn>
      <v-btn flat to="/about" class="hidden-sm-and-down">About</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down">Sign in</v-btn>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down">Join</v-btn>
    </v-toolbar>
  </span>
</template>
<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "MCEA",
      drawer: false,
      items: [
        { title: "Home", route: "/" },
        { title: "Sign In" },
        { title: "Join" }
      ]
    };
  }
};
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
