<template>
  <div>
    <h1 style="text-align: center">Add new Task</h1>

    <form @submit.prevent="AddTaske" class="inputDive">
      <label for="from"> task</label>
      <input
        required
        v-model="taske.title"
        type="text"
        placeholder="Enter your Task"
      />
      <label for="from"> from</label>
      <input required v-model="taske.from" type="date" lang="en" id="from" />
      <label for="to">to</label>
      <input required v-model="taske.to" type="date" lang="en" id="to" />
      <button type="submit">sumbit</button>
      <hr />

      <div class="info" v-if="taske.title">
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>from</th>
              <th>to</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ taske.title }}</td>
              <td>{{ taske.from }}</td>
              <td>{{ taske.to }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <h1>No taske yet 😀</h1>
      </div>
    </form>
    <transition name="fade">
      <div v-if="isPopupVisible" class="popup massage">
        <p>The Task add successfully</p>
      </div>
    </transition>
  </div>
</template>
<!-- -------------------------- -->
<!-- js start here----------------- -->
<!-- -------------------------- -->
<script>
import popup from '@/component/popup.vue';
export default {
  components: {
    popup,
  },
  data() {
    return {
      taske: {
        title: '',
        from: '',
        to: '',
      },
      isPopupVisible: false,
    };
  },

  methods: {
    AddTaske() {
      this.$store.commit('ADD_TASK', {
        id: Date.now(),
        title: this.taske.title,
        from: this.taske.from,
        to: this.taske.to,
        done: false,
      });
      this.taske = [
        {
          id: this.$store.state.AllTaskes.length + 1,
          title: '',
          from: '',
          to: '',
        },
      ];
      this.isPopupVisible = true;
      setTimeout(() => {
        this.isPopupVisible = false;
      }, 1000);
    },
    getdata() {
      this.taksets = this.$store.state.AllTaskes;
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>

<style scoped>
.inputDive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

input {
  width: 70%;
  height: 50px;
  border-radius: 6px;
  font-family: 18px;
}
label {
  width: 70%;
  color: #677e78;
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
  background-color: #07be8dff;
}
.info {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}

table {
  background-color: gainsboro;
  width: 80%;
}
thead {
  background-color: #06d6a0;
  width: 100%;
}
td,
th {
  border: 1px solid dark;
  padding: 10px;
}
.massage {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  background-color: #06d6a0;
  text-align: center;
}

.popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #06d6a0;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  opacity: 0.95;
  z-index: 1000;
}

/* Transition Styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter {
  opacity: 0;
  transform: translateY(20px); /* Slide up effect */
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Slide down effect */
}
</style>
