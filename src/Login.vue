<template>
    <div class="login-f">
        <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px">
            <el-form-item label="用户名" prop="user">
                <el-input type="text" v-model="ruleForm.user" autocomplete="off" prefix-icon="el-icon-view"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" prefix-icon="el-icon-view"></el-input>
            </el-form-item>
            <el-form-item style="align-items: center">
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
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
          pass: '',
          user: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: validateUser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
          console.log(this.user)
        this.$refs[formName].validate((valid) => {
          if (valid) {
              if(this.user == 'admin'){
                  if(this.pass == 123456){
                      this.$router.push('/home')
                  }else{
                      alert('密码输入错误')
                  }
              }else{
                  alert('用户名输入错误')
              }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.login-f{
    width: 400px;
    height: 300px;
    position: absolute;
    right: 10%;
    top: 40%;
}
</style>
