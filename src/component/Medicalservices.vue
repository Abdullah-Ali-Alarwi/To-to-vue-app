<template>
  
  <main >
    <p class="mytitle">Medical services for our clients</p>
    <p>Leeuw considers its mission to make your medical journey as smooth as possible. You can therefore expect following actions from us to make that happen: </p>
<div class="cont">
    <div class="list">
        <h3>Leeuw’s procedure for our clients</h3>
  <ul>
    <li>
        Your local Leeuw branch or the Bangalore branch will collect the necessary information (prior diagnoses and test results which you can provide) and send it to a specialist doctor in Bangalore. 
    </li>

    <li>
        Leeuw will arrange a video call in which the specialist doctor will explain the diagnosis to you and propose possible extra tests to be done. 
    </li>
    <li>
        Following the results, a final diagnosis can be made and the doctor will advise a treatment plan to Leeuw. We will make sure that you will understand the diagnosis and the suggested procedure. Medical services for our clients  
    </li>
    <li>
        According to package deal agreements between Leeuw and the hospital, a cost estimation will be given. Leeuw will ensure market competitiveness by comparing quotes of various medical providers. 
    </li>
    <li>
        In Bangalore Leeuw will guide you to consultations in the hospital to enable a thorough communication between the doctor and you. 
    </li>
    <li>
        The doctor might need more tests and Leeuw will guide you to undergo these tests. 
    </li>

    <li>
        The treatment plan can now be executed and Leeuw will guide you through it. In case hospitalisation is needed, we will help you during the admission and help you arrange the room you wish for. We also make sure that the nursing staff is well instructed on your wishes and needs. 
    </li>

    <li>
        Leeuw will guide you prepare for the operation or help you with medical therapies.  
    </li>

    <li>
        Leeuw will be there when you are discharged from the hospital. 
    </li>

    <li>
        When additional therapy is required after the treatment, we will arrange this for you and when you need additional medicine, Leeuw will purchase this on your behalf.
    </li>
  </ul>
    </div>
    <img src="/src/assets/pham.png" alt="">
</div>
  
  
  
  </main>
</template>

<script>

</script>

<style scoped>

main{
    width: 80%;
    margin: auto;
}
.mytitle{
    margin-top: 200px;
    font-size: 62px;
    color: var(--orange);
    font-weight: bold;
}

h3{
    font-size: 32px;
}
h3 ,li{
    margin: 30px;
}
.cont{
  
    display: flex;
    flex-direction: column;
   
}

@media screen and (max-width:798px){
    main{
        width: 90%;
        overflow-x: hidden;
    
 
    }
   
    .mytitle{
        font-size: 30px;
    }
    .list h3{
     

    }
    .cont{
        width: 100%;
      
        margin: 0;
        display: flex;
        flex-direction: column;
    }
    .list{
        width: 100% !important;
      
        margin: 0;
    }


}

</style>