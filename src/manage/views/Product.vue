<template>
  <div>
    <div class="black" v-if="black"></div>
    <div class="header">
      <div class="logo2"></div>
      <div class="header-name">产品中心</div>
    </div>
    <div class="line"></div>
    <div class="product-mess">
      <div class="form-group" id="name1">
        <div class="form-title">产品名称 :</div>
        <input type="text" name="name" v-model="form.name" />
      </div>
      <div class="form-group" id="name1">
        <div class="form-title">产品序号 :</div>
        <input type="text" name="id" v-model="form.id" />
      </div>
      <div class="form-group" id="name1">
        <div class="form-title">产品分类 :</div>
        <select id="select1">
          <option value="">请选择产品分类</option>
          <option value="硅酸钠">硅酸钠</option>
          <option value="硅酸钾">硅酸钾</option>
          <option value="硅酸钾钠">硅酸钾钠</option>
        </select>
      </div>
    </div>
    <div class="btn">
      <div class="btn1">查询</div>
      <div class="dropdown">
        <div class="item3" @click="showDrop">新增产品</div>
        <div id="item2" v-if="show">
          <div class="item1">
            <router-link to="/addna">硅酸钠</router-link>
          </div>
          <div class="item1">
            <router-link :to="'/addk'">硅酸钾</router-link>
          </div>
          <div class="item1">
            <router-link :to="'/addkna'">硅酸钾钠</router-link>
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
        <tr v-for="(item, index) in pro" :key="index">
          <td><img :src="item.ip" alt="" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.lx | cate }}</td>
          <td>{{ item.xh }}</td>
          <td>{{ item.jgTime }}</td>
          <td>
            <button @click="edit(item)">编辑</button
            ><button @click="delate(item.id)">删除</button>
          </td>
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
        id: ""
      },
      show: false,
      black: false,
      pro: [],
      pageIndex:1,
      pageSize:30
    };
  },
  inject: ["reload"],
  methods: {
    additem() {
      this.$router.push("/addpro");
    },
    showDrop() {
      this.show = !this.show;
      this.black = !this.black;
    },
    edit(item) {
      console.log(item);
      this.$router.push({
        path: "/editlist",
        query: {
          lx: item.lx,
          xh: item.xh,
          name: item.name,
          ip: item.ip
        }
      });
    },
    delate(iid) {
      var x;
      var r = confirm("确认删除？");
      if (r) {
        axios.delete(
          // `http://122.114.162.87:8080/system/api/jscpzxdelete?id=${y}`,
          'http://122.114.162.87:8080/system/api/jscpzxdelete/',
          {
            params: {
              id: iid
            }
          }
        );
        this.reload();
      } else {
      }
    }
  },
  mounted() {
    axios
      .post("http://122.114.162.87:8080/system/api/jscpzx", {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      .then(res => {
        console.log(res.data.result.rowsList);
        this.pro.push(...res.data.result.rowsList);
        console.log(this.pro);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  filters: {
    cate(val) {
      if (val === "0") {
        val = "硅酸钠";
      } else if (val === "1") {
        val = "硅酸钾";
      } else if (val === "2") {
        val = "硅酸钾钠";
      }
      return val;
    }
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
#select1 {
  width: 200px;
  height: 30px;
  font-size: 18px;
  margin: 10px 0px 0px 20px;
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
th {
  width: 300px;
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
img {
  width: 30px;
  height: 30px;
}
</style>