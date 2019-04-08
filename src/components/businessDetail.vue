<template>
<div>
  <zj-header></zj-header>
  <!-- main部分 -->
  <div class="main-newsdate">
    <div class="layui-container" v-for="item in msg" :key="item.ID">
      <p class="news"><router-link to="/business">业务领域</router-link> >{{item.name}}</p>
      <h1>{{item.name}}</h1>
      <p class="introTop">{{item.summary}}</p>
      <div><img v-bind:src="item.src" alt="新闻详情图"></div>
      <p class="introBott">{{item.content}}</p>
    </div> 
  </div>
  <!-- footer部分 -->
  <zj-footer></zj-footer>
  </div>
</template>
<script>
import zjHeader from '../components/header'
import zjFooter from '../components/footer'
export default{
    data(){
        return{
          msg:[],
        }
    },
 methods:{
            init(){
               this.$api.post('/api/businessDetail', {name:this.$route.params.id}, response => {
                if(response.status==200){
                   this.msg=response.data;
                }
      });
         },
        },
        watch:{
          '$route':{
              handler(route){
                  if(route.name==='businessDetail'){
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
.main-newsdate .introTop{padding-bottom: 28px; font-size: 18px; line-height: 20px; text-align: left;}
.main-newsdate .introBott{font-size: 18px; line-height: 42px; text-align: justify; padding: 40px 0 102px 0;}
.main-newsdate img{max-width: 100%;}

</style>