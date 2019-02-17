<template>
  <div>
    <input type="text" v-model="text">
    <div>{{text}}</div>
    <info :info="text"/>
    <my-input />
    <str />
  </div>
</template>

<script>
import Info from "../components/Info";
import MyInput from '../components/MyInput'
import Str from '../components/Str'
export default {
  name: "State",
  components: {
    Info,
    MyInput,
    Str
  },
  data() {
    return { text: "" };
  }
};
</script>
