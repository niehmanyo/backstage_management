<template>
    <el-menu :default-openeds="['1', '3']" background-color="rgb(48,65,86)" text-color="#fff" style="height: 100%;;"
        class="min-h-screen ">

        <div style="height: 60px; text-align: center; line-height: 60px; padding-bottom: 10px;">
            <img src="../assets/logo.svg"
                style="width: 20px; position: relative; top: 35px; margin-right: 5px; left: 50px;">
            <b style="color:white;" class="text-2xl">
                后台管理系统
            </b>
        </div>

        <el-menu-item>
            <template #title>

                <el-icon>
                    <House />
                </el-icon>
                <span>主页</span>
            </template>
        </el-menu-item>


        <el-menu-item>

            <template #title>

                <el-icon>
                    <Bowl />
                </el-icon>
                <span>菜品</span>
            </template>
        </el-menu-item>


    </el-menu>
</template>

<script>
export default {
    name: "Aside"
}
</script>