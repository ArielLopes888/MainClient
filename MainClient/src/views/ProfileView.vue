<template>
    <div>
      <div class="expandable" @click="toggleDiv(1)">
        <h3>Título da Div 1</h3>
        <i :class="{'arrow-up': isExpanded[1], 'arrow-down': !isExpanded[1]}"></i>
      </div>
      <div v-if="isExpanded[1]" class="content">
        <!-- Conteúdo da Div 1 -->
      </div>
  
      <div class="expandable" @click="toggleDiv(2)">
        <h3>Título da Div 2</h3>
        <i :class="{'arrow-up': isExpanded[2], 'arrow-down': !isExpanded[2]}"></i>
      </div>
      <div v-if="isExpanded[2]" class="content">
        <!-- Conteúdo da Div 2 -->
      </div>
  
      <!-- Adicione mais divs expandáveis conforme necessário -->
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isExpanded: {} // Objeto para controlar a expansão das divs
      };
    },
    methods: {
      toggleDiv(index) {
        this.isExpanded[index] = !this.isExpanded[index];
      }
    }
  };
  </script>
  
  <style>
  .expandable {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .arrow-up {
    transform: rotate(-180deg);
  }
  
  .content {
    display: none; /* Inicia oculto */
  }
  
  .content.show {
    display: block; /* Mostra quando expandir */
  }
  </style>
  