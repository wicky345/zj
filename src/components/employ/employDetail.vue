<template>
<div>
  <zj-header></zj-header>
  <!-- main部分 -->
  <div class="main-employDetail">
    <div class="layui-container" v-for="item in msg" :key="item.ID">
     <div class="summary_panel">
       <div class="content">
      <p class="name">{{item.name}}</p>
      <p class="detail">{{item.place}}</p>
      <p class="detail">|{{item.category}}</p>
      <p class="detail">|{{item.experience}}</p>
      <p class="detail">|{{item.education}}</p>
      <p class="detail">|{{item.nature}}</p>
      <p class="detail">|{{item.payment}}</p>
      <el-button class="el-button_primary" type="primary" @click="mail()">立即投递</el-button>
      <div class="clear"></div>
     <div class="time"><i class="el-icon-time"></i>发布时间：{{item.pub_time}}</div>
     <div class="number"><i class="el-icon-time"></i>招聘人数：{{item.number}}</div>
       <div class="clear"></div>
       </div>
    </div> 
    <div class="detail_content"> 
      <h3>工作内容</h3>
      <p>{{item.content}}</p>
      <h3>岗位要求</h3>
      <p>{{item.requirement}}</p>
    </div>
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
               this.$api.post('/api/employDetail', {name:this.$route.params.id}, response => {
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
                  if(route.name==='employDetail'){
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
.main-employDetail{width:100%;margin: 80px auto 0px auto; text-align: left;}
.main-employDetail .summary_panel{width:100%;background-color:#f5faff;}
.main-employDetail .summary_panel .content{width:80%;margin:20px auto;padding:20px 0px 40px 0px;}
.main-employDetail .summary_panel .content .name{font-size:26px; color:#333;}
.main-employDetail .summary_panel .content .detail{float:left;margin-bottom:20px;}
.main-employDetail .summary_panel .content .el-button_primary{width:200px;height:50px;font-size:20px;float:right;}
.main-employDetail .summary_panel .content .clear{clear:both;}
.main-employDetail .summary_panel .content .time{width:200px;float:left;margin-right:20px;}
.main-employDetail .summary_panel .content .number{width:200px;float:left;}
.main-employDetail .detail_content{width:80%;margin:60px auto;}
.main-employDetail .detail_content h3{font-size:18px;border-bottom:1px solid #f0f0f0;height:42px;margin-top:34px;}
.main-employDetail .detail_content p{font-size:16px;line-height:28px;}

</style>