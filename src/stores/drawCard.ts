import { defineStore } from "pinia";

export const useDrawCard = defineStore("drawCard", {
  state: () => ({
    hand: [],
  }),
});
