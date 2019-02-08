<template>
  <a href="javascript:;" @click="onClick" class="weui-cell weui-cell_access">
    <div class="weui-cell__bd">{{data.title}}</div>
    <div class="weui-cell__ft">
      <div>{{data.author}}</div>
      <div>{{data.time}}</div>
    </div>
  </a>
</template>

<script>
import { mapGetters } from "vuex";
import { NEWS_LIST, SAVE_NEWS_DETAIL } from "../store";
export default {
  name: "Item",
  props: ["data", "index"],
  computed: mapGetters([NEWS_LIST]),
  methods: {
    onClick() {
      const detail = this[NEWS_LIST][this.index];
      this.$store.commit(SAVE_NEWS_DETAIL, detail);
      this.$router.push("detail");
    }
  }
};
</script>
