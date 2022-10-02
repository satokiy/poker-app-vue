<template>
  <!-- <hello-world /> -->
  <header-info />
  <v-container>
    <v-main>
      <router-view />
      <v-row justify="center">
        <h1>check a poker hand</h1>
      </v-row>
      <v-row justify="center" class="input">
        <v-col cols="6">
          <card-input></card-input>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3">
          <v-btn
          @click="check"
          color="cyan lighten-4"
          block>check!!</v-btn>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
  <footer-info></footer-info>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderInfo from "../composables/HeaderInfo.vue";
import FooterInfo from "../composables/FooterInfo.vue";
import CardInput from "../components/CardInput.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderInfo,
    FooterInfo,
    CardInput,
  },
  setup() {
    const check = () => {
      console.log("check");
    };
    return {
      check,
    };
  },

});
</script>

<style lang="scss">
h1 {
  border: 1px solid red;
  margin: 20px;
  padding: 5px;
}
</style>
