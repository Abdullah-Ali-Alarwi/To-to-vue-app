<template>
  <main>
   
    <div>
      <p class="title">
        Our services
      </p>

      <p class="sumtitle">
        What Leeuw has to offer
      </p>
    </div>
        <img class="imgBlur" src="/src/assets/doc3.png" alt="">
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


@media screen and (max-width:798px){
  main{
   
    width: 100%;
    flex-direction: column-reverse;
  }

  .sumtitle{
    font-size: 20px;
  }
  img{
    width: 80%;
  }
}
</style>