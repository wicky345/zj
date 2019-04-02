<template>
    <div>
        <el-button type="primary" @click="test()">查找</el-button>
        <ul v-for="item in testMsg" :key="item.id">
            <li>{{item.name}}</li>
        </ul>
        <img src="/static/img/logoWhite.png">
        <div id="loginmsg">
        <h3>欢迎登录</h3>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
            <el-input v-model="form.pass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="el-button-primary" @click="onSubmit">登录</el-button>
            </el-form-item>
            <h5 id="forgetPass">忘记密码？<a>点击找回</a></h5>
            <h5 id="register"><a>立即注册</a></h5>   
        </el-form>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            form:{
                name:"",
                pass:"",
            },
            testMsg:[],
        }
    },
    methods:{
        onSubmit(){
            console.log("登录成功!")
        },
         test() {
        this.$api.get('/api/test', "", response => {
          if (response.status == 200) {
            this.testMsg = response.data;
          }
        });
      }
    }

}
</script>
<style>
img{
    float:left;
}
#loginmsg{
    width:400px;
    margin:50px 100px;
    float:left;
    border:1px solid #dcdfe6;
    padding:30px 30px 30px 0px;
    color:#99a9bf;
    background-color:#fff;
}
.el-button-primary{
    width:370px;
    margin:24px 0px 0px -50px;
}
#forgetPass{
    font-size:16px;
    color:#99a9bf;
    font-weight:normal;
    float:left;
    margin:0px 0px 0px 40px;
}
#register{
    font-size:16px;
    color:#99a9bf;
    font-weight:normal;
    float:right;
    margin:0px;
}
a{
   color: #1f2f3d;
}
a:hover{
   text-decoration:underline; 
   color: #1f2f3d;
}
.el-form-item__label{
    color:#99a9bf;
}
</style>
