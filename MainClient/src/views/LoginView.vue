<script>
import '../assets/global.css';
import LoginService from '../services/ViewServices/LoginService';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async handleSubmit(event) {

            try {
                event.preventDefault();

                const data = {
                    email: this.email,
                    password: this.password
                };

                const loginService = new LoginService();
                await loginService.Login(data);
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

<template class="bacground">
    <div id="login-register-container">
        <h1>Login</h1>
        <form @submit="handleSubmit">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" v-model="email" autocomplete="off">

            <label for="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha" v-model="password" >
           
            <a href=""><input type="submit" value="Login"></a>
        </form>

        <div id="register-container">
            <p>Ainda não tem uma conta?</p>
            <RouterLink class="link" to="/register">Criar conta</RouterLink>
        </div>
    </div>
</template>
  
<style scoped></style>
  
  