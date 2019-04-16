<template>
<div class="index">
<zj-header></zj-header>
<div id="zjIndex">
  <el-carousel :interval="5000" arrow="always" >
    <el-carousel-item v-for="item in pic" :key="item.id">
     <h3><img :src="item.src"></h3>
    </el-carousel-item>
  </el-carousel>
  </div>
  <div class="zjAdvantage">
    <h2>我们的优势</h2>
  <ul>
   <li><div class="card"><img src="/static/img/home_card01.png"><h3>优质的服务</h3></div></li>
   <li><div class="card"><img src="/static/img/home_card02.png"><h3>丰富的经验</h3></div></li>
   <li><div class="card"><img src="/static/img/home_card03.png"><h3>完美的售后</h3></div></li>
  </ul>
  </div>
  <div class="aboutus">
    <h2>关于众基</h2>
    <div class="abcontent">
  <img src="/static/img/home_card01.png"/>
  <ul>
    <li><router-link to="/introduction" class="link">公司简介<i class="el-icon-d-arrow-right"></i></router-link></li>
    <li><router-link to="/credit" class="link">荣誉展示<i class="el-icon-d-arrow-right"></i></router-link></li>
  </ul>
    </div>
    </div>
    <h2>企业动态</h2>
    <div class="news1">
     <img src="/static/img/home_card01.png">
    <div class="newscontent">
      <h3>{{news1.title}}</h3>
      <h4>{{news1.summary}}</h4>
      <h4>发布时间： {{news1.postTime}}</h4>
      <el-button type="primary" @click="newsMore(news1.ID)">了解更多</el-button>
      </div>
      </div>
       <div class="news2">
    <div class="newscontent">
      <h3>{{news2.title}}</h3>
      <h4>{{news2.summary}}</h4>
      <h4>发布时间： {{news2.postTime}}</h4>
      <el-button type="primary">了解更多</el-button>
      </div>
     <img src="/static/img/home_card01.png"/>
      </div>
      <h2>业务领域</h2>
      <ul class="business" v-for="item in businessMsg" :key="item.ID">
        <li><div class="card" @click="businessMore(item.ID)"><img v-bind:src="item.src"><h3>{{item.name}}</h3></div></li>
        </ul>
      <h2>合作伙伴</h2>
      <ul class="partner">
        <li><div class="card"><img src="/static/img/合作伙伴1.jpg"></div></li>
        <li><div class="card"><img src="/static/img/合作伙伴2.jpg"></div></li>
        <li><div class="card"><img src="/static/img/合作伙伴1.jpg"></div></li>
        <li><div class="card"><img src="/static/img/合作伙伴2.jpg"></div></li>
        <li><div class="card"><img src="/static/img/合作伙伴1.jpg"></div></li>
        <li><div class="card"><img src="/static/img/合作伙伴2.jpg"></div></li>
      </ul>
      <h2>联系我们</h2>
     <zj-footer></zj-footer>
  </div>
</template>

