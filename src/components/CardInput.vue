<template>
  <div class="CardInput">
    <v-form>
      <v-text-field class="input" v-model="drawCards.hand" outlined disabled>
      </v-text-field>
      <v-row class="CardInput__Result">
        <v-col cols="12">
          {{ drawCards.judgeResult }}
        </v-col>
      </v-row>
      <v-row justify="center" class="CardInput__Button">
        <v-col cols="6">
          <v-btn @click="draw" color="orange lighten-4" block
            >card draw!!</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn @click="check" color="orange lighten-4" block>check!!</v-btn>
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
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const drawCards = useDrawCard();
    const draw = () => drawCards.draw();

    const check = () => {
      if (JSON.stringify(drawCards.hand) === JSON.stringify(["D1", "D1", "D1", "D4", "D5"])) {
        drawCards.judgeResult = "straight flash";
      }
    };

    const reset = () => {
      drawCards.hand = [];
      drawCards.judgeResult = ''
    }

    return {
      drawCards,
      draw,
      check,
      reset,
    };
  },
});
</script>

<style lang="scss">
.CardInput {
  border: 1px solid blue;
  &__error-msg {
    color: red;
  }
  &__Button {
    margin-bottom: 16px;
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
