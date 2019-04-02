<template>
<div>
    <zj-header></zj-header>
      <!-- <el-button type="primary" @click="test()">查找</el-button>
        <ul v-for="item in testMsg" :key="item.id">
            <li><h1>{{item.src}}</h1></li>
        </ul> -->
    <div id="content">
    <el-carousel>
        <el-carousel-item v-for="item in bannerMsg" :key="item.id">
            <img v-bind:src="item.src">
            <h3>{{item.title}}</h3>
            <h4>{{item.sub_title}}</h4>
        </el-carousel-item>
    </el-carousel>
    <div id="dayNews">
    <el-col :span="8" id="card1">
    <el-card shadow="hover">
      <h3>这是新闻标题</h3>
      <h4>这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文</h4>
      <div class="bottom clearfix">
       <h4>这是新闻发布时间</h4>
      <el-button type="text" class="button">了解更多》</el-button>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8" id="card1">
    <el-card shadow="hover">
      <h3>这是新闻标题</h3>
      <h4>这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文</h4>
      <div class="bottom clearfix">
       <h4>这是新闻发布时间</h4>
      <el-button type="text" class="button">了解更多》</el-button>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8" id="card1">
    <el-card shadow="hover">
      <h3>这是新闻标题</h3>
      <h4>这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文这是新闻正文</h4>
      <div class="bottom clearfix">
       <h4>这是新闻发布时间</h4>
      <el-button type="text" class="button">了解更多》</el-button>
      </div>
    </el-card>
  </el-col>
    </div>
    </div>
    <zj-footer></zj-footer>
</div>
</template>

<script>
import zjHeader from '../components/header'
import zjFooter from '../components/footer'
export default {
    data(){
        return{
           bannerMsg:[],
           testMsg:[]
         }
        },
        methods:{
            init(){
             this.$api.get('/api/news', "", response => {
             if (response.status == 200) {
              this.bannerMsg = response.data;
             }
            });
         },
        //    test() {
        // this.$api.get('/api/news', "", response => {
        //   if (response.status == 200) {
        //     this.testMsg = response.data;
        //   }
        // });
     //}
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

<style>
#content{
    width:90%;
}
 .el-carousel{
     width:100%;
     margin:0px auto;
 }
  .el-carousel__item h3 {
    color: red;
    font-size: 18px;
    opacity: 0.75;
     float:left;
  }
 .el-carousel__item h4 {
    color: red;
    font-size: 14px;
    opacity: 0.75;
    float:left;
  }
    .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
   .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .dayNews{
     height:400px;
     width:1200px;
     margin:0px auto; 
  }
  /* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
</style>
