<template>
  <main>
    <div class="box">
        <div class="text">
            <p class="title">Documents</p>
            <p class="sumtitle">Following documents can be downloaded and are necessary to prepare your journey to India. </p>
            <ul>
                <li>
                    Visa application form   
                </li>
                <li>
                    Allergy form 
                </li>
                <li>
                    Medical history of the patient 
                </li>
            </ul>
        </div>

        <img src="/src/assets/document.png" alt="">
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
}
.box {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.title ,.sumtitle{
  width: 100%;
    text-align: start;
    margin-bottom:10px ;
}
img{
        width: 50%;
        margin: auto;
        
    
    }

@media screen and (max-width:798px){
    main{
        width: 90%;
        text-align: center;    }
    .title{
        font-size: 30px;
    }
    .sumtitle{
        font-size: 28px;
        width: 100%;
        margin-left: 5PX;
    }
ul{
    margin: 30px;
}
    .box{
        flex-direction: column;
        width: 90%;
        flex-wrap: wrap;
     
       
    }
    img{
        width: 80%;
        margin: auto;
        
    
    }
}

</style>