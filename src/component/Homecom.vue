<template>
  
  <div class="home">
    <div class="boxtext">
      <h1 class="welcom">Welcome to </h1>
      <h1>Leeuw International Care</h1>
      <h5>Your medical journey guide</h5>
      <p>
        When you need medial treatment abroad, Leeuw International Care can assist.We  understand that worrying about your health is stressful, so let us shoulder some of the  burden.   
      </p>

      <p>
        We can organise your medical journey and help with preparations at home,  completing your trip, arranging accommodation, guide on your treatment and your trip back  home. Leeuw will be there for you every step of the way.
      </p>
      <div class="submitdiv">
        <div > 
          <img src="/src/assets/massage.png" alt="">
          <p>info@leeuwcare.com</p>
        </div>
     <button>Information video</button>
      </div>
    </div>
  <img class="man-image " src="/src/assets/man.png" alt="">
  </div>
</template>

<script>

</script>

<style scoped>
.home{
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.submitdiv{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.submitdiv div{
  display: flex;
  align-items: center;
  color: #ffff;
  font-size: 24px;

}
.boxtext button{
 width: 275px;
 height: 70px;
 padding: 40px;
 border-radius: 39px;
 font-size: 22px;
 font-weight: bold;
 display: flex;
 align-items: center;

  background-color: #ffff; }
  

  .boxtext{
   width: 100%;
  }

  .boxtext{
    width: 50%;
    padding: 20px;
  }

  h1{
    font-size: 3.5rem;
    margin: 0;
    font-weight: bold;
    color: var(  --orange);
  }
  .welcom{
    color: #ffff;
  }

  h5{
    margin: 0;
    font-size: 32px;
  

  }

  p{
    font-size: 20px;
    color: #ffff;
    line-height: 1.5    ;

    
  }

  h1,h5 p{
    text-align: start
  }
  @media screen and (max-width: 768px){
    .home{
      text-align: center;
    }
    .boxtext{
      width: 100%;}
    
    h1{
      font-size: 33px;
    
    }
    h5{
      font-size: 30px;
    }
    .submitdiv{
      width: 100%;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
    }
    
    .man-image{
       position: absolute; 
       opacity: 0.1;
       z-index: -1;
       width: 50%;
    }

    .submitdiv{
        margin: auto;
    }
    botton{
        width: 100%;
        margin: 10px 0;
    }  }

</style>