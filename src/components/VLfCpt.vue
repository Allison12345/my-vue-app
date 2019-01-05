<template>
  <div>
    <div v-if="color==='red'">red</div>
    <div v-else>green</div>
  </div>
</template>
<script>
export default {
  name: "v-if",
  data() {
    return {
      color: "red"
    };
  }
};
</script>
