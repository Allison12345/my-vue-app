<template>
  <div>
    <input type="text" :value="INFO_TEXT" @input="onInput">
  </div>
</template>
<script>
import { INFO_TEXT, SAVE_INFO_TEXT } from "../store";
import { mapGetters } from "vuex";
export default {
  name: "MyInput",
  computed: mapGetters([INFO_TEXT]),
  methods: {
    onInput(event) {
      this.$store.commit(SAVE_INFO_TEXT, event.target.value);
    }
  }
};
</script>
