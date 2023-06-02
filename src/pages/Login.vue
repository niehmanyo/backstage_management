<template>
    <el-row class="bg-light-50 min-w-screen min-h-screen"> <!-- min-w-screen 水平铺满-->

        <el-col :span="14" class="grid-content bg-blue-300 flex items-center justify-center">
            <!-- flex items-center justify-center 垂直水平方向居中-->
            <div>
                <div class="font-bold text-5xl text-light-50">民生饭店管理系统</div>
                <!-- font-bold 加粗 text-4xl 字体大小 bg-background -->
                <span></span>

                <h2 class="text-2xl text-light-50">一个前后端分离平台</h2>
            </div>

        </el-col>

        <el-col :span="9" class="grid-content bg-light-50 flex items-center justify-center">


            <div>
                <div>
                    <h3 class="text-2xl text-center ">欢迎回来</h3>
                </div>



                <div class="text-center text-shadow-sm text-blue-400">
                    账号密码登陆
                </div>




                <el-form :model="form" label-width="120px" prop="">
                    <el-form-item label="用户名">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-form>

                <el-form :model="form" label-width="120px" prop="">
                    <el-form-item label="登陆密码">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-form>

            </div>

        </el-col>

    </el-row>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

