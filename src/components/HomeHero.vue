<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">
        <span class="my-main-title">Mid Cotswold</span>
      </div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">
        <span class="my-main-title">Evangelical Alliance</span>
      </div>
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
