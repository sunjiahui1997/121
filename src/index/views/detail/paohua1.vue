<template>
  <div>
    <div class="nihao">
      <img src="../../assets/产品图.png" alt="">
      <div class="desc">35℃～40℃透明中性泡化碱</div>
      <div class="item" id="item1">
        <div class="name">模数：</div>
        <div class="para">3.2M～3.5M</div>
      </div>
      <div class="line" id="line1"></div>
      <div class="item" id="item2">
        <div class="name">浓度：</div>
        <div class="para">35℃～40℃</div>
      </div>
      <div class="line" id="line2"></div>
      <div class="item" id="item3">
        <div class="name" id="name3">加工时间：</div>
        <div class="para" id="para3">不经过压滤</div>
      </div>
      <div class="line" id="line3"></div>
      <div class="item" id="item4">
        <div class="name">说明：</div>
        <div class="para">特殊规格可以订制</div>
      </div>
      <div class="line" id="line4"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nihao {
  position: relative;
  left: 220px;
}
img {
  width: 240px;
  height: 240px;
}
.desc {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  margin-top: 13px;
  margin-left: 22px;
}
.item {
  display: flex;
  position: relative;
}
#item1 {
  top: 30px;
}
#item2 {
  top: 50px;
}
#item3 {
  top: 70px;
}
#item4 {
  top: 100px;
}
#line1 {
  top: 41px;
}
#line2 {
  top: 61px;
}
#line3 {
  top: 81px;
}
#line4 {
  top: 111px;
}
.name {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
  position: relative;
  right: 42px;
}
#name3{
    left: -80px;
}
#para3{
    left: 120px;
}
.para {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
  position: relative;
  left: 159px;
}
.line {
  width: 680px;
  height: 1px;
  background: #ebebeb;
  position: relative;
  right: 226px;
}
</style>