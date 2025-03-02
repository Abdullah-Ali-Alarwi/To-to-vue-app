<template>
  <main style="margin: 100px auto 200px; ">

    <div class="mainBox">
        <div class="imag">
            <img class="myimge imgBlur"  src="/src/assets/manCall.png" alt="">
        </div>

        <div class="contact">
            <p class="title">Contact us</p>
            <p class="sumtitle">For more information and signing up </p>
            <div class="btn">
                <a class="abtn" href="#">
                  <img src="/src/assets/emial.png" alt="">

                  
                  info@leeuwcare.com
                </a>
                <a class="abtn"  href="#">
                  <img src="/src//assets/call.png" alt="">
                  91 70227 10506
                  

                </a>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>

.mainBox{
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn{
  display: flex;
  justify-content: space-between;

  padding: 10px;
  gap: 10px;

}

.abtn{
  background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 7px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    box-shadow: 1px 1px 5px 2px #f6f3f3;
}
a img{
  margin-right: 20px;
}

@media screen and (max-width:798px){
  main{
    width: 90%;

  }
  .mainBox ,.btn{
    flex-direction: column;
 
   
  }.sumtitle{
    font-size: 28px;
  }

  .myimge{
    width: 70%;
    margin: auto;
  }
}
</style>