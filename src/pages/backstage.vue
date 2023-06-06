<template>
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
  </style>
  