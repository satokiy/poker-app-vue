<template>
  <div class="CardScreen">
    <v-row justify="center" min-height="150px" dense>
      <v-card
        v-for="card in drawCards.hand"
        :key="card"
        width="16%"
        min-height="130"
        max-width="150"
        elevation="0"
      >
        <div v-if="card === ''">
          <v-img :src="back"> </v-img>
        </div>
        <div v-else>
          <v-img :src="cardImageMapper[card]"> </v-img>
        </div>
      </v-card>
    </v-row>
  </div>
</template>
<script lang="ts">
import { useDrawCard } from "@/stores/drawCard";
import { defineComponent } from "vue";
import { cardImageMapper } from "@/services/cardImageMapper";
export default defineComponent({
  name: "CardScreen",
  setup() {
    const drawCards = useDrawCard();
    const back = cardImageMapper['back'];
    
    return {
      drawCards,
      cardImageMapper,
      back,
    };
  },
});
</script>

<style lang="scss">
.CardScreen {
  width: 60%;
  min-height: 300px;
  padding-top: 32px;
  // border: 1px red solid;
}
.v-card {
  margin: 8px;
  min-width: 64px;
}
.Card {
  min-height: 150px;
  width: 30%; /* 任意の横幅を指定 */
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    padding-top: 142.5%;
  }
  &__Back {
    transition: all 0.6s;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    &:hover {
      transform: rotateY(180deg);
    }
  }
  &__Front {
    transition: all 0.6s;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    &:hover {
      transform: rotateY(0);
    }
  }
}
</style>
