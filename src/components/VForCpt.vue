<template>
  <div>
    <div v-for="(todo,index) in todos" :key="index">{{todo.text}}</div>
  </div>
</template>
<script>
export default {
  name: "v-for",
  props: {
    todos: Array
  },
  destroyed() {
    window.alert("no destroy");
  }
};
</script>
