<template>
  <div style="height: 100%;">
    <el-container class="layout-container-demo  min-h-screen ">

      <el-aside style="height: 100%;" class="bg-light-100">
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
                <UserFilled />
              </el-icon>
              <span>会员用户</span>
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

      </el-aside>

      <el-container style="height: 100%;">

        <!-- <el-header class=""> -->
        <!-- display: inline-flex;
            min-width: 100%;
            align-items: left;
            justify-content: center;
            height: 100%;
            right: 20px;
            border-top: 1cm; -->


        <el-header style="text-align: left ;
                                  border-bottom: 1px solid #ccc;
                                  line-height: 60px;
                                  display: flex;">
          <div class="toolbar text-1xl py-4">

            <el-dropdown style="cursor: pointer;">
              <el-icon style="margin-right: 8px; margin-top: 1px">
                <ArrowDown />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>

                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>用户名</span>
          </div>
        </el-header>



        <!-- </el-header> -->


        <el-main>


          <div style="padding: 30px 0;">
            <el-form class="px-4">
              <el-row>
                <el-form-item>
                  <el-input style="width: 25vh; padding-right: 1vh;" v-model="input" :suffix-icon="Search"
                    placeholder="请输入搜索日期">
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input style="width: 25vh; padding-right: 1vh;" v-model="input" :suffix-icon="Search"
                    placeholder="请输入搜索用户号">
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input style="width: 25vh; padding-right: 1vh;" v-model="input" :suffix-icon="Search"
                    placeholder="请输入菜品">
                  </el-input>
                </el-form-item>

                <el-form-item class="px-2">
                  <el-button type="primary" @click="">搜索</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </div>

          <div class="px-4">
            <el-row>
              <el-form-item class="px-3">
                <el-button type="success" :icon="Edit" @click="">新增</el-button>
              </el-form-item>
              <el-form-item class="px-3">
                <el-button type="danger" :icon="Delete" @click="">批量删除</el-button>
              </el-form-item>
              <el-form-item class="px-3">
                <el-button type="primary" :icon="Upload" @click="">导入</el-button>
              </el-form-item>
              <el-form-item class="px-3">
                <el-button type="primary" :icon="Download" @click="">导出</el-button>
              </el-form-item>
            </el-row>
          </div>


          <div>
            <el-scrollbar class="min-w-screen min-h-screen">
              <el-table :data="tableData" stript class="px-3" border style="width: 100%;">
                <el-table-column width="180" prop="date" label="日期" />
                <el-table-column width=300 prop="name" label="姓名" />
                <el-table-column prop="address" label="住址" />

                <el-table-column label="操作" fixed="right" prop="address">
                  <template #default>
                    <el-button type="danger" size="small" @click=delete1>删除</el-button>
                    <el-button type="primary" size="small" @click=edit>编辑</el-button>
                  </template>
                </el-table-column>

              </el-table>

              <div class="example-pagination-block py-4 px-4">
                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                  :page-sizes="[5, 10]" :small="small" :disabled="disabled" :background="background"
                  layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                  @current-change="handleCurrentChange" />
              </div>
            </el-scrollbar>
          </div>
        </el-main>


      </el-container>


    </el-container>

  </div>
</template>
  
<script lang="ts" setup>

import { reactive, ref } from 'vue'
import { Menu as IconMenu, Message, Setting, Edit, ArrowDown, UserFilled, Bowl, Delete, Upload, Download } from '@element-plus/icons-vue'
import { Search, House } from '@element-plus/icons-vue'
import { create } from 'lodash';
import axios from 'axios';

const data = reactive([]);


const currentPage4 = ref(1)

const pageSize4 = ref(5)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const input = ref("")

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}

const a = Array.from({ length: 0 });
const item1 = {
  date: '2016-05-02',
  name: 'Nie',
  address: 'No. 189, Grove St, Los Angeles',
}
a.push(item1)
const tableData = ref(a)

async function fetchData(pageNum: number, pageSize: number) {
  try {

    const response = await fetch(`http://localhost:9090/user/page?PageNum=${pageNum}&PageSize=${pageSize}`, {
      headers: {
        'Content-Type': 'application/json' // 设置请求头的 Content-Type
      }
    });
    if (response.ok) {
      const res = await response.json();
      // tableData = res.data
      tableData.value = res.data //因为tableData是个变量，所以要用tableData.value来保存
      console.log(res.data)
    } else {
      console.error('请求失败:', response.status);
      console.log(response.json)
    }
  } catch (error) {
    console.error('请求错误:', error);
  }
}

fetchData(currentPage4.value, pageSize4.value)

const delete1 = () => {
  console.log('click')
}



const edit = () => {
  console.log('click')
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  fetchData(currentPage4.value, pageSize4.value)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  fetchData(currentPage4.value, pageSize4.value)
}




</script>
  
<style scoped>
.example-pagination-block+.example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: 1cap;
  border-bottom: 1cap;
  border-color: black;
}

.layout-container-demo .el-main {
  padding: 0;
}

.headbg {
  background: #42b983;
}

.layout-container-demo .toolbar {}
</style>
  
