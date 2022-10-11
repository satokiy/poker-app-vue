import { defineStore } from "pinia";
import {
  PokerApi,
  PokerJudgeRequestDto,
} from "@/../client/src/api/generated/api";
import { Configuration } from "@/../client/src/api/generated/configuration";
import { cardImageMapperIf } from "@/services/cardImageMapper";

type card = {
  value: string;
  suit: string;
  rank: number;
  label: string;
};

const config = new Configuration({
  basePath: process.env.VUE_APP_API_URL,
});
const pokerApi = new PokerApi(config);

export const useDrawCard = defineStore("drawCard", {
  state: () => ({
    hand: ["", "", "", "", ""] as (keyof cardImageMapperIf | string)[],
    judgeResult: "",
  }),
  actions: {
    async draw() {
      this.judgeResult = "";
      const response = await pokerApi.pokerControllerDraw();
      const cards = response.data.hand as card[];
      this.hand = cards.map((card) => card.value);
    },
    async judge() {
      const response = await pokerApi.pokerControllerJudgeRole({
        hand: this.hand,
      });
      this.judgeResult = response.data.role;
    },
  },
  getters: {
    handString: (state) => {
      return state.hand.join(" ");
    },
  },
});
