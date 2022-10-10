<template>
  <!-- <hello-world /> -->
  <header-info />
  <v-container>
    <v-main>
      <v-row justify="center" margin-bottom="24px">
        <h1>Play Poker</h1>
      </v-row>
      <v-row justify="center" align-content="center">
        <card-screen></card-screen>
      </v-row>
      <v-row justify="center" class="input">
        <v-col cols="6">
          <card-input :hand="reactiveHand.hand"></card-input>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
  <footer-info></footer-info>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import HeaderInfo from "../composables/HeaderInfo.vue";
import FooterInfo from "../composables/FooterInfo.vue";
import CardInput from "../components/CardInput.vue";
import CardScreen from "../components/CardScreen.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderInfo,
    FooterInfo,
    CardInput,
    CardScreen,
  },
  setup() {

    const reactiveHand = reactive({
      hand: "",
    });

    return {
      reactiveHand,
    };
  },
});
</script>

<style lang="scss">
h1 {
  // border: 1px solid red;
  margin: 20px;
  padding: 5px;
}
</style>
