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
                <el-button @click="resetForm()">重置</el-button>
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
        userToken:'',
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
        xhrFields: {
          withCredentials: true
        },
        data:{ //可以传参数
          username:this.ruleForm.username,
          password:this.ruleForm.password
        }
      })
      .then((response) => { //response里面返回了请求成功后的数据
        //防止$router.push is undefind使用箭头函数 =>上下文贯穿，this的上下文为外层的this
        console.log(response)
        console.log(response.data)
        console.log(response.data.state)
        console.log(response.data.message)
        let num = response.data.state;
        console.log(num);
        if(num == 200){
           if(response.data.data.login){//后端说了，这个没有也一样
            //前端登录成功后得到后台的token,并缓存在localStorage中,第三个参数是过期时间，以分钟为单位
            localStorage.setItem("token",response.data.data.token,3);
            this.$router.push('/Home');
          }
            }else if(num == 101){
              alert(response.data.message)
            }else if(num == 102){
              alert(response.data.message)
            }else{
              alert('未知错误,请联系你爸爸');
            }
      })
      .catch(function(error){// error里面返回了请求失败后的错误信息
          // alert('用户名或密码错误');
          alert('未知错误,请联系你爸爸');
      })
      },
      resetForm:function (){
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
