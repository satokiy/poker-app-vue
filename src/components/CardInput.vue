<template>
  <v-form>
    <v-text-field
      class="input"
      v-model="$props.hand"
      label="カードを入力してください"
      
      outlined
      clearable
      @input="v$.inputCards.$touch()"
      @blur="v$.inputCards.$touch()"
    >
  </v-text-field>
    <!-- <div class="error-msg" v-for="error in v$.inputCards.$errors" :key="error.$uid">
      {{ error.$message }}
    </div> -->
    <ul>
      <li v-for="(card,index) in hand" :key=index>
        {{ card }}
      </li>
    </ul>
    <span> {{ getHand() }}</span>
    
    <!-- {{ inputCards }} -->
    
  </v-form>
  <v-btn @click="validate()">validate</v-btn>
</template>

<script lang="ts">
import { reactive, toRefs } from "@vue/reactivity";
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    hand: {
      type: String
    },
  },
  setup(props) {
  
    const state = reactive({ hand : props.hand });
    const getHand = () => {
      return props.hand;
    }

    const rules = {
      hand: { required, minLength: minLength(4) },
    }

    const v$ = useVuelidate(rules, state);

    
    const errors:string[] = [];
    const validate = async () => {
      await v$.value.$validate()
      
      console.log(v$)
      
      //errorMessages.push()
    }
    
    const errorMessages = () => {
      
      // if (v$.inputCards.$dirty) return errors

    };
    return {
      getHand,
      required,
      validate,
      v$,
      errorMessages,
    };
  },
});
</script>

<style>
  .error-msg {
    color: red;
  }
  .input input {
    text-align: center
  }
  .input .v-label {
    text-align: center
  }
</style>
