<!--
    In this example, we have a simple login form that includes a username input, a password input, and a login button. The form fields are validated using loginRules, and the login button triggers the login method when clicked.

Upon successful login, you can use Vue Router to navigate the user to the dashboard or any other desired page (this.$router.push('/dashboard')).

Make sure you have the necessary dependencies (Vue.js and Element Plus) installed and properly configured in your project for this code to work.
-->
<template>
    <el-row class="bg-blue-300  min-w-screen min-h-screen"> <!-- min-w-screen 水平铺满-->

        <el-col :span="16" class="grid-content flex items-center justify-center">
            <!-- flex items-center justify-center 垂直水平方向居中-->
            <div>
                <div class="font-bold text-5xl text-light-50 py-3">民生饭店管理系统</div>
                <!-- font-bold 加粗 text-4xl 字体大小 bg-background -->
                <span></span>

                <h2 class="text-2xl text-light-50">一个前后端分离平台</h2>
            </div>

        </el-col>

        <el-col :span="8" class="grid-content bg-light-50 flex items-center justify-center">

            <div class="login-container">
                <el-card class="login-card">
                    <h3 class="login-title text-3xl">欢迎回来</h3>
                    <h4 class="text-center font-bold">后台管理系统</h4>
                    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
                        <el-form-item prop="username">
                            <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"
                                placeholder="密码"></el-input>
                        </el-form-item>
                    <el-form-item class="login-button">
                        <el-button type="primary" @click="login">登 陆</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
        <!-- <div>
                <h3 class="text-3xl text-center py-4">欢迎回来</h3>
                </div>



                <div class="text-center text-1xl text-shadow-sm text-blue-400 py-4]">
                账号密码登陆
            </div> -->




        <!-- <div class=" py-4">
                        <el-form :model="form" label-width="120px" prop="">
                            <el-form-item label="用户名">
                                <el-input v-model="form.name" />
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="py-4">
                        <el-form :model="form" label-width="120px" prop="">
                        <el-form-item label="登陆密码">
                            <el-input v-model="form.name" />
                        </el-form-item>
                    </el-form>
                    </div>
                    

                        <div class="flex items-end justify-end">
                        <el-form-item>
                        <el-button type="primary" @click="onSubmit">登陆</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                    </div> -->

        <!-- <el-form ref="formRef" :model="dynamicValidateForm" label-width="120px" class="demo-dynamic">
                <el-form-item prop="email" label="Email" :rules="[
                    {
                        required: true,
                        message: 'Please input email address',
                        trigger: 'blur',
                    },
                    {
                        type: 'email',
                        message: 'Please input correct email address',
                        trigger: ['blur', 'change'],
                    },
                ]">
                    <el-input v-model="dynamicValidateForm.email" />
                </el-form-item>
                <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key"
                    :label="'Domain' + index" :prop="'domains.' + index + '.value'" :rules="{
                        required: true,
                        message: 'domain can not be null',
                        trigger: 'blur',
                    }">
                    <el-input v-model="domain.value" />
                    <el-button class="mt-2" @click.prevent="removeDomain(domain)">Delete</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
                        <el-button @click="addDomain">New domain</el-button>
                        <el-button @click="resetForm(formRef)">Reset</el-button>
                    </el-form-item>
                </el-form> -->


        </el-col>

    </el-row>
</template>


<script>

export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
            loginRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    if (this.loginForm.password == "123") {
                        this.$router.push('/dashboard');

                    } else {
                        this.$message.error('请输入正确的格式');
                    }

                    // Perform login authentication
                    // You can make an API call here to validate the user credentials

                    // Redirect to the dashboard on successful login

                } else {
                    this.$message.error('请输入正确的格式');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f7fa;
}

.login-card {
    width: 400px;
}

.login-title {
    text-align: center;
    margin-bottom: 20px;
    font: bold;
}

.login-form {
    padding: 20px;
}

.login-button {
    text-align: center;
}
</style>
<!-- 
<script setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref < FormInstance > ()
const dynamicValidateForm = reactive < {
    domains: DomainItem[],
    email: string
} > ({
    domains: [
        {
            key: 1,
            value: '',
        },
    ],
    email: '',
})

interface DomainItem {
    key: number
    value: string
}

const removeDomain = (item: DomainItem) => {
    const index = dynamicValidateForm.domains.indexOf(item)
    if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1)
    }
}

const addDomain = () => {
    dynamicValidateForm.domains.push({
        key: Date.now(),
        value: '',
    })
}

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>  -->