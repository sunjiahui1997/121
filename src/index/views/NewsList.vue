<template>
  <div>
    <div class="newItem">
      <div class="line"></div>
      <router-link to="/news/newsitem/"><div class="img11"><img src="../assets/公司简介（外部）.png" alt=""></div></router-link>
      <div class="title">
        <router-link to="/news/newsitem/">新闻标题</router-link>
      </div>
      <div class="date">2020-11-20</div>
      <div class="content">
        此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容
      </div>
    </div>
    <!-- <div id="pageBox"><div id="test1"></div></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // layui.use("laypage", function() {
      // var laypage = layui.laypage;

      // laypage.render({
        // elem: "test1",
        // count: 52,
        // limit: 4,
        // groups: 4,
        // prev: "&lt;",
        // next: "&gt;",
        // theme: "#359EAE"
      // });
    // });
  },
  methods: {}
};
</script>

<style scoped>
.newItem {
  display: flex;
}
.img11 {
  width: 140px;
  height: 140px;
  background: #cccccc;
  position: relative;
  cursor: pointer;
}
img{
  width: 140px;
  height: 140px;
}
.title {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
  position: absolute;
  left: 153px;
  cursor: pointer;
  white-space: nowrap;
}
a {
  text-decoration: none;
}
.date {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #cccccc;
  position: absolute;
  left: 153px;
  top: 28px;
}
#pageBox{
  position: absolute;
  right: -310px;
  top:677px;
}
.content {
  width: 508px;
  height: 50px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  white-space: wrap;
  position: absolute;
  top: 63px;
  left: 154px;
}
.line {
  width: 680px;
  height: 1px;
  background: #ebebeb;
  position: absolute;
  top: -31px;
}
.layui-laypage a {
  margin-right: 8px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}
</style>