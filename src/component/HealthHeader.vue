<template>
  <main>
   
    <div>
      <p class="title" style="font-size: 50px;">
        Health care services      </p>

      <p class="sumtitle">
        About treatments, hospitals and doctors      </p>
    </div>
    <div>
        <img src="/src/assets/body&girl.png" alt="">
    </div>
  </main>
</template>

<script>

</script>

<style scoped>
main{
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 80%;
  margin: auto;
}

p{
  text-align: start;
}

@media screen and (max-width:798px) {
  main{
    flex-direction: column;
    width: 100%;
  }
  .sumtitle ,.title{
    font-size: 30px;
    width: 90%;

  }

  img{
    width: 90%;
  }
  
}

</style>