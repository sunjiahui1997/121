<template>
  <div id="app" style="width:100%">
    <!-- <a class="back" href="/manage.html">进入后台</a> -->
    <div style="width:100%;">
      <div class="tabbar">
        <div class="nav">
          <div class="logo"><img src="./assets/logo.png" alt=""></div>
          <div class="navbar">
            <div
              class="nav-item"
              :class="{ active: 0 === currentIndex }"
              @click="
                btnclick(0);
                home();
              "
            >
              首页
            </div>
            <div
              class="nav-item"
              :class="{ active: 1 === currentIndex }"
              @click="
                btnclick(1);
                news();
              "
            >
              新闻中心
            </div>
            <div
              class="nav-item"
              :class="{ active: 2 === currentIndex }"
              @click="
                btnclick(2);
                introduce();
              "
            >
              公司介绍
            </div>
            <div
              class="nav-item"
              :class="{ active: 3 === currentIndex }"
              @click="
                btnclick(3);
                product();
              "
            >
              产品中心
            </div>
            <div
              class="nav-item"
              :class="{ active: 4 === currentIndex }"
              @click="
                btnclick(4);
                comment();
              "
            >
              在线留言
            </div>
            <div
              class="nav-item"
              :class="{ active: 5 === currentIndex }"
              @click="
                btnclick(5);
                contact();
              "
            >
              联系我们
            </div>
          </div>
        </div>
      </div>
      <!-- <div><div class="swiper-item">1</div></div> -->
      <div class="sswiper">
        <div class="layui-carousel" id="test1">
          <div carousel-item>
            <div>
              <router-link to="/product"
                ><img src="./assets/轮播图1.png" alt=""
              /></router-link>
            </div>
            <div>
              <router-link to="/product"
                ><img src="./assets/轮播图2.png" alt=""
              /></router-link>
            </div>
            <div>
              <router-link to="/product"
                ><img src="./assets/轮播图3.png" alt=""
              /></router-link>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  components: {},
  methods: {
    news() {
      this.$router.push("/news");
    },
    home() {
      this.$router.push("/home");
    },
    btnclick(index) {
      this.currentIndex = index;
      // location.reload()
    },
    introduce() {
      this.$router.push("/intro");
    },
    product() {
      this.$router.push("/product");
    },
    comment() {
      this.$router.push("/comment");
    },
    contact() {
      this.$router.push("/contact");
    }
  },
  mounted() {},
  created() {
    layui.use("carousel", function() {
      var carousel = layui.carousel;
      //建造实例
      var ins = carousel.render({
        elem: "#test1",
        width: "100%", //设置容器宽度
        height: "450px",
        arrow: "none" //始终显示箭头
        //,anim: 'updown' //切换动画方式
      });
      ins.reload({
        elem: "#test1",
        width: "100%", //设置容器宽度
        height: "450px",
        arrow: "none" //始终显示箭头
        //,anim: 'updown' //切换动画方式
      });
    });
  }
};
</script>

<style>
#app {
  width: 1920px;
  /* overflow-x: visible; */
}
body {
  margin: 0;
  padding: 0;
  width: 1920px;
  z-index: 10;
}
.layui-carousel-ind ul {
  background-color: transparent;
}
.logo {
  position: absolute;
  top: 14px;
  width: 126px;
  height: 42px;
  /* background: #4489b0; */
}

.tabbar {
  position: relative;
  width: 1920px;
  height: 70px;
  background: #ffffff;
}

.nav {
  position: relative;
  height: 42px;
  width: 1200px;
  display: flex;
  left: 420px;
  align-items: center;
}

.navbar {
  display: flex;
  margin-left: 272px;
  justify-content: center;
  position: absolute;
  top: 27px;
}

.nav-item {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  margin-right: 67px;
  cursor: pointer;
}
.active {
  color: #359eae;
}

.layui-laypage a {
  color: #94999f;
  font-size: 12px;
  width: 32px;
  height: 32px;
  padding: 0;
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  margin: 0;
  margin-right: 8px;
  text-align: center;
  line-height: 32px;
}
.sswiper {
  width: 100%;
}
.layui-laypage span {
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  margin-right: 8px;
  text-align: center;
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  line-height: 32px;
}
.layui-laypage-spr {
  border: 1px black solid;
}
</style>
