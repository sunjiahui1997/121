<template>
  <div>
    <div class="header">
      <div class="logo2"></div>
      <div class="header-name">硅酸钠</div>
      <div class="backHome" @click="backHome">返回</div>
    </div>
    <div class="line"></div>
    <div class="product-mess">
      <div class="form-group" id="name1">
        <div class="form-title">产品名称</div>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="请输入产品名称"
        />
      </div>
      <div class="form-group" id="name1">
        <div class="form-title">产品序号</div>
        <input
          type="text"
          name="id"
          v-model="xh"
          placeholder="请输入产品序号"
        />
      </div>
    </div>
    <div class="params1">参数配置</div>
    <div class="params">
      <select id="select1" v-model="name2">
        <option class="select2" value="" disabled="ture">模块</option>
        <option value="模数">模数</option>
        <option value="浓度">浓度</option>
        <option value="加工时间">加工时间</option>
        <option value="说明">说明</option>
      </select>
      <input type="text" id="param" placeholder="配置相应参数" v-model="p" />
      <div><img @click="add" src="../assets/添加.svg" alt="" /></div>
    </div>
    <div class="posi">
      <ul v-for="(item, index) in form1" :key="index">
        <li>{{ item.name }} : {{ item.canshu }}</li>
      </ul>
    </div>
    <div class="img1">添加图片</div>
    <div class="h">
      <div class="btn2" @click="subbmit">发布</div>
      <div class="btn2">取消</div>
    </div>
    <div class="img3"><input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/></div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      name: "",
      xh: "",
      name2: "",
      p: "",
      form1: [],
      elId: ''
    };
  },
  props: {},
  inject:['reload'],
  created() {
    this.elId = uuidv4()
  },
  methods: {
    backHome() {
      this.$router.push("/product");
    },
    add() {
      if (this.p === "") {
        alert("请输入内容");
      } else {
        this.form1.push({ name: this.name2, canshu: this.p });
        this.p = "";
      }
    },
    update (e) {   // 上传照片
      let self = this
      let file = e.target.files[0]
      /* eslint-disable no-undef */
      let param = new FormData()  // 创建form对象
      param.append('file', file)  // 通过append向form对象添加数据
      param.append('id', this.elId)  // 通过append向form对象添加数据
      param.append('chunk', '0') // 添加form表单中其他数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
     // 添加请求头
    axios.post('http://122.114.162.87:8080/system/api/upload', param, config)
        .then(res => {
          if (res.data.code === 0) {
            self.ImgUrl = res.data.data
          }
          console.log(res.data)
        })
    },
    subbmit() {
      var m;
      var d;
      var h;
      var i;
      var s;
      const now = new Date();
      const year = now.getFullYear();
      var month = now.getMonth() + 1;
      if (month < 10) {
        m = "0" + month;
      } else {
        m = month;
      }
      const day = now.getDate();
      if (day < 10) {
        d = "0" + day;
      } else {
        d = day;
      }
      const hour = now.getHours();
      if (hour < 10) {
        h = "0" + hour;
      } else {
        h = hour;
      }
      const minutes = now.getMinutes();
      if (minutes < 10) {
        i = "0" + minutes;
      } else {
        i = minutes;
      }
      const second = now.getSeconds();
      if (second < 10) {
        s = "0" + second;
      } else {
        s = second;
      }
      const time =
        year + "-" + m + "-" + d + " " + h + ":" + i + ":" + s;
      // console.log(time);
      axios
        .post("http://122.114.162.87:8080/system/api/jscpzxadd", {
          id: this.elId,
          name: this.name,
          xh: this.xh,
          jgTime: time,
          type: "0"
        })
        .then(function(response) {
          console.log(response); //成功
          alert('添加成功')
          // this.$router.go(0)
          
        })
        .catch(function(error) {
          console.log(error); //失败
        });
        this.reload()
    }
  }
};
</script>

<style scoped>
.form-group {
  /* display: flex; */
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
.posi {
  position: absolute;
  right: 500px;
  top: 230px;
}
.header {
  display: flex;
}
ul li {
  list-style: none;
}
.line {
  width: 1720px;
  border: 1px solid rgb(201, 201, 201);
}
.product-mess {
  /* display: flex; */
  font-size: 22px;
  position: relative;
  top: 20px;
  left: 40px;
}
.backHome {
  width: 130px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  background-color: rgb(148, 148, 148);
  cursor: pointer;
  position: relative;
  right: -1300px;
  top: 25px;
}
input {
  width: 270px;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  padding-left: 10px;
  outline: none;
  font-size: 18px;
  margin-top: 10px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}
.form-title {
  margin-top: 20px;
}
.params {
  display: flex;
}
.params1 {
  font-size: 20px;
  position: relative;
  top: 40px;
  left: 45px;
}
.params {
  position: relative;
  top: 60px;
}
.module {
  width: 100px;
  height: 70px;
}
#select1 {
  text-align: center;
  width: 130px;
  height: 50px;
  font-size: 18px;
  padding-left: 7px;
  margin-left: 40px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  outline: none;
}
.select2 {
  text-align: center;
  font-size: 18px;
}
#param {
  border: none;
  border-bottom: 1px solid #cccccc;
  text-align: center;
  margin: 0 30px;
  width: 450px;
}
img {
  width: 40px;
  height: 40px;
  margin-left: 19px;
  cursor: pointer;
}
.img1 {
  font-size: 20px;
  position: relative;
  left: 45px;
  top: 100px;
}
.btn2 {
  width: 100px;
  height: 60px;
  color: white;
  background-color: #cccccc;
  margin-right: 30px;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.h {
  display: flex;
  position: relative;
  top: 300px;
  left: 100px;
}
.img3{
  position: relative;
  top: 150px;
  left: 100px;
}
</style>