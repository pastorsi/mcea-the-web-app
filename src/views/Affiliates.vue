<template>
  <span>
    <v-content>
      <v-container grid-list-lg>
        <affiliate-info></affiliate-info>
        <v-layout>
          <v-flex>
            <affiliate-cards></affiliate-cards>
          </v-flex>
        </v-layout>
      </v-container>
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
