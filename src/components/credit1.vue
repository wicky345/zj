<template>
<div>
<zj-header></zj-header>
<el-breadcrumb class="lead" separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
<div class="content">
  <div class="leftcontent">
    <div class="title">关于众基</div>
    <ul class="nav" style="padding-left:0px">
      <li><a href="http://www.baidu.com">公司简介</a></li>
      <li><a href="http://www.baidu.com">企业荣誉</a></li>
      <li><a href="http://www.baidu.com">企业动态</a></li>
    </ul>
  </div>
    <div class="rightcontent" style="height:300px">
      <h2 class="rtitle">公司荣誉</h2>
      <div class="rcontent">这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介
      </div>
    </div>
</div>
<zj-footer></zj-footer>

</div>
</template>
<script>
import zjFooter from '../components/footer'
import zjHeader from '../components/header'

export default{

components:{
  zjFooter,
  zjHeader
}
}
</script>
<style>

.lead{
    display:block;
    width:90%;
    margin:10px auto;
}
.content{
  width:90%;
  margin:0px auto;
}
.leftcontent{
  width:200px;
  height:240px;
  background-color:rgb(64, 158, 255);
  float:left;
}
.leftcontent .title{
  text-align:center;
  height:50px;
  font-size:20px;
  border-bottom:1px solid #fff;
  color:#fff;
  padding-top:20px;
}
.leftcontent .title:hover{
  text-align:center;
  height:50px;
  font-size:20px;
  border-bottom:1px solid #fff;
  color:#fff;
   padding-top:20px;
  background-color:rgb(51,126,204);
}
.nav  li{
  display:block;
  height:36px;
  text-align:center;
  text-decoration: none;
  padding-bottom:1px solid #fff;
  list-style: none;
  padding-top:10px;
}
.nav  li:hover{
  display:block;
  height:36px;
  text-align:center;
  text-decoration: none;
  padding-bottom:1px solid #fff;
  list-style: none;
   background-color:rgb(51,126,204);
   padding-top:10px;
}
.leftcontent .nav  a{
  text-decoration: none;
  color:#fff;
   font-size:18px;
}
.rightcontent{
  margin-left:250px;
  height:200px;
}
.rtitle{
  margin:10px 0px;
  text-align:left;

}
.rcontent{
  height:300px;
  font-size:14px;
  text-align:left;
}



</style>