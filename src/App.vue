<template>
  <v-app>
    <v-main>
      <div class="App">
      <router-view/>
    </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {

    }
  }
})
</script>
<style lang="scss">
</style>