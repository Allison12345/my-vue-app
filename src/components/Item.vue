<template>
  <router-link to=''>
    <div class="news-item">
      <div class="news-item__title">{{data.title}}</div>
      <div class="news-item__info">
        <div>{{data.author}}</div>
        <div>{{data.time}}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Item",
  props: ["data"],
};
</script>
<style>
.news-item {
  border-bottom: 1px #999 solid;
  padding: 5px;
}
.news-item__title {
  font-size: 20px;
  font-weight: bold;
}
.news-item__info {
  color: #666;
  display: flex;
  justify-content: space-between;
}
</style>
