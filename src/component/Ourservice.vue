<template>

  <main>
    <p class="title" style=" text-align: center;">Our service</p>
    <h2 class="sumtitle" style="margin: 30px;"> For clients in need of treatment, but also for medical professionals</h2>

    <div class="box">

        <div class="textContainer">
            <p class="text-title">During medical procedures</p>
            <p>
                We will guide you through the medical procedures, arranging the consultations with physicians and  the prescribed tests. We will be with you during the hospitalisation process and during and after  operations. If you require additional therapy or medication, we will also be able to assist. If you  wish, we can be present during consultations to translate and to ensure effective communication  and aid your understanding of the suggested treatment. Due to having established partnerships  with hospitals, we will be able to arrange competitive prices for your treatment.
            </p>

        </div>
        <div class="textContainer">
            <p class="text-title">Assisting with logistics and planning</p>
            <p>
                When still in your country, we will arrange a call with an Indian doctor so you can get a  f  irst impression and share the details of your ailment. In order for you to get your  treatment, we will assist with the medical visa application process, organising the flight  and finding accommodation to your preferences. Once in India, we will provide  transportations to and from hospitals and clinics and we will also be at the airport to  welcome you.            </p>

        </div>
        <div class="textContainer">
            <p class="text-title">Online services for medial professionals</p>
            <p>
                Leeuw uses telemedicine (medical service through technology) to delivery health care,  for example by organising conference calls between doctors and hospitals in India and  doctors abroad to facilitate information sharing on the latest medical practices and  technologies.           
              </p>
<p>
    For critical cases, telemedicine enables the provision of a diagnosis and the necessary  treatment. A specialist in India is able to observe an ongoing surgery online and can  guide and instruct a foreign doctor.
</p>
        </div>
        <div class="textContainer">
            <p class="text-title">Hands-on services for medical professionals</p>
            <p>
                We organise consultations for which Indian medical professionals visit hospitals abroad  for the purpose of advising patients in their home country, enabling a diagnosis to be  made and a treatment to be suggested. With this service we aim to improve healthcare  locally, especially in locations without regular access to medical care.            </p>

                <p>
                    We also offer a service to organise medical conferences during which Indian and foreign  medical professionals can meet face to face and discuss the latest practices and  technologies and to exchange experiences and knowledge with a focus on preventative  care and health education.
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
 @media screen and (max-width: 768px){
     main{
     
        width: 100%;
     }
     .title{
        font-size: 33px;
     }

     h2{
        font-size: 28px;
     }
     .box{
        flex-direction: column;
        gap: 20px;
     }
     p{
  text-align: center;
 }

     .textContainer{
        width: 90%;
     }
 }


</style>