<template class="CardInput">
  <v-form>
    <v-text-field
      class="input"
      v-model="state.hand"
      outlined
      disabled
    >
    </v-text-field>
    <!-- <div class="error-msg" v-for="error in v$.inputCards.$errors" :key="error.$uid">
      {{ error.$message }}
    </div> -->
    <v-row class="Result">
      <v-col cols="12">
        {{ state.result }}
      </v-col>
    </v-row>
    <v-row justify="center" class="button">
      <v-col cols="6">
        <v-btn @click="draw" color="orange lighten-4" block>card draw!!</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn @click="check" color="orange lighten-4" block>check!!</v-btn>
      </v-col>
    </v-row>
    
  </v-form>
</template>

<script lang="ts">
import { reactive } from "@vue/reactivity";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      hand: '',
      result: '',
    });

    const draw = () => {
      const cardsPattern = [
        ["H1", "H2", "H3", "H4", "H5"],
        ["D1", "D1", "D1", "D4", "D5"],
        ["S1", "S2", "D3", "C4", "H5"],
      ];
      var rand = Math.floor(Math.random() * cardsPattern.length);
      state.hand = cardsPattern[rand].join(" ");
      state.result = '';
      console.log(state.hand);
    };

    const check = () => {
      if (state.hand === 'D1 D1 D1 D4 D5') {
        state.result = 'straight flash'
      }

    };

    return {
      state,
      draw,
      check,
    };
  },
});
</script>

<style lang="scss">
.v-input input {
  text-align: center;
  font-size: 24px;
}
.v-label.v-field-label {
  text-align: center;
}
.Result {
  text-align: center;
}
.CardInput {
  &__error-msg {
    color: red;
  }
}
</style>
