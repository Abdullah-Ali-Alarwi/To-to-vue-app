<template>
<main>
    <p class="title">{{ sectionTitle }}</p>
   <div class="cont">
    <div v-for=" i in Surgical" :key="i.title">
        <div class="box cont">
            <div class="topimage"> <img :src="i.topimage"></div>
            <div class="body">
                <h1>{{ i.title }}</h1>
                <p>{{ i.text }}</p>
             
            </div>
            <div class="butImage">
                    <img :src="i.butimage" alt="">
                </div>
        </div>

    </div>
   </div>
</main>
</template>

<script setup>
const props = defineProps(['Surgical' ,'sectionTitle']);

</script>

<style soped>

.cont{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width:90%;
    margin: auto;
    gap: 5px;


}
.box{
    width: 300px;
    height: 732px;
    background: white;
    color: black;
    padding: 10px 0;
    display: flex;
    justify-content: center ;
    align-items: center;
   border-radius: 10px;
   box-shadow: -2px 3px 4px 0px white;
 margin: 40px  10px;
   padding: 40px 5px;
}

   .topimage{
    height: 20%;
    margin: auto;
   }
   .butImage{
    margin: auto;
   }
.body{
    height:52%;
}

*{
    text-align: center;
  
}
p{
    line-height: 1.3;
    font-weight: bold;
    width: 80%;
    margin: auto;
   
   
}


</style>