<template>
    <div id="login-container">
        <h1>Login</h1>
        <form action="">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" autocomplete="off">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha">
            <a href=""><input type="submit" value="Login"></a>
        </form>

        <div id="register-container">
            <p>Ainda não tem uma conta?</p>
            <a href="">Criar uma conta</a>
        </div>
    </div>
</template>
  
<script>
    export default{
        
}
</script>



<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: #323232;
    border: none;
}


textarea:focus,
input:focus {
    outline: none;
}


a,
label {
    font-size: .8rem;
}

a:hover {
    color: #4ea3d9;
}

.login-container {
    background-color: #ffffff;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 30px;
    margin-top: 10vh;
    border-radius: 10px;
    text-align: center;
}

form {
    margin-top: 30px;
    margin-bottom: 40px;
}


label,
input {
    display: block;
    width: 100%;
    text-align: left;
}

input {
    border-bottom: 2px solid #000000;
    padding: 10px;
    font-size: 1rem;
    margin-bottom: 20px;
}

input:focus {
    border-bottom: 2px solid #8b8585;
}

input[type="submit"] {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    height: 40px;
    border-radius: 20px;
    margin-top: 30px;
    color: #FFFF;
    background-color: #4ea3d9;
    cursor: pointer;
}


input[type="submit"]:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: .4s;
}



.register-container p {
    margin-bottom: 10px;
}

a {
    text-decoration: none;
}
</style>