<template>
  <span>
    <v-content>
      <home-hero></home-hero>
      <home-details></home-details>
    </v-content>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeDetails from "@/components/HomeDetails";
export default {
  name: "home",
  components: {
    HomeHero,
    HomeDetails
  }
};
</script>

<style scoped></style>
