<script>
import '../assets/global.css';
import RegisterService from '../services/RegisterService';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errors: []
        };
    },
    methods: {
        async handleSubmit(event) {

            try {
                event.preventDefault();

                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                };

                const registerService = new RegisterService();
                await registerService.Register(data);
            }
            catch (error) {
                this.errors = [error.message];
                console.error(error);
                // Tratar erros de rede ou outras exceções
            }

        }
    }
};
</script>

<template class="background">
    <div id="login-register-container">
        <h1>Cadastre-se</h1>
        <form @submit="handleSubmit">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Digite seu nome" v-model="name" autocomplete="off">

            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" v-model="email" autocomplete="off">

            <label for="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha" v-model="password">

            <a href=""><input type="submit" value="Cadastro"></a>
        </form>
    </div>
</template>
  
<style></style>
  
  