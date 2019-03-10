<template>
  <canvas ref="list" @touchstart="onTouchStart" @touchmove="onTouchMove"></canvas>
</template>
<script>
export default {
  name: "paint",
  data() {
    return {
      startX: 0,
      startY: 0
    };
  },
  methods: {
    onTouchStart() {
      var canvas = this.$refs.list;
      var c = canvas.getContext("2d");
      c.strokeStyle = "#f00";
      c.beginPath();
      this.startX = event.changedTouches[0].clientx;
      this.startY = event.changedTouches[0].clientY;
      c.moveTo(this.startX, this.startY);
    },
    onTouchMove() {}
  }
};
</script>
<style>
body {
  width: "100%";
  height: "100%";
}
.list {
  width: "100%";
  height: "100%";
}
</style>
