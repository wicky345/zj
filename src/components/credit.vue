<template>
<div>
  <zj-header></zj-header>
  <!-- banner部分 -->
  <div class="banner credit">
    <div class="title active">
      <p>企业荣誉</p>
      <p class="en">Company Honors</p>
    </div>
  </div>
  <!-- main -->
  <div class="main-credit">
    <el-row :gutter="12" class="creditList">
      <el-col :span="6"><el-card><img src="/static/img/us_img1.jpg"><h6>荣誉1</h6></el-card></el-col>
       <el-col :span="6"><el-card><img src="/static/img/us_img1.jpg"><h6>荣誉2</h6></el-card></el-col>
        <el-col :span="6"><el-card><img src="/static/img/us_img1.jpg"><h6>荣誉3</h6></el-card></el-col>
         <el-col :span="6"><el-card><img src="/static/img/us_img1.jpg"><h6>荣誉4</h6></el-card></el-col>
    </el-row>
 
  </div>
  <zj-footer></zj-footer>
  </div>
  </template>
<style>
/* @import '../assets/layui.css'; */
/** 动态 */
#cleardiv{clear:both;}
.banner{height: 320px;margin-top: 80px;}
.banner.credit{background: url(/static/img/nav_img3.jpg) no-repeat center top; background-size: cover;}
.banner .title{padding-top: 170px;}
.banner .title.active{padding-top: 60px; transition: 1.5s;}
.banner .title p{color: #606060; font-size: 36px; text-align: center; line-height: 50px; letter-spacing: 5px;}
.banner .title p.en{font-size: 20px; letter-spacing: 3px;}

.main-credit .creditList{margin:50px 0px;}
.main-credit .creditList img{width:200px;height:200px;}
.main-credit .detail{width:1100px;margin:50px auto 10px auto;}
.main-credit .detail img{float:left;width:400px;height:300px;}
.main-credit .detail p{float:left;margin-left:50px;width:650px;height:500px;line-height:1.7em;font-size:16px;text-align:left;}
.main-credit .clear{clear:both;}
.main-credit .activity{width:740px; height:900px;margin:10px auto;background-color:#fff;position:relative;}
 .box{position:absolute;}
 .box.activity1{top:0px;left:0px;}
 .box.activity2{top:10px;left:400px;}
 .box.activity3{top:300px;left:0px;}
 .box.activity4{top:450px;left:270px;}
 .box.activity5{top:450px;left:520px;}
.main-credit .environment{width:1190px;height:370px;background-color:#fff;border-radius:5px;margin:50px auto;border:1px solid #ccc;}
.main-credit .environment .top{width:1180px;height:20px;background:#fff;font-size:20px;padding-left:10px;color:#000;text-decoration:none;line-height:2px;text-align:left;border-bottom:1px solid #e6e9ed;}
.main-credit .environment .pic_left{width:940px;height:340px;float:left;}
.main-credit .environment .pic_right{width:250px;height:340px;float:left;}
.main-credit .environment .pic_left .pic img{float:left;padding-left:10px;padding-top:10px;}
.main-credit .environment .pic_right .pic img{float:right;padding-top:10px;padding-right:10px;}

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

