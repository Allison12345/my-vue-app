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
    <button v-on:click="save()">save</button>
    <input type="file" name="myImage" id="myImage" onchange="preImg(this.id,'imgPre')"/>
    <img id="imgPre" src='' style="display:block">
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
    },

    save() {
      var mycanvas = this.$refs.canvas;
      var image = mycanvas.toDataURL("image/png");
      var w = window.open("about:blank", "image from canvas");
      w.document.write("<img src='" + image + "' alt='from canvas'/>");
    },
    preImg(source, target) {
      this.c.clearRect(0, 0, 500, 500);
      if (typeof FileReader === "undefined") {
        alert("Your browser does not support FileReader...");
        return;
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = document.getElementById(target);
        img.src = this.result;
        img.onload = function() {
          this.c.drawImage(img, 0, 0);
        };
      };
      reader.readAsDataURL(document.getElementById(source).files[0]);
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
</style>
