<template>
  <div>
    <div class="nihao">
      <img src="../../assets/产品图.png" alt="">
      <div class="desc">40℃碱性泡化碱</div>
      <div class="item" id="item1">
        <div class="name">模数：</div>
        <div class="para">2.2M～2.5M</div>
      </div>
      <div class="line" id="line1"></div>
      <div class="item" id="item2">
        <div class="name">Na2O%：</div>
        <div class="para">≥9.5</div>
      </div>
      <div class="line" id="line2"></div>
      <div class="item" id="item3">
        <div class="name" id="name3">SiO2%：</div>
        <div class="para" id="para3">≥22.1</div>
      </div>
      <div class="line" id="line3"></div>
      <div class="item" id="item4">
        <div class="name">比重：</div>
        <div class="para">39.0-41.0</div>
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