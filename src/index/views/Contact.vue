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
      <div class="title44">联系我们</div>
      <div class="content">
        <div class="title0">名称：湖州宏盛新材料科技有限公司</div>
        <div class="title0">联系人：夏仁玉</div>
        <div class="title0">手机：13805768895</div>
        <div class="title0">电话：13805768895</div>
        <div class="title0">邮箱：3536127966@qq.com</div>
        <div class="title0">地址：湖州市南浔区菱湖镇下昂工业园丰泰路928号</div>
        <div class="map">
          <baidu-map
            class="map"
            :center="center"
            :zoom="zoom"
            @ready="initMap"
            :scroll-wheel-zoom="true"
          ></baidu-map>
        </div>
      </div>
      <div class="position">
        当前位置：湖州宏盛新材料科技有限公司 >>新闻中心
      </div>
      <div class="line-new"></div>
    </div>
    <div class="foot">
      <div class="foot1" style="margin-top: 24px">
        Copyright© 2020 湖州宏盛新材料科技有限公司 版权所有
      </div>
      <div class="foot1" style="margin-top: 7px">浙ICP备案号17000000号</div>
    </div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";

export default {
  components: {
    BaiduMap
  },
  data() {
    return {
      center: {
        // 经纬度
        lng: 120.119846,
        lat: 30.748007
      },
      zoom: 13, // 地图展示级别、
      BMap: null, // 百度地图对象
      map: null // 百度地图实例
    };
  },
  methods: {
    initMap({ BMap, map }) {
      this.BMap = BMap;
      this.map = map;
      this.$set(this.center, "lng", "需要传递的经纬度");
      this.$set(this.center, "lat", "需要传递的经纬度");
      this.zoom = "地图需要进行的缩放值";
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
.title0 {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  margin-bottom: 12px;
  white-space: nowrap;
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
.map2 {
  width: 500px;
  height: 200px;
  left: 0px;
  position: absolute;
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
.content-new {
  position: absolute;
  width: 700px;
  top: 550px;
  left: 820px;
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
  top: 1115px;
  width: 1920px;
  height: 80px;
  background: #359eae;
  bottom: 0px;
}
.foot1 {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}
.content {
  position: relative;
  /* border: 1px solid black; */
  width: 280px;
  height: 190px;
  top: 45px;
}
.map {
  width: 500px;
  height: 200px;
  /* background: #cccccc; */
  position: relative;
  top: 20px;
  text-align: center;
  line-height: 200px;
}
.map {
  width: 500px;
  height: 200px;
}
</style>