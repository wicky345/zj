<template>
<div class="employ">
<!--header部分-->
<div class="header">
  <img src="/static/img/logo.gif">
  <ul class="employMenu">
    <li id="list1"><router-link to="/" class="menu1">首页</router-link></li>
    <li id="list2"><router-link to="/employ" class="menu2">招聘信息</router-link></li>
    <li id="list3"><el-button round @click="register()">注册</el-button></li>
    <li id="list4"><el-button type="primary" round @click="login()">登录</el-button></li>
  </ul>

</div>
    
  <!-- banner部分 -->
  <div class="banner employ">
    <div class="title">
      <!-- <p>{{employData}}</p> -->
      <p>招聘信息</p>
      <p class="en">recruitment information</p>
    </div>
  </div>
  <!-- main部分 -->
  <div class="main employ">
   <el-table
      :data="employData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="职业名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="place"
        label="工作地点"
        width="120">
      </el-table-column>
      <el-table-column
        prop="category"
        label="类别"
         width="120">
      </el-table-column>
      <el-table-column
        prop="experience"
        label="工作经验"
         width="120">
      </el-table-column>
       <el-table-column
        prop="education"
        label="学历要求"
         width="120">
      </el-table-column>
       <el-table-column
        prop="nature"
        label="工作性质"
         width="120">
      </el-table-column>
       <el-table-column
        prop="number"
        label="招聘人数"
         width="120">
       </el-table-column>
         <el-table-column
        prop="pub_time"
        label="发布时间"
         width="200">
      </el-table-column>
      <el-table-column
       label="操作">
       <template slot-scope="scope">
        <el-button
          size="mini"
          @click="getMore(scope.row)">了解更多</el-button>
          </template>
      </el-table-column>
    </el-table>
     <div id="newsPage">
        <br/>
        <el-pagination
          background
           layout="prev, pager, next"
           :total="1000">
        </el-pagination></div>
  </div>
  <!-- footer部分 -->
<zj-footer></zj-footer>
  </div>
  </template>

  <script>
import zjHeader from '@/components/header'
import zjFooter from '@/components/footer'
export default {
    data(){
        return{
             employData: []
         }
        },
        methods:{
            init(){
             this.$api.get('/api/employ', "", response => {
             if (response.status == 200) {
              this.employData = response.data;
             }
            });
         },
      getMore(row){
       this.$router.push({name:'EmployDetail',params:{id:row.ID}});
      },
      login(){
        this.$router.push('/login');
      },
      register(){
        this.router.push('/');
      }
        },
        watch:{
          '$route':{
              handler(route){
                  if(route.name==='employ'){
                      this.init();
                  }
              },
              deep:true
          }
        },
      created(){
      this.init();
    },
components:{
    zjHeader,
    zjFooter
}
}
</script>

  <style>
  .employ .header{width:100%;border-bottom:1px solid #ccc;height:74px}
  .employ .header img{float:left;width:470px;height:74px;}
  .employ .header .employMenu{float:right;margin:0px;}
  .employ .header .employMenu li{height:74px;float:left;list-style:none;font-size:20px;color:#409eff;}
  .employ .header .employMenu li:hover{height:74px;float:left;list-style:none;font-size:20px;color:#1989FA;}
  .employ .header .employMenu  #list1{width:70px;margin:0px 5px;line-height:74px;}
   .employ .header .employMenu  #list1 .menu1{width:70px;margin:0px 5px;line-height:74px;text-decoration:none;color:#1989fa;}
   .employ .header .employMenu  #list1:hover{width:70px;margin:0px 5px;line-height:74px;border-bottom:3px solid #1989FA;}
   .employ .header .employMenu  #list2{width:100px;margin:0px 60px 0px 5px;line-height:74px;}
   .employ .header .employMenu  #list2 .menu2{line-height:74px;text-decoration:none;color:#1989fa;}
      .employ .header .employMenu  #list2:hover{width:100px;margin:0px 60px 0px 5px;line-height:74px;border-bottom:3px solid #1989FA;}
    .employ .header .employMenu  #list3{width:100px;margin:0px 5px;}
    .employ .header .employMenu  #list3 .el-button{margin-top:18px;color:#409eff;border:1px solid #409eff;}
     .employ .header .employMenu  #list4{width:100px;}
     .employ .header .employMenu  #list4 .el-button{margin-top:18px;}
   /* .employ .header .menu p{float:right;margin-right:90px;} */
   .employ .header .user{height:74px;float:right;margin-right:5px;}
.el-table th>.cell{text-align:center;}
  /*主体—招聘*/
.main-employ{padding-top: 90px; padding-bottom: 130px;}
.main-employ p{font-size: 16px; color: #ababab; line-height: 28px;}
.main-employ p.title
,.main-service p.title{color: #484848; font-size: 24px; text-align: center; line-height: 160px;}
.main-employ p.title span
,.main-service p.title span{color: #2db5a3;}
.main-employ .content{border: 1px solid #DEDEDE; padding: 30px 36px 0 36px; text-align: center; transition: 0.3s;}
.main-employ .content p.label{font-size: 18px; color: #939393; line-height: 46px; padding-top: 6px;}
.main-employ .content a{text-decoration:none;font-size: 18px; color: #a1d8cb; line-height: 68px;}
.main-employ .content:hover{box-shadow: 0 0 3px 3px #EEE; transition: 0.3s;}
.main-employ .content img{transition: 2s;}
.main-employ .content img:hover{transform: rotateY(180deg);}

/** 招聘*/
.banner{height: 320px; margin-top: 80px;}
.banner.employ{background: url(/static/img/nav_img1.jpg) no-repeat center top; background-size: cover;}
.main.employ{padding: 30px 0 75px 0;}
.main.employ .content{padding: 50px 0; border-bottom: 1px solid #e8e8e8;}
.main.employ .content .content-img{text-align: center;}
.main.employ .content .content-img img{width: 90%;}
.main.employ .content .label{color: #565656; font-size: 30px; line-height: 78px; margin-top: 32px;}
.main.employ .content .detail{font-size: 16px; line-height: 28px; color: #d7d7d7; padding-bottom: 30px;}
.main.employ .content a{text-decoration:none;color: #a0d2cc; font-size: 16px; line-height: 38px; padding:10px 11px 10px 23px; border: 1px solid #a0d2cc; border-radius: 3px;}

.banner .title{padding-top: 60px;}
.banner .title:active{padding-top: 60px; transition: 1.5s;}
.banner .title p{color: #606060; font-size: 36px; text-align: center; line-height: 50px; letter-spacing: 5px;}
.banner .title p.en{font-size: 20px; letter-spacing: 3px;}

/*小屏幕*/
@media screen and (min-width: 768px){
  .main-employ p.title
  ,.main-service p.title{font-size: 36px; line-height: 216px;}
  .main.employ .content .content-img{text-align: center;}
}
@media screen and (min-width: 768px) and (max-width: 992px){
  .main.employ .content div.right{padding-left: 20px;text-align:left;}
  .main.employ .content .label{line-height: 40px; margin-top: 0;}
  .main.employ .content .detail{padding-bottom: 10px;}
}
/*大屏幕*/
@media screen and (min-width: 992px){
  .main.employ .content{padding: 100px 0;}
  .main.employ .content div.right{padding-left: 0;text-align:left;}

}
  </style>