<template>
  <nav>
    <div class="logoParetn">
      <div class="logo">
        <img src="../src/assets/smartphone.png" alt="" />
      </div>
      <h4>To Do APP</h4>
    </div>

    <div class="links">
      <RouterLink to="/">New Task</RouterLink>
      <div>
        <RouterLink to="/DataPage">All Tasks</RouterLink>
        <span>{{ this.$store.state.AllTaskes.length }}</span>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scopd>
nav {
  background-color: rgb(31, 28, 28);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(19, 175, 110);
  a {
    color: gainsboro;
    text-decoration: none;
  }
  a.active {
    color: grrgb(19, 175, 110) een;
  }

  .router-link-active {
    color: rgb(51, 198, 171);

    border-radius: 5px;
  }
}

span {
  color: rgb(255, 255, 255);
  position: relative;
  top: -11px;
  left: 3px;
  background-color: rgb(19, 175, 110);
  padding: 5px;
  border-radius: 50%;
}

.logo {
  background-color: #07be8dff;
  width: 3%;
  border-radius: 50%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 50%;
  height: 50%;
}

.logo img {
  width: 100%;
  height: 100%;
}

.links {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 22px;
}
h4 {
  color: rgb(201, 193, 193);
}

.logoParetn {
  display: flex;
  justify-content: space-around;
  width: 100px;
  align-items: center;
  font-size: 1em;
}
</style>
