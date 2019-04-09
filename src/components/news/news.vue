<template>
<div>
  <zj-header></zj-header>
  <!-- banner部分 -->
  <div class="banner news">
    <div class="title active">
      <p>企业新闻</p>
      <p class="en">Company News</p>
    </div>
  </div>
  <!-- main -->
   <!-- <router-link to="/news/newsDetail">{{链接测试}}</router-link> -->
  <div class="main-news">
    <div class="layui-container">
      <div class="layui-row layui-col-space20">
        <div class="layui-col-lg6 content" v-for="item in newsData" :key="item.ID">
          <div>
            <div class="news-img"><a href="newsDetail.html"><img src="/static/img/news_img1.jpg"></a></div><div class="news-panel">
              <strong><a href="newsDetail.html">{{item.title}}</a></strong>
              <p class="detail"><span>{{item.summary}}</span><span @click="getMore(item.ID)">[详细]</span></p>
              <p class="read-push">点赞 <span>{{item.n_like}}</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>{{item.postTime}}</span></p>
            </div>
          </div>
        </div>
        <div id="cleardiv"></div>
      </div>
      <div id="newsPage">
        <br/>
        <el-pagination
          background
           layout="prev, pager, next"
           :total="1000">
        </el-pagination></div>
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
.banner.news{background: url(/static/img/nav_img3.jpg) no-repeat center top; background-size: cover;}
.banner .title{padding-top: 170px;}
.banner .title.active{padding-top: 60px; transition: 1.5s;}
.banner .title p{color: #606060; font-size: 36px; text-align: center; line-height: 50px; letter-spacing: 5px;}
.banner .title p.en{font-size: 20px; letter-spacing: 3px;}
.main-news{padding: 70px 0 40px 0;}
.main-news .content > div{padding-bottom: 40px; border-bottom: 1px dashed #eaeaea; position: relative;height:140px;}
.main-news .content .news-img{display: inline-block; width: 30%; vertical-align: top;}
.main-news .content .news-img img{max-width: 90%;}
.main-news .content .news-panel{display: inline-block; width: 70%; vertical-align: top; padding-left: 5px; box-sizing: border-box;}
.main-news .content .news-panel strong a{display: block; color: #555; font-size: 18px; line-height: 26px; overflow: hidden; text-overflow:ellipsis; white-space: nowrap;text-decoration: none;}
.main-news .content .news-panel p.detail{color: #777; line-height: 24px;text-align:left;}
.main-news .content .news-panel p.detail span{color: #333;text-decoration:none;}
.main-news .content .news-panel p.detail span:hover{color: #AAA;}
.main-news .content .news-panel p.read-push{color: #AAA; padding-top: 5px;}
.main-news #newsPage .layui-laypage{display: block; text-align: center; margin-top: 70px;}
.main-news #newsPage .layui-laypage a,.main-news #newsPage .layui-laypage span{font-size: 18px; line-height: 40px; height: 40px; margin-right: 20px; border-radius: 3px; color: #e3e3e3;}
.layui-col-space20>* {padding: 10px;}
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

