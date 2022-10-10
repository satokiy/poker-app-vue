<template>
  <div class="CardInput">
    <v-form>
      <v-row>
        <v-col cols="12">
        <v-text-field class="input" v-model="handString" outlined disabled>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row class="CardInput__Result">
        <v-col cols="12">
          {{ drawCards.judgeResult }}
        </v-col>
      </v-row>
      <v-row justify="center" class="CardInput__Button">
        <v-col cols="6">
          <v-btn @click="draw" color="orange lighten-4" block>draw</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn @click="check" color="orange lighten-4" block>play</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-btn @click="reset" color="white lighten-4" block>reset</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import { useDrawCard } from "@/stores/drawCard";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { PokerApi } from "@/../client/src/api/generated/api";
import { Configuration } from "@/../client/src/api/generated/configuration";

export default defineComponent({
  setup() {
    const drawCards = useDrawCard();
    const { handString } = storeToRefs(drawCards);

    const draw = () => drawCards.draw();
    const config = new Configuration({
      basePath:
        process.env.VUE_APP_API_URL,
    });
    const pokerApi = new PokerApi(config);

    const check = async () => {
      const response = await pokerApi.pokerControllerWelcome();
      console.log(process.env);
      return response.data;
    };

    const reset = () => {
      drawCards.hand = ["", "", "", "", ""];
      drawCards.judgeResult = "";
    };

    return {
      drawCards,
      handString,
      draw,
      check,
      reset,
    };
  },
});
</script>

<style lang="scss">
.CardInput {
  // border: 1px solid blue;
  &__error-msg {
    color: red;
  }
  &__Button {
    margin-bottom: 16px;
  }
  .v-btn {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .v-input input {
    text-align: center;
    font-size: 24px;
  }
  .v-label.v-field-label {
    text-align: center;
  }
  &__Result {
    text-align: center;
  }
}
</style>
