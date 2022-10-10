import { defineStore } from "pinia";
import { PokerApi } from "@/../client/src/api/generated/api";
import { Configuration } from "@/../client/src/api/generated/configuration";
import { cardImageMapperIf } from "@/services/cardImageMapper";

type card = {
  value: string;
  suit: string;
  rank: number;
  label: string;
};

const config = new Configuration({
  basePath: "https://au5s9jy5d8.execute-api.ap-northeast-1.amazonaws.com/dev",
});
const pokerApi = new PokerApi(config);

export const useDrawCard = defineStore("drawCard", {
  state: () => ({
    hand: ["", "", "", "", ""] as (keyof cardImageMapperIf | string)[],
    judgeResult: "",
  }),
  actions: {
    async draw() {
      const response = await pokerApi.pokerControllerDraw();
      const cards = response.data.hand as card[];
      this.hand = cards.map((card) => card.value);
    },
  },
  getters: {
    handString: (state) => {
      return state.hand.join(" ");
    },
  },
});
