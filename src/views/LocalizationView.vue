<script>
import { getLocation, sendLocationToAPI } from '../services/ComponentServices/Localizationservice';

export default {
  methods: {
    async getAndSendLocation() {
      try {
        const position = await getLocation();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        sendLocationToAPI(latitude, longitude);
        console.log('Localização enviada para a API:', latitude, longitude);
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <button @click="getAndSendLocation">Enviar Localização</button>
  </div>
</template>