export function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocalização não é suportada pelo navegador.'));
    }
  });
}

export async function sendLocationToAPI(latitude, longitude) {
  const url = 'https://api.example.com/location'; // URL da sua API

  const data = {
    latitude: latitude,
    longitude: longitude
  };

  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, config);
    const responseData = await response.json();

    if (response.ok) {
      console.log('Dados de localização enviados com sucesso para a API:', responseData);
    } else {
      throw new Error('Erro ao enviar dados de localização para a API');
    }
  } catch (error) {
    console.error('Erro desconhecido:', error);
    throw new Error('Erro desconhecido');
  }
}
