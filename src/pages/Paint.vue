<template>
  <div>
    <canvas
      width="500"
      height="500"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      ref="canvas"
    ></canvas>
    <button @click="save">save</button>
    <input type="file" @change="onChange">
  </div>
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
        this.c.lineTo(startX, startY);
        this.c.strokeStyle = "#fff";
        this.c.stroke();
        this.startX = startX;
        this.startY = startY;
      }
    },
    onMouseUp() {
      this.start = false;
    },
    save() {
      const a = document.createElement("a");
      a.href = this.$refs.canvas.toDataURL("image/png");
      a.download = "pic";
      a.click();
    },
    onChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = e => {
          const { width, height } = e.target;
          let imgWidth = 500;
          let imgHeight = 500;
          if (width > height) {
            imgHeight = height / (width / 500);
          } else {
            imgWidth = width / (height / 500);
          }
          this.c.clearRect(0, 0, 500, 500);
          this.c.drawImage(img, 0, 0, imgWidth, imgHeight);
        };
      };
      reader.readAsDataURL(file);
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
  display: block;
}

img {
  width: 500px;
  height: auto;
}
</style>
