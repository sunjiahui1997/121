<template>
  <div class="content333">
    <div class="bo-x">
      <div class="img1"><img src="../assets/电话.png" alt="" /></div>
      <div class="title33">联系我们</div>
      <div class="line33"></div>
      <div class="content11">
        联系人： 夏仁玉 <br />手 机：13805768895 <br />销售经理：黄广建<br />电
        话：18268115945 <br />
        邮箱：3536127966@qq.com <br />
        名称：湖州宏盛新材料科技有限公司 <br />
      </div>
      <div class="content22">地址：湖州市南浔区菱湖镇下昂工业园丰泰路928号</div>
    </div>
    <div class="content-new">
      <div class="logo11"><img src="../assets/新闻01.png" alt="" /></div>
      <div class="title44">产品中心</div>
      <div class="position">
        当前位置：湖州宏盛新材料科技有限公司 >>新闻中心
      </div>
      <div class="line-new"></div>
      <div class="tab-control">
        <div
          class="tab1"
          :class="{ active: 0 === currentIndex }"
          @click="
            btnclick(0);
            na();
          "
        >
          硅酸钠
        </div>
        <div
          class="tab1"
          :class="{ active: 1 === currentIndex }"
          @click="
            btnclick(1);
            k();
          "
        >
          硅酸钾
        </div>
        <div
          class="tab1"
          :class="{ active: 2 === currentIndex }"
          @click="
            btnclick(2);
            kna();
          "
        >
          硅酸钾钠
        </div>
      </div>
      <router-view id="item-1"></router-view>
    </div>
    <div class="foot">
      <div class="foot1" style="margin-top: 24px">
        Copyright© 2020 杭州富阳金顺化工建材有限公司 版权所有
      </div>
      <div class="foot1" style="margin-top: 7px">浙ICP备案号17000000号</div>
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
  methods: {
    btnclick(index) {
      this.currentIndex = index;
    },
    na() {
      this.$router.push("/product/proitem");
    },
    k() {
      this.$router.push("/product/prok");
    },
    kna() {
      this.$router.push("/product/prokna");
    }
  }
};
</script>

<style scoped>
.bo-x {
  width: 360px;
  height: 400px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.06);
  border-radius: 9px;
  position: absolute;
  left: 420px;
  top: 550px;
}
.img1 {
  position: absolute;
  top: 19px;
  left: 16px;
  width: 20px;
  height: 26px;
  /* background-color: black; */
}
.title33 {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
  position: absolute;
  top: 17px;
  left: 50px;
}
.line33 {
  width: 320px;
  height: 1px;
  background: #ebebeb;
  position: absolute;
  top: 60px;
  left: 20px;
}
.content11 {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  width: 271px;
  height: 170px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  position: absolute;
  top: 95px;
  left: 30px;
  line-height: 35px;
  white-space: nowrap;
}
.content22 {
  position: absolute;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  top: 320px;
  left: 31px;
}
.logo11 {
  width: 28px;
  height: 25px;
}
.tab-control {
  position: absolute;
  top: 69px;
  display: flex;
}
.tab1 {
  width: 226px;
  height: 70px;
  background: #359eae;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  line-height: 70px;
  margin-right: 1px;
  cursor: pointer;
}
.content-new {
  position: absolute;
  width: 800px;
  top: 550px;
  left: 820px;
}
#item-1 {
  position: relative;
  top: 186px;
  left: 4px;
  width: 700px;
  margin: 0;
}
.active {
  background-color: #246069;
}
.title44 {
  position: absolute;
  top: -2px;
  left: 40px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
}
.position {
  position: absolute;
  top: 5px;
  left: 337px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}
.line-new {
  width: 680px;
  height: 1px;
  background: #ebebeb;
  position: absolute;
  top: 40px;
}
.foot {
  position: absolute;
  top: 1330px;
  width: 1920px;
  height: 80px;
  background: #359eae;
  /* bottom: 0px; */
}
.foot1 {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}
</style>