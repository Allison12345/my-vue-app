<template>
  <div id='test'> 
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-lf-cpt/>
    <div v-if='error'>{{error}}</div>
    <v-for-cpt v-else :todos="todos"/>
  </div> 
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import VLfCpt from "../components/VLfCpt";
import VForCpt from "../components/VForCpt";
import axios from "axios";
export default {
  name: "Test",
  components: {
    HelloWorld,
    VLfCpt,
    VForCpt
  },
  data() {
    return {
      todos: [],
      error:""
    };
  },
  created() {
    this.getTodos();
    window.setTimeout(() => {
      this.error = 'hello world'
    }, 5000)
  },
  methods: {
    getTodos() {
      axios
        .get("/todos.json")
        .then(response => {
          /* eslint-disable */
          console.log(response);
          this.todos = response.data;
        })
        .catch(error => {
          /* eslint-disable */
          console.log(error);
          this.error = error.message
        });
    }
  }
};
</script>

<style>
#test {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>