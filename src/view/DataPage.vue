<template>
  <div>
    <h1 style="text-align: center">All Tasks</h1>

    <div class="search">
      <input type="text" placeholder="search for" v-model="searchQuery" />
      <img src="../assets/search.png" alt="" />
    </div>

    <div class="main">
      <div v-if="!$store.state.AllTaskes.length">
        <img src="../assets/no-task.png" />
        <h4>Sorry, you don't have any tasks.</h4>
      </div>
      <div class="divTable" v-else>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>From</th>
              <th>To</th>
              <th>Remove</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in filteredTasks" :key="i.id">
              <td>{{ i.title }}</td>
              <td>{{ i.from }}</td>
              <td>{{ i.to }}</td>
              <td>
                <button @click="deleteTask(i.id)" class="btnDelete">
                  Delete
                </button>
              </td>
              <td>
                <button
                  @click="i.done = true"
                  class="btnComplate"
                  :style="{
                    backgroundColor: i.done ? 'rgb(150, 227, 150)' : 'white',
                  }"
                >
                  {{ i.done ? '✔️' : '✖️' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    getdata() {
      console.log('Data fetched successfully');
    },

    deleteTask(id) {
      this.$store.commit('DELETE_TASK', id);
    },
  },
  computed: {
    filteredTasks() {
      return this.$store.state.AllTaskes.filter((task) =>
        task.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.inputDive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.divTable {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

input {
  width: 70%;
  height: 30px;
  border-radius: 6px;
  font-family: 18px;
}
button {
  background-color: #06d6a0;
  border: none;
  padding: 10px;
  color: white;
  font-size: 18px;
  width: 70%;
  border-radius: 5px;
}
button:hover {
  background-color: #06d6a0;
}
.info {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}

table {
  width: 80%;
}
thead {
  background-color: #06d6a0;
  width: 100%;
}
td,
th {
  padding: 10px;
}
tbody tr {
  background-color: #bfcfd14e;
}
.btnDelete {
  background-color: red;
  width: 70%;
}
.search {
  margin: auto;
  background-color: #06d6a0;
  display: flex;
  justify-content: space-between;
  width: 40%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  align-items: center;
}
.search input {
  background-color: transparent;
  outline: none;
  color: rgb(75, 70, 70);
  border: none;
  width: 85%;
}
.search img {
  width: 15px;
}
.main img {
  display: flex;
  width: 50%;
  margin: auto;
}

@media (max-width: 776px) {
  .search {
    width: 80%;
  }
  table {
    width: 100%;
  }
  .btnDelete {
    width: 100%;
  }
}
</style>
