<template>
  
  <main>

    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">Directors</p>

    <div v-for="i in PresentationTeam" :key="i.title" class="team-row">
        <div class="image">
          <img :src="i.teamImage" alt="Team Member">
        </div>
        <div class="text-row">
          <h1>{{ i.title }}</h1>
          <p>{{ i.text }}</p>
        </div>
      </div>
  </main>
</template>

<script setup>

const props = defineProps(['PresentationTeam' ,'title'])


</script>

<style scoped>
.aboutimage {
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;
  align-items: center;
}

.centered-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.team-row {
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin: auto;
  margin-bottom: 20px;

}

.subtitle {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}

.text-row {
  max-width: 80%;
}

@media screen and (max-width:678px){
  .title{
    font-size: 30px;
  }


  .team-row {
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin: auto;
  margin-bottom: 20px;
  flex-direction: column;

}

}

</style>