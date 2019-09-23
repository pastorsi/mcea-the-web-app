<template>
  <div class="affiliate-cards">
    <v-card>
      <v-responsive>
        <v-img v-bind:src="image" height="200px" width="195px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline blue--text">{{ church }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-responsive>
      <v-card-text>
        <div>
          <h3 class="headline mb-0">Details</h3>
          <ul>
            <li>Address: {{ location }}</li>
            <li>Sunday Service: {{ times }}</li>
          </ul>
        </div>
      </v-card-text>
      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AffiliateCards",
  data: function() {
    return {
      church: "Harvest Field Church",
      location: "Lynworth Hall, Mendip Road, Cheltenham. GL52 5ED",
      times: "10.45 am to 12.15 pm",
      image: "https://www.lynworthhall.co.uk/images/sign_logo_hall.png"
    };
  }
};
</script>

<style scoped></style>