<style>
#zjIndex{
  width:100%;
  margin:84px auto 0px auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.zjAdvantage {
text-align:center;
margin-top:20px;
}
.zjAdvantage h2{
  color:#409EFF;
  width:300px;
  border-bottom:2px solid #409EFF;
  margin:0px auto;
}
.zjAdvantage h4{
  width:100px;
  height:100px;
  transition:width 2s,height 2s;
  background-color:#99a9bf;
}
.zjAdvantage h4:hover{
  width:150px;
  height:150px;
   background-color:#99a9bf;
}
.zjAdvantage ul{
  width:980px;
  margin:0px auto;
}
.zjAdvantage li{
  list-style:none;
   box-sizing: border-box;
  float:left;
  margin:60px;
   height:170px;
   opacity:.7;
}
.zjAdvantage li:hover{
  list-style:none;
   box-sizing: border-box;
  float:left;
  margin:60px;
  opacity:1;
}
.zjAdvantage img{
width:160px;
height:120px;
 background-color:#409EFF;
}
/* .card img{
  width:120px;
  height:120px;
  border-radius:50% 50%;
} */
.aboutus {
text-align:center;
margin-top:20px;
}
.aboutus h2{
  color:#409EFF;
  width:300px;
  border-bottom:2px solid #409EFF;
  margin:0px auto;
}
.aboutus img{
  width:160px;
  height:120px;
  float:left;
  margin-left: 30%;
  margin-top:50px;
  margin-right:50px;
}
.aboutus ul{
  width:160px;
  height:120px;
  font-size: 27px;
  padding-top:16px;
  float: left;
  margin-top:50px;
  list-style: none;
  margin-bottom: 40px;
}
.aboutus ul li{
  margin-bottom: 20px;
}
.aboutus ul li i{
  font-size:26px;
}
.aboutus ul .link{
  text-decoration:none;
  color:#1f2f3d;
}
.aboutus ul .link:hover{
  text-decoration:none;
  color:#888;
}
.aboutus .abcontent{
  background-color:#EDEDED;
  width:100%;
  height:230px;
  margin-top:30px;
  color:#1f2f3d;
}
h2{
  color:#409EFF;
  width:300px;
  border-bottom:2px solid #409EFF;
  margin:20px auto 0px auto;
}
.news1{
  height:300px;  
}
.news1 img{
  width:200px;
  float:left;
  margin-left:30%;
  margin-right:20px;
  margin-top:20px;
}
.news1 .newscontent{
float:left;
width:300px;
text-align:left;
 color:#888;
}
.news2{
  height:300px;  
}
.news2 img{
  width:200px;
  float:left;
  margin-top:20px;
}
.news2 .newscontent{
float:left;
width:300px;
text-align:left;
 margin-left:30%;
  margin-right:20px;
   color:#888;
}
.index .business{
  width:995px;
  margin:0px auto;
}
 .business  li{
  list-style:none;
   box-sizing: border-box;
  float:left;
  margin:36px;
   height:170px;
   opacity:.7;
}
 .business  li:hover{
  list-style:none;
   box-sizing: border-box;
  float:left;
  margin:36px;
  opacity:1;
}
 .business  li  img{
width:160px;
height:120px;
 background-color:#409EFF;
}
/* .card img{
  width:120px;
  height:120px;
  border-radius:50% 50%;
} */
.partner{
  width:995px;
  margin:0px auto;
}
.partner li{
  list-style:none;
   box-sizing: border-box;
  float:left;
  margin:20px;
   height:110px;
}
.partner img{
width:120px;
height:90px;
}

</style>
<script>
import zjFooter from '../components/footer'
import zjHeader from '../components/header'
export default {
  data() {
    return {
       valueChild:true,
       posts:{},
      pic: [
        { id: "1", src: "/static/img/coat.jpg" },
        { id: "2", src: "/static/img/corn.jpg" },
        { id: "3", src: "/static/img/T.jpg" },
        { id: "4", src: "/static/img/mung.jpg" }
      ],
      newsMsg:[],
      businessMsg:[],
      news1:'',
      news2:'',
      length:'',

    };
  },
    methods:{
            init(){
              //获取业务领域信息
             this.$api.get('/api/business', "", response => {
             if (response.status == 200) {
              this.businessMsg = response.data;
             }
            });
            //获取新闻信息
            this.$api.get('/api/news', "", response => {
             if (response.status == 200) {
               this.length=response.data.length;
              this.newsMsg = response.data;
              this.news1=this.newsMsg[this.length-1];
              this.news2=this.newsMsg[this.length-2];
             }
            });
         },
         businessMore(ID){
             this.$router.push({name:'BusinessDetail',params:{id:ID}});//类似post传参
         },
           //获取新闻详情信息
        newsMore(ID){
           this.$router.push({name:'NewsDetail',params:{id:ID}});//类似post传参
        }
        },
        watch:{
          '$route':{
              handler(route){
                  if(route.name==='/'){
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
zjFooter,
zjHeader
  }
};
</script>