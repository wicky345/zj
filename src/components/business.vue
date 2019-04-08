<template>
<div>
    <zj-header></zj-header>
  <!-- banner部分 -->
  <div class="banner business">
    <div class="title">
      <p>业务展示</p>
      <p class="en">Business Display</p>
    </div>
  </div>
  <!-- main部分 -->
  <div class="main business">
    <div class="layui-container">
      <el-row :gutter="20" class="content" v-for="item in businessMsg" :key="item.ID">
        <el-col :span="12">
        <div class="content-img"><img v-bind:src="item.src"></div>
        </el-col>
        <el-col :span="12">
        <div class="right">
          <p class="label">{{item.name}}</p>
          <p class="detail">{{item.summary}}</p>
          <div><el-button type="primary" @click="more(item.ID)">了解更多</el-button></div>
        </div>
        </el-col>
      </el-row>  
    </div>
  </div>
  <!-- footer部分 -->
<zj-footer></zj-footer>
  </div>
  </template>

  <script>
import zjHeader from '../components/header'
import zjFooter from '../components/footer'
export default {
    data(){
        return{
           businessMsg:[],
         }
        },
        methods:{
            init(){
             this.$api.get('/api/business', "", response => {
             if (response.status == 200) {
              this.businessMsg = response.data;
             }
            });
         },
         more(ID){
             this.$router.push({name:'BusinessDetail',params:{id:ID}});//类似post传参

         }
        },
        watch:{
          '$route':{
              handler(route){
                  if(route.name==='business'){
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
  /*主体—产品*/
.main-business{padding-top: 90px; padding-bottom: 130px;}
.main-business p{font-size: 16px; color: #ababab; line-height: 28px;}
.main-business p.title
,.main-service p.title{color: #484848; font-size: 24px; text-align: center; line-height: 160px;}
.main-business p.title span
,.main-service p.title span{color: #2db5a3;}
.main-business .content{border: 1px solid #DEDEDE; padding: 30px 36px 0 36px; text-align: center; transition: 0.3s;}
.main-business .content p.label{font-size: 18px; color: #939393; line-height: 46px; padding-top: 6px;}
.main-business .content .more{text-decoration:none;font-size: 18px; color: #a1d8cb; line-height: 68px;}
.main-business .content:hover{box-shadow: 0 0 3px 3px #EEE; transition: 0.3s;}
.main-business .content img{transition: 2s;}
.main-business .content img:hover{transform: rotateY(180deg);}

/** 产品 */
.banner{height: 320px; margin-top: 80px;}
.banner.business{background: url(/static/img/nav_img1.jpg) no-repeat center top; background-size: cover;}
.main.business{padding: 30px 0 75px 0;}
.main.business .content{padding: 50px 0; border-bottom: 1px solid #e8e8e8;}
.main.business .content .content-img{text-align: center;}
.main.business .content .content-img img{width: 90%;}
.main.business .content .label{color: #565656; font-size: 30px; line-height: 78px; margin-top: 32px;}
.main.business .content .detail{font-size: 16px; line-height: 28px; color: #d7d7d7; padding-bottom: 30px;}
.main.business .content .more{text-decoration:none;color: #a0d2cc; font-size: 16px; line-height: 30px; padding:10px 11px 10px 23px; border: 1px solid #a0d2cc; border-radius: 3px;width:80px;height:30px;}

.banner .title{padding-top: 60px;}
.banner .title:active{padding-top: 60px; transition: 1.5s;}
.banner .title p{color: #606060; font-size: 36px; text-align: center; line-height: 50px; letter-spacing: 5px;}
.banner .title p.en{font-size: 20px; letter-spacing: 3px;}

/*小屏幕*/
@media screen and (min-width: 768px){
  .main-business p.title
  ,.main-service p.title{font-size: 36px; line-height: 216px;}
  .main.business .content .content-img{text-align: center;}
}
@media screen and (min-width: 768px) and (max-width: 992px){
  .main.business .content div.right{padding-left: 20px;text-align:left;}
  .main.business .content .label{line-height: 40px; margin-top: 0;}
  .main.business .content .detail{padding-bottom: 10px;}
}
/*大屏幕*/
@media screen and (min-width: 992px){
  .main.business .content{padding: 100px 0;}
  .main.business .content div.right{padding-left: 0;text-align:left;}

}
  </style>