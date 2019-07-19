<template>
  <span>
    <v-content>
      <home-details></home-details>
    </v-content>
  </span>
</template>

<script>
import HomeDetails from "@/components/HomeDetails";
export default {
  name: "about",
  components: {
    HomeDetails
  }
};
</script>

<style scoped></style>
