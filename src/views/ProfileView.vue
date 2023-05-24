<script>
import '../assets/global.css'
import SidebarComponent from '../components/SidebarComponent.vue';
import LocalizationComponent from '../components/LocalizationComponent.vue';

export default {
  data() {
    return {
      isHidden: true,
      isHidden2: true
    };
  },
  methods: {
    toggleVisibility() {
      this.isHidden = !this.isHidden;
    },
    toggleVisibility2() {
      this.isHidden2 = !this.isHidden2;
    }
  },
  components: { SidebarComponent, LocalizationComponent }
};
</script>

<template class="background">
  <head>
    <title>Meu Perfil</title>
  </head>
  <SidebarComponent />
  <div class="container-center">
    <div class="container">
      <div class="header" @click="toggleVisibility">
        <h2>Atualizar Informações</h2>
        <span class="arrow">+</span>
      </div>
      <div class="content" :class="{ hidden: isHidden }">
        <div>

          <label for="nome">Nome</label>
          <input type="text" name="nome" id="nome" placeholder="Abc Def" v-model="name" autocomplete="off">

          <label for="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder="exemple@gmail.com" v-model="email" autocomplete="off">

          <label for="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="1234@abC" v-model="password">

          <a href=""><input type="submit" value="Salvar"></a>

        </div>
      </div>
      <div class="header" @click="toggleVisibility2">
        <h2>Localização</h2>
        <span class="arrow">&#9660;</span>
      </div>
      <div class="content" :class="{ hidden: isHidden2 }">
        <LocalizationComponent />
      </div>
    </div>
  </div>
</template>

<style>
.container-center {
  display: flex;
  justify-content: center;
}

.container {
  width: 80%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.header {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 4px;
  margin-bottom: 10px;
}

.header h2 {
  margin: 0;
}

.content {
  display: none;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
}

.hidden {
  display: block;
}
</style>
