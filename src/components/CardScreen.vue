<template>
  <div class="CardScreen" v-cloak>
    <v-row class="CardScreen__Card" justify="center" min-height="100px" dense>
      <v-card
        v-for="card in drawCards.hand"
        :key="card"
        width="16%"
        min-height="100"
        max-width="150"
        elevation="0"
      >
        <div v-if="card === ''">
          <v-img :src="back"> </v-img>
        </div>
        <div v-else>
          <v-img :src="cardImage(card as keyof cardImageMapperIf)"> </v-img>
        </div>      
      </v-card>
    </v-row>
    <v-row class="CardScreen__Result" justify="center" dense>
      <span v-if="drawCards.judgeResult !== ''"> 
        {{ drawCards.judgeResult }}
      </span>
    </v-row>
  </div>
</template>
<script lang="ts">
import { useDrawCard } from "@/stores/drawCard";
import { defineComponent } from "vue";
import { cardImageMapper, cardImageMapperIf } from "@/services/cardImageMapper";
export default defineComponent({
  name: "CardScreen",
  setup() {
    const drawCards = useDrawCard();
    const back = cardImageMapper["back"];
    const cardImage = (card: keyof cardImageMapperIf) => {
      return cardImageMapper[card];
    };

    return {
      drawCards,
      cardImageMapper,
      back,
      cardImage,
    };
  },
});
</script>

<style lang="scss">
.CardScreen {
  min-height: 260px;
  padding-top: 32px;
  &__Card {
    margin-bottom: 12px;
  }
  &__Result {
    font-size: 24px;
  }
}
.v-card {
  margin: 4px;
  min-width: 60px;
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
