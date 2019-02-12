<template>
  <div class="test" style="height:99.5vh">
    <img  src="./assets/time.jpg" style="width:100%;height:99.5vh"/>
    <div class="login-f">
        <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px">
            <el-form-item label="用户名" prop="user">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" prefix-icon="el-icon-view"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="pass">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" prefix-icon="el-icon-view"></el-input>
            </el-form-item>
            <el-form-item style="align-items: center">
                <el-button type="primary" @click="login()">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length<5 ) {
            callback(new Error('少了'));
          }else if(value.length > 15){
              callback(new Error('多了'));
          }
          this.pass = value
          callback();
        }
      };
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          this.user = value
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          username: ''
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateUser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      login:function () {
        console.log(this.ruleForm.username);
        this.$ajax({
        method:'post', //请求方式
        url:'/user/login', // 请求地址
        data:{ //可以传参数
          username:this.ruleForm.username,
          password:this.ruleForm.password
        }
      })
      .then((response) => { //response里面返回了请求成功后的数据
        //防止$router.push is undefind使用箭头函数 =>上下文贯穿，this的上下文为外层的this
        this.$router.push('/Home');
      })
      .catch(function(error){// error里面返回了请求失败后的错误信息
        console.log(error)
      })
      }
    }
  }
</script>

<style>
.login-f{
    width: 400px;
    height: 300px;
    position: absolute;
    right: 39%;
    top: 68%;
}
template{
  background-image: './assets/time.jpg'
}
</style>
