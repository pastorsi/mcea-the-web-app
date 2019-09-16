<template>
  <span>
    <v-content>
      <affiliate-info></affiliate-info>
      <affiliate-cards></affiliate-cards>
    </v-content>
  </span>
</template>

<script>
import AffiliateInfo from "@/components/AffiliateInfo";
import AffiliateCards from "@/components/AffiliateCards";
export default {
  name: "Affiliates",
  components: {
    AffiliateInfo,
    AffiliateCards
  }
};
</script>

<style scoped></style>
