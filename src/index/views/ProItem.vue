<template>
  <div>
    <div class="item">
      <div class="item-1">
         <router-link to = "/product/gooditem/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to = "/product/gooditem/">35℃～40℃不透明中性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua1/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua1/">35℃～40℃透明中性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua2/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua2/">40℃～52℃碱性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua3/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua3/">40℃碱性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua4/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua4/">51℃碱性泡化碱</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  display: flex;
  width: 720px;
  flex-wrap: wrap;
}
.item-1{
    margin-right: 50px;
    margin-bottom: 28px;
}
img {
  width: 190px;
  height: 190px;
}
.detail {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  margin-top: 10px;
  cursor: pointer;
}
a{
    text-decoration: none;
}
</style>