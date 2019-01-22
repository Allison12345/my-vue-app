<template>
  <div id="list" class='weui-cells'>
    <div class="err" @click="getTodos" v-if="err">{{err}}</div>
    <item v-else v-for="(item,index) of list" :key="index" :data="item" :id="index"/>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import axios from "axios";
export default {
  name: "News",
  components: {
    Item,
  },
  data() {
    return {
      list: [],
      err: ""
    };
  },
  
  created() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
        .get("/news.json")
        .then(response => {
          /* eslint-disable */
          console.log(response);
          this.list = response.data;
        })
        .catch(error => {
          /* eslint-disable */
          console.log(error);
          this.err = error.message;
        });
    }
  }
};
</script>
<style>
.err {
  color: #666;
  position: fixed;
  left: 50%;
  top: 50%;
  /*对自身平移*/
  transform: translate(-50%, -50%);
}

</style>

