<template>
<div>
  <zj-header></zj-header>
  <!-- banner部分 -->
  <div class="banner introduction">
    <div class="title active">
      <p>公司简介</p>
      <p class="en">Company Profile</p>
    </div>
  </div>
  <!-- main -->
  <div class="main-introduction">
    <div class="detail">
      <img src="/static/img/case1.jpg">
   <p>广东众基信息科技有限公司于2008年1月在风景秀丽，人杰地灵的华南理工大学北区国家大学科技园成立。是一家面向行业用户提供专业化信息服务的高科技股份制企业。公司主要面向交通、公安、教育、民政、农业等领域提供专业化的机电产品、设备安装和技术开发服务。能够为用户提供项目设计、系统集成、运行维护和增值业务应用等全方位的服务。　　公司依托华南理工大学丰富的专家资源和自身的专业开发、管理能力，致力于为用户提供计算机技术服务以及完善的售后保障。公司为用户提供专业的业务指引和计算机应用管理等服务，确保用户投资实现保值和增值目标。　　目前，公司面向行业用户提供的业务系统有：高速公路机电设备养护管理系统、高速公路营运分析管理系统、警务管理系统、智能交通诱导系统、SONY监控系统、SONY会议系统、地凯防雷系统、计算机系统集成、物流管理平台、医疗门诊系统、医药管理平台。</p>
    </div>
    <div class="clear"></div>
  <div class="activity">
    <div class="box activity1"><img src="/static/img/case1.jpg"  width="330px" height="250px"></div>
    <div class="box activity2"><img src="/static/img/case2.jpg"  width="340px" height="400px"></div>
    <div class="box activity3"><img src="/static/img/case3.jpg"  width="250px" height="400px"></div>
    <div class="box activity4"><img src="/static/img/case4.jpg"  width="220px" height="250px"></div>
    <div class="box activity5"><img src="/static/img/case5.jpg"  width="220px" height="250px"></div>
  </div>
  <div class="environment">
    <div class="top"><p>办公环境</p></div>
    <div class="pic_left">
      <div class="pic">
      <img src="/static/img/case1.jpg"  width="460px" height="310px">
      </div>
      <div class="pic">
      <img src="/static/img/case2.jpg" width="225px" height="310px">
      </div>
     <div class="pic">
      <img src="/static/img/case3.jpg" width="225px" height="310px">
      </div>
    </div>
    <div class="pic_right">
      <div class="pic">
      <img src="/static/img/case4.jpg" width="230px" height="150px">
      </div>
      <div class="pic">
      <img src="/static/img/case5.jpg" width="230px" height="150px">
      </div>
    </div>
  </div>
  </div>
  <zj-footer></zj-footer>
  </div>
  </template>
<style>
/* @import '../assets/layui.css'; */
/** 动态 */
#cleardiv{clear:both;}
.banner{height: 320px;margin-top: 80px;}
.banner.introduction{background: url(/static/img/nav_img3.jpg) no-repeat center top; background-size: cover;}
.banner .title{padding-top: 170px;}
.banner .title.active{padding-top: 60px; transition: 1.5s;}
.banner .title p{color: #606060; font-size: 36px; text-align: center; line-height: 50px; letter-spacing: 5px;}
.banner .title p.en{font-size: 20px; letter-spacing: 3px;}

.main-introduction .detail{width:1100px;margin:50px auto 10px auto;}
.main-introduction .detail img{float:left;width:400px;height:300px;}
.main-introduction .detail p{float:left;margin-left:50px;width:650px;height:500px;line-height:1.7em;font-size:16px;text-align:left;}
.main-introduction .clear{clear:both;}
.main-introduction .activity{width:740px; height:900px;margin:10px auto;background-color:#fff;position:relative;}
 .box{position:absolute;}
 .box.activity1{top:0px;left:0px;}
 .box.activity2{top:10px;left:400px;}
 .box.activity3{top:300px;left:0px;}
 .box.activity4{top:450px;left:270px;}
 .box.activity5{top:450px;left:520px;}
.main-introduction .environment{width:1190px;height:370px;background-color:#fff;border-radius:5px;margin:50px auto;border:1px solid #ccc;}
.main-introduction .environment .top{width:1180px;height:20px;background:#fff;font-size:20px;padding-left:10px;color:#000;text-decoration:none;line-height:2px;text-align:left;border-bottom:1px solid #e6e9ed;}
.main-introduction .environment .pic_left{width:940px;height:340px;float:left;}
.main-introduction .environment .pic_right{width:250px;height:340px;float:left;}
.main-introduction .environment .pic_left .pic img{float:left;padding-left:10px;padding-top:10px;}
.main-introduction .environment .pic_right .pic img{float:right;padding-top:10px;padding-right:10px;}

@media screen and (max-width: 480px){
  .main-news .content .news-panel p.read-push{font-size: 12px;}
  .main-news #newsPage .layui-laypage a,.main-news #newsPage .layui-laypage span
  ,.main-case #casePage .layui-laypage a,.main-case #casePage .layui-laypage span{padding: 0 12px; font-size: 14px; line-height: 30px; height: 30px; margin-right: 4px;}
}
/*小屏幕*/
@media screen and (min-width: 768px){
  .main-news .content .news-panel strong a{font-size: 20px; line-height: 30px;text-align:left;}
  .main-news .content .news-panel p.read-push{padding-top: 0; position: absolute; bottom: 0px;}
  .main-newsdate .pushtime{line-height: 142px;}
}

/*大屏幕*/
@media screen and (min-width: 992px){
  .main-news .content .news-img{width: 20%;}
  .main-news .content .news-panel{width: 80%;}
}
/*超大屏幕*/
@media screen and (min-width: 1200px) {
  .main-news .content .news-img{width: 35%;}
  .main-news .content .news-panel{width: 65%;padding-left:10px;}
  .main-news .content:nth-child(odd){padding-right: 20px;}
  .main-news .content:nth-child(even){padding-left: 20px;}
  .layui-col-lg6 {width: 50%;float:left;position: relative;display: block;box-sizing: border-box;}
}
@media screen and (min-width: 1300px) {
  .layui-container{width: 1200px; padding: 0;margin:0px auto;}
}

</style>


<!--[if lt IE 9]>
  <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
  <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<script>
import zjHeader from '@/components/header'
import zjFooter from '@/components/footer'
export default {
    data(){
        return{
             newsData: []
         }
        },
        methods:{
          //通过axios获取数据
            init(){
             this.$api.get('/api/news', "", response => {
             if (response.status == 200) {
              this.newsData = response.data;
             }
            });
         },
         //跳转到新闻详细页面
         getMore(ID){
           //通过post传参
           this.$router.push({name:'NewsDetail',params:{id:ID}});
         },
           handleEdit(index, row) {
        console.log(index, row);
      },
        },
        watch:{
          '$route':{
              handler(route){
                  if(route.name==='news'){
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

