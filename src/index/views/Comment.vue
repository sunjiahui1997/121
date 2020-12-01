<template>
  <div class="content333">
    <div id="black"></div>
    <div class="bo-x">
      <div class="img1"><img src="../assets/电话.png" alt="" /></div>
      <div class="title33">联系我们</div>
      <div class="line33"></div>
      <div class="content11">
        联系人： 夏仁玉 <br />手 机：13805768895 <br />电 话：13805768895 <br />
        邮箱：3536127966@qq.com <br />
        名称：湖州宏盛新材料科技有限公司 <br />
      </div>
      <div class="content22">地址：湖州市南浔区菱湖镇下昂工业园丰泰路928号</div>
    </div>
    <div class="content-new">
      <div class="logo11"><img src="../assets/新闻01.png" alt="" /></div>
      <div class="title44">在线留言</div>
      <div class="form-group" id="name1">
        <div class="form-title">姓名 :</div>
        <input type="text" name="name"  v-model="form.name" placeholder="请输入联系人姓名" />
      </div>
      <div class="form-group" id="name2">
        <div class="form-title">电话 :</div>
        <input type="text" name="name" required='required' v-model="form.phone" placeholder="请输入联系人电话(必填)" />
      </div>
      <div class="form-group" id="name3">
        <div class="form-title">邮箱 :</div>
        <input type="text" name="name" v-model="form.email" placeholder="请输入联系人邮箱地址" />
      </div>
      <div class="form-group" id="name4">
        <div class="form-title">邮箱 :</div>
        <textarea
          cols="30"
          rows="10"
          placeholder="请在此输入留言内容，我们会尽快与您联系"
          v-model="form.email"
        ></textarea>
      </div>
      <div class="position">
        当前位置：湖州宏盛新材料科技有限公司 >>新闻中心
      </div>
      <div class="line-new"></div>
    </div>
    <div class="submit" @click="btn3" >提交留言</div>
    <div class="foot">
      <div class="foot1" style="padding-top: 24px">
        Copyright© 2020 湖州宏盛新材料科技有限公司 版权所有
      </div>
      <div class="foot1" style="margin-top: 7px">浙ICP备案号17000000号</div>
    </div>
    <div v-if="commit" class="submit1">
      <div class="header"><div class="header1">提交信息</div><div><img @click="close" @mousemove="nihao" @mouseout="nihaoya" id="close" src="../assets/关闭.png" alt=""></div></div>
      <div class="confirm">
        您的信息已提交成功 <br />我们的工作人员会尽快与您联系
      </div>
      <div><img class="success" src="../assets/成功.png" alt="" /></div>
      <div class="button" @click="btn2">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commit: false,
      form:{
        email:''
      }
    };
  },
  methods: {
   btn3() {
      this.commit = true;
      document.getElementById('black').style.visibility = 'visible'
    },
    btn2(){
      this.commit = false
      document.getElementById('black').style.visibility = 'hidden'
    },
    close(){
      this.commit = false
      document.getElementById('black').style.visibility = 'hidden'
    },
    nihao(){
      document.getElementById('close').style.opacity = 0.8
    },
    nihaoya(){
      document.getElementById('close').style.opacity = 1
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
  top: 108px;
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
  top: 304px;
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
  right: 0px;
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
  position: relative;
  top: 520px;
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
.form-group {
  display: flex;
}
#name1 {
  position: absolute;
  top: 81px;
  left: 3px;
  height: 24px;
}
#name2 {
  position: absolute;
  top: 141px;
  left: 3px;
}
#name3 {
  position: absolute;
  top: 201px;
  left: 3px;
}
#name4 {
  position: absolute;
  top: 261px;
  left: 3px;
}
.form-title {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  padding-top: 10px;
  padding-right: 3px;
}
textarea {
  resize: none;
  width: 510px;
  height: 180px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  padding-top: 10px;
  outline: none;
}
.submit {
  width: 120px;
  height: 40px;
  background: #359eae;
  border-radius: 2px;
  position: relative;
  top: 490px;
  left: 1275px;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  z-index: 1000;
}
input {
  width: 249px;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  padding-left: 10px;
  outline: none;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}
.submit1 {
  width: 400px;
  height: 290px;
  background: #ffffff;
  position: absolute;
  left: 760px;
  top: 360px;
  /* border: olive 1px solid; */
  z-index: 1000;
}
.header {
  width: 400px;
  height: 40px;
  background: #cccccc;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  position: relative;
}
.header1{
position: absolute;
top: 13px;
left: 20px;
}
#close{
position: absolute;
cursor: pointer;
left: 373px;
top: 13px;
}
.success{
  width: 53px;
  height: 52px;
  position: absolute;
  top: 155px;
  left: 174px;
}
.confirm {
  width: 307px;
  height: 53px;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 16px;
  white-space: nowrap;
  text-align: center;
  position: absolute;
  top: 78px;
  left: 46px;
  line-height: 30px;
}
.button {
  width: 244px;
  height: 36px;
  background: #359eae;
  border-radius: 3px;

  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 227px;
  left: 78px;
}
#black{
  visibility: hidden;
  position: absolute;
  width: 1920px;
  background: black;
  height: 1213px;
  top: 1px;
  opacity: 0.5;
  z-index: 100;
}
</style>