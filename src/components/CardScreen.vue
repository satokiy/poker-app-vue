<template>
  <v-col cols="2" v-for="(card, index) in cards" :key="index">
    <span v-if="card == null">
      <v-img max-height="150" max-width="150" :src="cardBack" alt=""> </v-img>
    </span>
    <span v-else>
      <v-img max-height="150" max-width="150" :src="card" alt=""> </v-img>
    </span>
  </v-col>

  <v-row>
    <v-col>
      <div class="Card">
        <div class="Card__Back">
          <v-img max-height="150" max-width="150" :src="rollCardBack"></v-img>
        </div>
        <div class="Card__Front">
          <v-img max-height="150" max-width="150" :src="rollCardFront"></v-img>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardScreen",
  setup() {
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
      cardBack,
      cards,
      rollCardFront,
      rollCardBack,
    };
  },
});
</script>

<style lang="scss">
.Card {
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
