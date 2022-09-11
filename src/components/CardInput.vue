<template>
  <v-form>
    <v-text-field
      v-model="inputCards"
      label="カードを入力してください"
      outlined
      clearable
      :rules="[required]"
    ></v-text-field>
    {{ inputCards }}
  </v-form>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const inputCards = ref("");
    const required = (value: string) => {
      return !!value || "card is required";
    };

    return {
      inputCards,
      required,
    };
  },
};
</script>

<style></style>
