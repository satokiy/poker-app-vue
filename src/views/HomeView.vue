<template>
  <!-- <hello-world /> -->
  <header-info />
  <v-container>
    <v-main>
      <v-row justify="center" margin-bottom="24px">
        <h1>check a poker hand</h1>
      </v-row>
      <v-row justify="center" align-content="center">
        <card-screen></card-screen>
      </v-row>
      <v-row justify="center" class="input">
        <v-col cols="6">
          <card-input :hand="reactiveHand.hand"></card-input>
        </v-col>
      </v-row>
      <v-row>
        <v-btn @click="check">test</v-btn>
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
import { PokerApi } from "@/../client/src/api/generated/api";
import { Configuration } from "@/../client/src/api/generated/configuration";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderInfo,
    FooterInfo,
    CardInput,
    CardScreen,
  },
  setup() {
    const config = new Configuration({
      basePath: 'https://au5s9jy5d8.execute-api.ap-northeast-1.amazonaws.com/dev',
    });

    const check = async () => {
      const pokerApi = new PokerApi(config);
      const response = await pokerApi.pokerControllerWelcome();
      console.log(response.data);
    };

    const reactiveHand = reactive({
      hand: "",
    });
    const draw = () => {
      // clickイベントによってカードの取得を行いCardScreenに連携する
      const cards = ["H1", "H2", "H3", "H4", "H5"];

      console.log(cards.join(" "));
      reactiveHand.hand = cards.join(" ");
      console.log(reactiveHand.hand);
    };

    return {
      reactiveHand,
      check,
      draw,
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
