
<template>
  <div class="weui-cell">
    <div class="weui-cell__hd">
      <label class="weui-label">{{NEWS_DETAIL.title}}</label>
    </div>
    <div class="weui-cell__bd">{{NEWS_DETAIL.author}}</div>
    <div class="weui-cell__ft">{{NEWS_DETAIL.time}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { NEWS_DETAIL } from "../store";
export default {
  computed: mapGetters([NEWS_DETAIL])
};
</script>
