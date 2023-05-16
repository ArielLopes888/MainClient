<template>
    <div class="sidebar-container">
      <button class="sidebar-toggle" @click="toggleSidebar">Toggle Sidebar</button>
      <aside :class="{ 'sidebar-visible': isSidebarVisible }">
        <router-link class="sidebar-option" v-for="option in options" :key="option.id" :to="option.route">
          {{ option.label }}
        </router-link>
      </aside>
      <div class="sidebar-overlay" v-if="isSidebarVisible" @click="hideSidebar"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarVisible: false,
        options: [
          { id: 1, label: 'Opção 1', route: '/opcao1' },
          { id: 2, label: 'Opção 2', route: '/opcao2' },
          { id: 3, label: 'Opção 3', route: '/opcao3' }
        ]
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarVisible = !this.isSidebarVisible;
      },
      hideSidebar() {
        this.isSidebarVisible = false;
      }
    }
  };
  </script>
  
  <style>
  .sidebar-container {
    position: relative;
  }
  
  .sidebar-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    background-color: #f2f2f2;
    border: none;
    cursor: pointer;
    z-index: 1;
  }
  
  aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    background-color: #f2f2f2;
    padding: 20px;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
    z-index: 2;
  }
  
  .sidebar-visible {
    transform: translateX(0);
  }
  
  .sidebar-option {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    text-align: center;
    text-decoration: none;
    color: #333;
  }
  
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  </style>
  