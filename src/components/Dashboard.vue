<!-- 
    In this example, we have a dashboard layout consisting of a sidebar and a content area.
    The sidebar contains a menu using Element Plus's el-menu component. 
    The activeMenu property is used to keep track of the currently active menu item, 
    and the isSidebarCollapsed property controls whether the sidebar is collapsed or not.

    You can add more menu items or submenus as needed, and customize the icons and titles accordingly. 
    The router-link component can be used within el-menu-item and el-submenu to navigate to different pages or components based on the selected menu item.

    To use this dashboard, make sure you have Vue Router and Element Plus properly installed and configured in your project.
 -->
 
<template>
    <div class="dashboard-container">
        <el-row>
            <el-col :span="4">
                <div class="sidebar">
                    <el-menu :default-active="activeMenu" :collapse="isSidebarCollapsed" unique-opened
                        default-openeds="sub1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                        router class="el-menu-vertical-demo">
                        <el-menu-item index="dashboard">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">Dashboard</span>
                        </el-menu-item>
                        <el-submenu index="products">
                            <template slot="title">
                                <i class="el-icon-s-goods"></i>
                                <span>Products</span>
                            </template>
                            <el-menu-item index="products_list">Product List</el-menu-item>
                            <el-menu-item index="add_product">Add Product</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="orders">
                            <i class="el-icon-s-order"></i>
                            <span slot="title">Orders</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="content">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeMenu: 'dashboard',
            isSidebarCollapsed: false,
        };
    },
};
</script>
  
<style scoped>
.dashboard-container {
    height: 100vh;
}

.sidebar {
    height: 100%;
    background-color: #545c64;
}

.content {
    padding: 20px;
    height: 100%;
    background-color: #f5f7fa;
}

.el-menu-vertical-demo {
    width: 100%;
}

.el-menu-vertical-demo .el-submenu {
    color: #fff;
}

.el-menu-vertical-demo .el-submenu__title:hover {
    color: #ffd04b;
}

.el-menu-vertical-demo .el-menu-item:hover,
.el-menu-vertical-demo .el-submenu__title:hover {
    background-color: #000c17;
}

.el-menu-vertical-demo .el-submenu.is-active .el-submenu__title,
.el-menu-vertical-demo .el-menu-item.is-active {
    background-color: #000c17;
}
</style>


