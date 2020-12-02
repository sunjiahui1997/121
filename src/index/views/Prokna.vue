<template>
  <div>
    <div class="item">
      <div class="item-1">
         <router-link to="/product/paohua5/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua5/">硅酸钾钠</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua5/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail">固体硅酸钾钠<router-link to="/product/paohua5/"></router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua5/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail">液体硅酸钾钠<router-link to="/product/paohua5/"></router-link></div>
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