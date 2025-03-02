<template>
    <main>   <p class="title">Non medical services for our clients</p>
      <div class="box">
          <div class="text">
           
              <p class="sumtitle">Following documents can be downloaded and are necessary to prepare your journey to India. </p>
        <p>
            Leeuw uses telemedicine (medical service through technology) to delivery health care, for example by organising conference calls between doctors and hospitals in India and doctors abroad to facilitate information sharing on the latest medical practices and technologies. 
        </p>

        <p>
            For critical cases, telemedicine enables the provision of a diagnosis and the necessary treatment. A specialist in India is able to observe an ongoing surgery online and can guide and instruct a foreign doctor.
        </p>
          </div>
  
          <img src="/src/assets/medicen.png" alt="">
      </div>
      <div class="box">

        
        <img src="/src/assets/towman.png" alt="">
          <div class="text">
           
              <p class="sumtitle">Hands-on services for medical professionals </p>
      <p>
        We organise consultations for which Indian medical professionals visit hospitals abroad for the purpose of advising patients in their home country. 
      </p>
      <p>
        This will enable diagnoses to be made and treatment plans to be suggested. With this service we aim to improve healthcare locally, especially in locations without regular access to medical care. 
      </p>
      <p>
        We also offer a service to organise medical conferences during which Indian and foreign medical professionals can meet face to face and discuss the latest practices and technologies and to exchange experiences and knowledge with a focus on preventative care and health education.
      </p>
          </div>
  
      </div>
    </main>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .box{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      flex-wrap: nowrap;
      width: 80%;
  }
  .title{
    margin: 30px;
  }
 .sumtitle{
    
      text-align: start;
      margin-bottom:10px ;
  }

  .text{
    width: 500px;
  }

  p{
    margin-bottom : 30px;
  }

  @media screen and (max-width:798px){

    *{
      overflow-x: hidden;
    }

    .box{
      flex-direction: column-reverse;

    }
    .title{
      font-size: 30px;
    }
    .text{
      width: 100%;
    }
    img{
      width: 80%;
    }

  }
  
  </style>