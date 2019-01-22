<template>
  <router-link :to="`/detail/${id}`" class="weui-cell weui-cell_access">
    <div class="weui-cell__bd">{{data.title}}</div>
    <div class="weui-cell__ft">
      <div>{{data.author}}</div>
      <div>{{data.time}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Item",
  props: ["data", "id"]
};
</script>
