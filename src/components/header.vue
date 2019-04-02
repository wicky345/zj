<template>
<!-- nav部分 -->
  <div class="nav">
    <div class="layui-container">
      <!-- 公司logo -->
      <div class="nav-logo">
        <a href="index.html">
          <img src="/static/img/logo.gif" alt="网络公司">
        </a>
      </div>
      <div class="nav-list">
 <el-menu :defaultIndex="activeIndex"
      class="el-menu" 
      mode="horizontal"
       @select="handleSelect" 
       active-text-color="#ffd04b"
       router>
       <el-menu-item index="index">首页</el-menu-item>
       <el-submenu index="aboutus">
         <template slot="title">关于众基</template>
         <el-menu-item index="introduction">公司简介</el-menu-item>
         <el-menu-item index="credit">荣誉展示</el-menu-item>
       </el-submenu>
        <el-submenu index="2"  >
         <template slot="title">企业动态</template>
         <el-menu-item index="news">企业新闻</el-menu-item>
         <el-menu-item index="employ">招聘信息</el-menu-item>
       </el-submenu>
       <el-submenu index="3" >
         <template slot="title">业务领域</template>
         <el-menu-item index="business1">智慧城市</el-menu-item>
         <el-menu-item index="business2">智慧林业</el-menu-item>
         <el-menu-item index="business3">安防系统</el-menu-item>
         <el-menu-item index="business">更多业务</el-menu-item>
         </el-submenu>
         <el-menu-item index="4" >合作伙伴</el-menu-item>  
     </el-menu>
      </div>
    </div>
  </div>
  </template>
  
  <style>
  body{background: #fff;}

/** 首页 */

/*导航部分*/
.nav{width: 100%; height: 80px; box-shadow: 0 3px 3px 0 #CCC; background: #FFF; position: fixed; left: 0; top: 0; z-index: 999; overflow: hidden; transition: 0.3s}
.nav.index{background: rgba(255, 255, 255 ,0.8); box-shadow: 0 0 0 0 rgba(0,0,0,0.05);}
.nav .layui-container{position: relative; transition: all 400ms ease-out;}
.nav .nav-logo{height: 100%; position: absolute; top: 0; left: 15px; line-height: 80px;}
.nav .nav-list{display: inline-block; height: 80px;}
.nav .nav-list .el-menu> .el-menu-item {width: 100px;margin-left:20px;}
.nav .nav-list .el-menu> .el-menu-item:hover{width: 100px;}
.nav .nav-list .el-menu > .el-submenu .el-submenu__title { width: 100px;margin:0px 20px;}
.nav .nav-list .el-menu > .el-submenu .el-submenu__title:hover { width: 100px;margin:0px 20px;}
.nav .el-menu{width: 100%; position: absolute; top: 80px; right: 0; background: transparent;}
.nav .el-menu *{font-size: 18px;}


/*小屏幕*/
@media screen and (min-width: 768px){
  .nav{max-height: 80px;}
  .nav.index{background: rgba(255, 255, 255 ,0.3);}
  .nav .el-menu{width: auto; position: absolute; top: 18px;height:68px; padding: 0 5px; border-radius: 0; margin: 0;}
}
/* @media screen and (min-width: 768px) and (max-width: 992px){
  .nav .el-menu .layui-nav-item{margin:0 18px;}
} */

@media screen and (min-width: 1300px) {
  .nav .nav-logo{position: absolute; top: 8px; left: 0;}
}
  </style>
<script>
export default{
   data() {
    return {
       valueChild:true,
       posts:{},
     
    };
  },
     computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
  methods: {
    handleSelect(key, keyPath) {
        console.log(this),
      console.log(key, keyPath);
    },
     changeValue(){
            this.valueChild = !this.valueChild
        }
  },
}
</script>