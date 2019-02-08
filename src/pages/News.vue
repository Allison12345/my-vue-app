<template>
  <div id="list" class="weui-cells">
    <div class="err" @click="getTodos" v-if="err">{{err}}</div>
    <item v-else v-for="(item,index) of NEWS_LIST" :key="index" :data="item" :index="index"/>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Item from "../components/Item.vue";
import { NEWS_LIST, SAVE_NEWS_LIST } from "../store";

export default {
  name: "News",
  components: {
    Item
  },
  data() {
    return {
      err: ""
    };
  },
  computed: mapGetters([NEWS_LIST]),
  created() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
        .get("/news.json")
        .then(response => {
          this.$store.commit(SAVE_NEWS_LIST, response.data);
        })
        .catch(error => {
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

