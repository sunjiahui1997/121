<template>
  <div>
    <div class="header">
      <div class="logo2"></div>
      <div class="header-name">发布新闻</div>
      <div class="backHome" @click="backHome">返回</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    }
  },
  props: {},
  created() {},
  methods: {
    backHome() {
      this.$router.push("/product");
    },
    add() {
    }
  }
};
</script>

<style scoped>
.form-group {
  /* display: flex; */
  margin-right: 70px;
}
.logo2 {
  width: 30px;
  height: 30px;
  border: 1px black solid;
  position: relative;
  top: 35px;
  left: 40px;
}
.header-name {
  color: black;
  font-size: 30px;
  line-height: 100px;
  position: relative;
  left: 60px;
}
.posi{
    position: absolute;
    right: 500px;
    top: 230px;
}
.header {
  display: flex;
}
ul li{
    list-style: none;
}
.line {
  width: 1720px;
  border: 1px solid rgb(201, 201, 201);
}
.backHome {
  width: 130px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  background-color: rgb(148, 148, 148);
  cursor: pointer;
  position: relative;
  right: -1300px;
  top: 25px;
}
</style>