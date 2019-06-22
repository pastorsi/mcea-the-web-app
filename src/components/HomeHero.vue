<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <div class="font-weight-black orange--text text--accent-1 text-xs-center">
        Mid Cotswold
      </div>
      <div
        class="font-weight-black orange--text text--accent-1 text-xs-center mb-3"
      >
        Evangelical Alliance
      </div>
      <v-btn fab class="mt-5 cyan darken-1">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped>
.home-hero {
  background: url("https://source.unsplash.com/dGxOgeXAXm8");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
