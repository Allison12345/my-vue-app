<template>
  <canvas
    width=500
    height=500
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    ref="canvas"
  ></canvas>
</template>
<script>
export default {
  name: "paint",
  data() {
    return {
      startX: 0,
      startY: 0,
      start: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.canvas = this.$refs.canvas;
      this.c = this.canvas.getContext("2d");
      this.c.lineWidth = 5;
      // #fff white
    },
    onMouseDown(e) {
      this.start = true;
      this.startX = e.clientX - e.target.offsetLeft;
      this.startY =
        e.clientY - e.target.offsetTop + document.documentElement.scrollTop;
      this.c.beginPath();
      this.c.moveTo(this.startX, this.startY);
    },
    onMouseMove(e) {
      if (this.start) {
        const startX = e.clientX - e.target.offsetLeft;
        const startY =
          e.clientY - e.target.offsetTop + document.documentElement.scrollTop;
        console.log(this.startX, this.startY, "->", startX, startY);
        this.c.lineTo(startX, startY);
        this.c.strokeStyle = "#fff";
        this.c.stroke();
        this.startX = startX;
        this.startY = startY;
      }
    },
    onMouseUp(e) {
      this.start = false;
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
canvas {
  background-color: blueviolet;
  display: block
}
</style>
