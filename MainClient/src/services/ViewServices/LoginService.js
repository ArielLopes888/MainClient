export default function LoginService() {

    this.Login = async function (body) {
        const configLogin = {
            method: 'Post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch('http://localhost:5163/api/v1/auth/Login', configLogin)
            const newLogin = await response.json();
            if(response.ok){
                window.location.href = '/home';
            }
        }
        catch(error){
            console.log(error)
             throw new Error('Erro desconhecido');
        }
    }
}
