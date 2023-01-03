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
        <v-col cols="12"> </v-col>
      </v-row>
      <v-row justify="center" class="CardInput__Button">
        <v-col cols="6">
          <v-btn @click="draw" color="orange lighten-4" block>draw</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn @click="judge" color="orange lighten-4" block>judge</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-btn @click="reset" color="white lighten-4" block>reset</v-btn>
        </v-col>
      </v-row>
      <v-row v-show="isIframe" justify="center">
        <v-col cols="6">
          <v-btn @click="close" color="white lighten-4" block>finish</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import { useDrawCard } from "@/stores/drawCard";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const drawCards = useDrawCard();
    const { handString } = storeToRefs(drawCards);

    const draw = () => drawCards.draw();
    const judge = () => drawCards.judge();
    const reset = () => {
      drawCards.hand = ["", "", "", "", ""];
      drawCards.judgeResult = "";
    };

    let isIframe = false;
    if (window.parent !== window) isIframe = true;

    const close = () => {
      if (window.parent !== window) {
        const message = JSON.stringify({
          message: "CANCEL_MODAL",
        });
        window.parent.postMessage(message, "*");
      }
    };

    return {
      drawCards,
      handString,
      draw,
      judge,
      reset,
      isIframe,
      close,
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
