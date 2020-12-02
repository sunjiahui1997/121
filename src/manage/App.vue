<template>
  <div id="app">
    <div class="tabbarx">
      <div class="logo" @click="toMain">富阳金顺化工</div>
      <div class="row">|</div>
      <div class="toMain"><a class="back" href="/index.html">进入网站</a></div>
    </div>
    <div class="sidebar">
      <div
        class="side-item"
        :class="{ active: 0 === currentIndex }"
        @click="btnclick(0)"
      >
        <div class="logo1"></div>
        <div class="word"><router-link to="/product">产品中心</router-link></div>
      </div>
      <div
        class="side-item"
        :class="{ active: 1 === currentIndex }"
        @click="btnclick(1)"
      >
        <div class="logo1"></div>
        <div class="word"><router-link to="/news">新闻中心</router-link></div>
      </div>
    </div>
    <router-view class="main" v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide(){
    return{
      reload : this.reload
    }
  },
  data() {
    return {
      currentIndex: 0,
      isRouterAlive : true
    };
  },
  methods: {
    toMain() {},
    btnclick(index) {
      this.currentIndex = index;
    },
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
};
</script>

<style>
.tabbarx {
  width: 1920px;
  height: 80px;
  background-color: #4489b0;
  position: relative;
  display: flex;
}
body {
  margin: 0px;
  padding: 0px;
}
.sidebar {
  position: relative;
  width: 200px;
  left: 0px;
  height: 1000px;
  background-color: rgb(242, 242, 242);
}
.side-item {
  width: 200px;
  height: 60px;
  cursor: pointer;
  display: flex;
  line-height: 60px;
  position: relative;
}
.logo {
  color: white;
  font-size: 30px;
  line-height: 80px;
  position: absolute;
  left: 40px;
}
.row {
  color: rgb(121, 121, 121);
  font-size: 30px;
  position: relative;
  line-height: 80px;
  left: 253px;
}
.toMain {
  position: relative;
  line-height: 80px;
  text-decoration: none;
  font-size: 30px;
  left: 280px;
  color: white;
}
.back {
  text-decoration: none;
  color: white;
}
.logo1 {
  width: 30px;
  height: 30px;
  border: 1px white solid;
  position: relative;
  top: 12px;
  left: 40px;
}
.word {
  position: relative;
  right: -50px;
}
.active {
  color: white;
  background-color: rgb(174, 174, 174);
}
.main{
    position: absolute;
    width:1720px ;
    left: 200px;
    top: 80px;
}
.layui-table{
    font-size: 18px;
}
a {
    text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
    text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
    text-decoration: none;
}
/* 正在点击的链接*/
a:active {
    text-decoration: none;
}
</style>