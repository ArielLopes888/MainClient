export default function RegisterService() {

    this.Register = async function (body) {
        const configRegister = {
            method: 'Post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch('http://localhost:5163/api/v1/users/create', configRegister)
            const newRegister = await response.json();
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
