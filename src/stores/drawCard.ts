import { defineStore } from "pinia";

export const useDrawCard = defineStore("drawCard", {
  state: () => ({
    hand: [] as string[],
    judgeResult: "",
  }),
  actions: {
    draw() {
      const cardsPattern = [
        ["H1", "H2", "H3", "H4", "H5"],
        ["D1", "D1", "D1", "D4", "D5"],
        ["S1", "S2", "D3", "C4", "H5"],
      ];
      const rand = Math.floor(Math.random() * cardsPattern.length);
      this.hand = cardsPattern[rand];
      console.log(this.hand);
    },
  },
});
