<script>
import FindPeopleService from '../services/FindPeopleService'

const { GetAll } = new FindPeopleService();

export default {
  data() {
    return {
      allUsers: []
    }
  },
  mounted() {
    GetAll()
      .then(response => {
        if (response && Array.isArray(response.data) && response.data.length > 0) {
          this.allUsers = response.data;
        } else {
          console.error('A resposta da API está vazia ou não é um array.');
        }
      });
  }

}

</script>

<template class="background">
  <article>
    <table class="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" user in allUsers">
          <th>{{ user.id }}</th>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>
<style>
#background{
  background-color: rgb(12, 185, 237);
}
.custom-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.custom-table thead {
  background-color: #f2f2f200;
}

.custom-table th,
.custom-table td {
  padding: 12px 16px;
  border: 1px solid #ddd;
}

.custom-table th {
  font-weight: bold;
  text-align: left;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f9f9f908;
}

.custom-table tbody tr:hover {
  background-color: #e6e6e600;
}

.custom-table td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

