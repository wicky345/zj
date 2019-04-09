<template>
<div>
  <zj-header></zj-header>
  <!-- main部分 -->
  <div class="main-newsdate">
    <div class="layui-container" v-for="item in msg" :key="item.ID">
      <p class="news"><router-link to="/news">企业新闻</router-link> >新闻详情</p>
      <h1>{{item.title}}</h1>
      <el-row>
        <el-col :span="6"><p class="introTop"></p></el-col>
       <el-col :span="4"><p class="introTop">{{item.author}}</p></el-col>
        <el-col :span="4"><p class="introTop">发布时间：{{item.postTime}}</p></el-col>
         <el-col :span="4"><p class="introTop">点赞数：{{item.n_like}}</p></el-col>
         <el-col :span="6"><p class="introTop"></p></el-col>
      </el-row>
      <p class="introBott">{{item.content}}</p>
    </div> 
  </div>
  <!-- footer部分 -->
  <zj-footer></zj-footer>
  </div>
</template>
<script>
import zjHeader from '@/components/header'
import zjFooter from '@/components/footer'
export default{
    data(){
        return{
          msg:[],
        }
    },
 methods:{
            init(){
               this.$api.post('/api/newsDetail', {name:this.$route.params.id}, response => {
                if(response.status==200){
                   this.msg=response.data;
                }
      });
         },
        },
        watch:{
          //检测路由，当路由发生变化时重新获取数据
          '$route':{
              handler(route){
                  if(route.name==='newsDetail'){
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
/*动态详情页*/
.main-newsdate{width:90%;margin: 80px auto 0px auto; text-align: center;}
.main-newsdate .news{text-align: left; line-height: 104px;}
.main-newsdate .news a{color:#333;text-decoration: none;}
.main-newsdate .news a:hover{color:#777;} 
.main-newsdate h1{padding-top: 6px;}
.main-newsdate .pushtime{color: #686868; font-size: 18px; line-height: 82px;}
.main-newsdate .introTop{font-size: 18px;text-align:center;}
.main-newsdate .introBott{font-size: 18px; line-height: 42px; text-align: justify; padding: 40px 0 102px 0;}
.main-newsdate img{max-width: 100%;}

</style>