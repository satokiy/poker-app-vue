<template>
  <div class="CardScreen">
    <v-row justify="center" height="150px" dense>
      <v-card
        v-for="card in drawCards.hand"
        :key="card"
        width="16%"
        min-height="100"
        max-width="150"
      >
        <v-col>
          {{ card }}
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>
<script lang="ts">
import { useDrawCard } from "@/stores/drawCard";
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardScreen",
  setup() {
    const drawCards = useDrawCard();

    const cardBack =
      "https://4.bp.blogspot.com/-A_98ygeh-hs/WRLiKxndvtI/AAAAAAABEKo/qNM7t47lNCw4Sq0hEwJH5xhUaN8lnJf5gCLcB/s800/card_back.png";

    const cards: (string | null)[] = [
      "https://2.bp.blogspot.com/-S-31SRfkS1o/WQBAEtCo1nI/AAAAAAABD98/fzjjCIIibhMkeoKx9NfyTo3i1TjRaONPQCLcB/s800/card_spade_01.png",
      "https://4.bp.blogspot.com/-HUJzhH60Cf0/WQBAFMX2JoI/AAAAAAABD-E/ApHn1B1nwtA6eg1WDh2xWyialgCcPEIRgCLcB/s800/card_spade_02.png",
      null,
      null,
      null,
    ];
    const rollCardFront =
      "https://4.bp.blogspot.com/-HUJzhH60Cf0/WQBAFMX2JoI/AAAAAAABD-E/ApHn1B1nwtA6eg1WDh2xWyialgCcPEIRgCLcB/s800/card_spade_02.png";
    const rollCardBack =
      "https://4.bp.blogspot.com/-A_98ygeh-hs/WRLiKxndvtI/AAAAAAABEKo/qNM7t47lNCw4Sq0hEwJH5xhUaN8lnJf5gCLcB/s800/card_back.png";

    return {
      drawCards,
      cardBack,
      cards,
      rollCardFront,
      rollCardBack,
    };
  },
});
</script>

<style lang="scss">
.CardScreen {
  width: 60%;
  min-height: 200px;
  padding-top: 32px;
  border: 1px red solid;
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
