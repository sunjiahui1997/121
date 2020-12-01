<template>
  <div>
    <div class="black" v-if="black"></div>
    <div class="header">
      <div class="logo2"></div>
      <div class="header-name">新闻中心</div>
    </div>
    <div class="line"></div>
    <div class="product-mess">
      <div class="form-group" id="name1">
        <div class="form-title">新闻标题 :</div>
        <input type="text" name="name" v-model="form.name" />
      </div>
      <div class="form-group" id="name1">
        <div class="form-title">查询时间 :</div>
        <input type="text" name="id" v-model="form.time1" /> <div id="line2"></div> <input type="text" name="id" v-model="form.time2" />
      </div>
    </div>
    <div class="btn">
      <div class="btn1">查询</div>
      <div class="dropdown">
        <div class="item3" @click="showDrop">发布新闻</div>
        <div id="item2" v-if="show">
          <div class="item1">
            <router-link to='/addnew'>图文</router-link>
          </div>
          <div class="item1">
            <router-link to='/addvideo'>视频</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="table1">
      <table border="1">
        <thead>
          <tr id="thead">
            <th id="img6">图片</th>
            <th id="name">产品名称</th>
            <th id="category">所属分类</th>
            <th id="xh">序号</th>
            <th id="time">上传时间</th>
            <th id="op">操作</th>
          </tr>
        </thead>
        <tr>
          <td></td>
        </tr>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
       time1:'',
       time2:''
      },
      show: false,
      black: false
    };
  },
  methods: {
    additem() {
      this.$router.push("/addpro");
    },
    showDrop() {
      // document.getElementById('item2').style.visibility = 'visible'
      this.show = !this.show;
      this.black = !this.black;
    }
  },
  mounted() {
    axios
      .post("http://122.114.162.87:8080/system/api/jscpzx", {
        params: {
          pageIndex: "1",
          pageSize: "10"
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.form-group {
  display: flex;
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
.header {
  display: flex;
}
.line {
  width: 1720px;
  border: 1px solid rgb(201, 201, 201);
}
.product-mess {
  display: flex;
  font-size: 22px;
  position: relative;
  top: 40px;
  left: 40px;
}
input {
  height: 50px;
  margin-left: 20px;
}
.form-title {
  line-height: 50px;
}
.btn {
  display: flex;
  position: relative;
  top: 70px;
  right: -50px;
}
.btn1 {
  width: 150px;
  height: 50px;
  background-color: rgb(148, 148, 148);
  text-align: center;
  line-height: 50px;
  margin: 0 50px;
  font-size: 23px;
  position: relative;
  /* top: 80px; */
}
.table1 {
  position: relative;
  top: 150px;
}
.dropdown {
  display: flex;
  width: 200px;
  flex-wrap: wrap;
}
#line2{
    width: 25px;
    /* border: none; */
    border-bottom: 1px solid black;
    /* padding-bottom: 20px; */
   margin: 0 10px 30px 20px;
}
.item1 {
  background-color: rgb(242, 242, 242);
  color: black;
  width: 150px;
  text-align: center;
  line-height: 50px;
  font-size: 23px;
}
.dropdown {
  position: absolute;
  left: 250px;
  z-index: 1000;
  cursor: pointer;
}
.black {
  position: absolute;
  background-color: black;
  opacity: 0.6;
  width: 1720px;
  height: 1000px;
  z-index: 900;
  /* visibility: hidden; */
}
.item3 {
  background-color: rgb(148, 148, 148);
  color: black;
  width: 150px;
  text-align: center;
  line-height: 50px;
  font-size: 23px;
}
td {
  border: 0px;
}
table {
  border-collapse: collapse;
}
td,
th,
tr {
  position: relative;
  padding: 9px 15px;
  min-height: 20px;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid #e2e2e2;
}
th{
  width: 300px;
}
</style>