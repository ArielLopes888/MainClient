<template>
    <div class="sidebar-container">
        <button class="sidebar-button" @click="buttonSidebar">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
        </button>
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
                { id: 1, label: 'Encontrar Pessoas', route: '/findpeople' },
                { id: 2, label: 'Meus Encontros', route: '/opcao2' },
                { id: 3, label: 'Perfil', route: '/profile' }
            ]
        };
    },
    methods: {
        buttonSidebar() {
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

.sidebar-button {
    top: 20px;
    right: 20px;
    padding: 10px;
    background-color: #f2f2f200;
    border: none;
    cursor: pointer;
    z-index: 1;
}

.menu-line {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #333;
    margin-bottom: 4px;
}

.menu-line:last-child {
    margin-bottom: 0;
}

aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    background-color: #f0f675;
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
    background-color: #ffffff;
    text-align: center;
    text-decoration: none;
    color: #333;
    border-radius: 20px
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
  