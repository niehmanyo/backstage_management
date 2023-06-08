<!-- <template>
    <div class="backstage-management min-h-screen min-w-screen">
      <h1>Backstage Management</h1>
  
      <div class="sidebar">
        <ul>
          <li v-for="item in menuItems" :key="item.id" @click="selectMenuItem(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
  
      <div class="content">
        <component :is="selectedComponent"></component>
      </div>
    </div>
  </template>
  
  <script>
  import Dashboard from '../components/Dashboard.vue';
  import Users from '../components/Users.vue';
  import Products from '../components/WelcomeItem.vue';

  
  export default {
    name: 'BackstageManagement',
    data() {
      return {
        menuItems: [
          { id: 1, name: 'Dashboard', component: 'dashboard' },
          { id: 2, name: 'Users', component: 'users' },
          { id: 3, name: 'Products', component: 'products' }
        ],
        selectedMenuItem: null
      };
    },
    computed: {
      selectedComponent() {
        if (this.selectedMenuItem) {
          switch (this.selectedMenuItem.component) {
            case 'dashboard':
              return Dashboard;
            case 'users':
              return Users;
            case 'products':
              return Products;
            default:
              return null;
          }
        }
        return null;
      }
    },
    methods: {
      selectMenuItem(item) {
        this.selectedMenuItem = item;
      }
    }
  };
  </script>
  
  <style scoped>
  .backstage-management {
    display: flex;
    flex-direction: row;
  }
  
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  </style> -->
<template>
  <div style="height: 100%;">
    <el-container class="layout-container-demo min-w-screen min-h-screen ">
      <el-aside style="height: 100%;" class="bg-light-100">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']" background-color="rgb(48,65,86)" text-color="#fff" style="height: 100%;">

            <div class="text-center justify-center font-bold text-light-50 text-2xl py-4 ">
              <img src="../assets/logo.svg" class="h-35px px-4 py-1" style="width:max-content">
              <b>
                后台管理系统
              </b>
            </div>

            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <message />
                </el-icon>主页
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>会员用户
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon>
                  <setting />
                </el-icon>菜品
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>


      <el-container style="height: 100%;" class="py-5 background: #000;">

        <el-header style="text-align: right; font-size: 12px padding-top:10cm background: #000;">

          <div class="toolbar text-1xl  bg-light-100">
            <el-dropdown class="bg-light-100">
              <el-icon style="margin-right: 8px; margin-top: 1px ">
                <setting />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>添加</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>${data.values}</span>
          </div>
        </el-header>

        <el-main>

          <div style="padding-top: 10px" class="px-4">

            <el-form>
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

          <el-scrollbar>
            <el-table :data="tableData" stript class="px-3" style="width: 100%;">
              <el-table-column fixed="left" width="180" prop="date" label="日期" />
              <el-table-column width=300 prop="name" label="姓名" />
              <el-table-column prop="address" label="住址" />

              <el-table-column fixed="right" prop="address">
                <template #default>
                  <el-button link type="primary" size="small" @click=delete1>删除</el-button>
                  <el-button link type="primary" size="small" @click=edit>编辑</el-button>
                </template>
              </el-table-column>

            </el-table>

            <div class="example-pagination-block py-4 px-4">
              <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                :page-sizes="[5, 10, 25, 50]" :small="small" :disabled="disabled" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
            </div>
          </el-scrollbar>
        </el-main>

      </el-container>
    </el-container>

  </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { Search } from '@element-plus/icons-vue'
import { create } from 'lodash';
import axios from 'axios';

const data = reactive([]);

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(1)
const pageSize2 = ref(10)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
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
    
    const response = await fetch('http://localhost:9090/user/page?PageNum=1&PageSize=3',{
          headers: {
            'Content-Type': 'application/json' // 设置请求头的 Content-Type
          }
  
        });
    if (response.ok) {
      const res = await response.json();
      // tableData = res.data
      tableData.value = res.data
      console.log(res.data)
    } else {
      console.error('请求失败:', response.status);
      console.log(response.json)
    }
  } catch (error) {
    console.error('请求错误:', error);
  }
}

fetchData(1, 3);

const delete1 = () => {
  console.log('click')
}

const edit = () => {
  console.log('click')
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  fetchData(1,3)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  fetchData(1,3)
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

.layout-container-demo .toolbar {
  /* display: inline-flex; */
  min-width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
  border-top: 1cm;
}
</style>
  
  