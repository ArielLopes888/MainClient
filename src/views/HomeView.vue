
<script setup>
import '../assets/global.css'
import SidebarComponent from '../components/SidebarComponent.vue';
</script>

<template class="background">
    <SidebarComponent />
    <div class="centered-content">
        <h1>HOME</h1>
    </div>
    
</template>
  
<style>
.centered-content {
    display: flex;
    justify-content: center;
    height: 100vh;
}

h1 {
    text-align: center;
}
</style>