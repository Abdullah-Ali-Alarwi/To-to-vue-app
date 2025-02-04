<template>
  <div>
    <!-- Popup Message -->
    <div>Task has been added successfully!</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPopup: false, // Controls the visibility of the popup
    };
  },
  methods: {
    addTask() {
      // Simulate adding a task (replace this with actual logic)
      this.$store.commit('ADD_TASK', { id: Date.now(), title: 'New Task' });

      // Show the popup
      this.showPopup = true;

      // Hide the popup after 3 seconds
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #06d6a0;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
}
</style>
