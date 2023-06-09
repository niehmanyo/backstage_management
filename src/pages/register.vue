<template>
    <div class="register-container min-w-screen ">
      <el-card class="register-card">
        <h3 class="register-title">用户注册</h3>
        <el-form :model="registerForm" :rules="registerRules" ref="registerForm" class="register-form">
          <el-form-item prop="username" label="用户名">
            <el-input v-model="registerForm.username"></el-input>
          </el-form-item>
        
          <el-form-item prop="password" label="密码">
            <el-input v-model="registerForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        registerForm: {
          username: '',
          email: '',
          password: '',
        },
        registerRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      submitForm() {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            // 发送注册请求
            // 这里可以使用Axios或其他HTTP库发送API请求
            // 示例中的代码仅为演示，实际需要根据具体情况自行修改
            const { username, email, password } = this.registerForm;
            const requestData = { username, email, password };
  
            // 假设注册接口返回一个Promise对象
            this.registerUser(requestData)
              .then(response => {
                // 注册成功的处理逻辑
                console.log(response);
                this.$message.success('注册成功');
              })
              .catch(error => {
                // 注册失败的处理逻辑
                console.error(error);
                this.$message.error('注册失败');
              });
          } else {
            this.$message.error('请填写所有必填字段');
          }
        });
      },
      registerUser(requestData) {
        // 假设这是一个发送注册请求的函数
        return new Promise((resolve, reject) => {
          // 这里可以使用Axios或其他HTTP库发送API请求
          // 示例中的代码仅为演示，实际需要根据具体情况自行修改
          setTimeout(() => {
            // 模拟注册成功的情况
            resolve({ message: 'Registration successful' });
  
            // 模拟注册失败的情况
            // reject({ message: 'Registration failed' });
          }, 1000);
        });
      },
    }
    }
</script>