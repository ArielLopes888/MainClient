<script>
import '../assets/global.css'
</script>

<template class="bacground">
    <div id="login-register-container">
        <h1>Login</h1>
        <form action="">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" autocomplete="off">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha">
            <RouterLink to = "/home">
                <input type="submit" value="Login"></RouterLink>
        </form>

        <div id="register-container">
            <p>Ainda não tem uma conta?</p>
            <RouterLink class="link" to="/register">Criar conta</RouterLink>
        </div>
    </div>
</template>
  
<style scoped></style>
  
  