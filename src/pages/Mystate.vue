<template>
  <div>{{INFO_TEXT}}</div>
</template>
<script>
import { mapGetters } from "vuex";
import { INFO_TEXT } from "../store";
export default {
  name:'MyState',
   computed: mapGetters([INFO_TEXT]),
}
</script>
