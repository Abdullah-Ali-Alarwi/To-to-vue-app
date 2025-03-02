<template>
  <main>
    <div class="title">Branches</div>
    <p class="sumtitle" style="margin: 20px;">We Are Already Present In</p>
   
  <div class="iamge">
    <img src="/src/assets/1.png" alt="">
      <img src="/src/assets/2.png" alt="">
      <img src="/src/assets/3.png" alt="">
      <img src="/src/assets/4.png" alt="">
      <img src="/src/assets/5.png" alt="">

  </div>

  <div class="process">
    <p class="protitle">Branches in proces </p>
    <p class="protitletext">For the near future, Leeuw will open branches in following places: </p>
    <ul>
      <li>Dhaka, Bangladesh </li>
      <li>Djibouti, Djibouti</li>
    </ul>
  </div>
  </main>
</template>

<script>

</script>

<style scoped>
.iamge{
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  gap: 50px;
 justify-content: center;
  margin: auto;
}

.process{
  font-weight: bold;
  margin: 200px;
}

.protitle{
  font-size: 62px;
  color: var(--orange);
  margin: 0;
}
.protitletext{
  font-size: 32px;
}

@media screen and (max-width:789px){
  .iamge img{
    width: 90%;
    margin: auto;
  }

  .iamge{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
 justify-content: center;
  margin: auto;
}
  .protitle{
    font-size: 30px;
  }
  .process{
    margin: 0;
    width: 90%;
    margin:50px auto
    
  }
}
</style>