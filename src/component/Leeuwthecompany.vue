<template>
  <main class="parent">
 <div >   <h1  class="title">Leeuw the company</h1>
    <h2 style="text-align: center;">Who are we?</h2></div>
    <div class="leeuwthecompany">
      
        <img class="imgBlur doimage"  src="/src/assets/doctor.png" alt="">

    <div class="mybox">
<div>
    
    <div class="boxtext textContainer top">
            <p>
                Leeuw is founded by a Dutch, Yemeni and Indian national, representing a broad set of  experiences and with a wide reaching network. 
            </p>
            <p>
                After we identified a need for a dependable  and reliable international medical treatment agency, we decided to start Leeuw  International Care.
            </p>

            <p>
                This allowed us to serve international patients with transparency and with their best interested at heart 
            </p>

        </div>
</div>

       <div>
        <div class="boxtext textContainer buttom">
            <p>
                To achieve this we will use our expertise to manage the Indian system and overcome unexpected obstacles while you focus on your health and recovery.
            </p>
            <p>
                In most cases, we will be able to work directly with trusted partners with whom we have an agreement, which allows us to best protect the rights of our clients.   
            </p>
            <p>
                Through  substantial experience with international patients, we are able to provide reliable and  holistic guidance on all stages of the process.             </p>

            <p>
                Our reviews demonstrate strong confidence  in our ability and energy in assisting you throughout your journey.             </p>

        </div>
       </div>
    </div>
    </div>
  </main>
</template>

<script setup>
import Leeuwthecompany from '../component/Leeuwthecompany.vue';

</script>

<style scoped>

main{
overflow: auto;
}
.mybox{
    position: relative;
    display: flex;
    justify-content: space-around;
width: 90%;
margin: auto;

    margin-top: 30px;
}
.leeuwthecompany{
    margin-top: 400px;
    position: relative;

}

.top{
    right: 300px;
    position: relative;
    top: -64%;
}


.buttom{
    right: 0;
    position: absolute;
    top: -34%;
}

img{
    position: absolute;
    top: 0%;
    right: 50%;
    z-index: -1;
    transform: translate(50%, -50%);    

}


@media screen and (max-width: 768px){
    .parent{
        margin: 0;
        width: 100%;
    }

    .title{
        font-size: 33px;
    }
.leeuwthecompany{
    margin: 0;
}
    .mybox{
width: 100%;
flex-direction: column;
gap: 20px;
}

.boxtext{
    width: 90%;
}


.top{
    right: 0;
    position: relative;
    top: 0;
}


.buttom{
    right: 0;
    position: relative;
    
}



.doimage{
    opacity: 0.3;

}

}

*{
    overflow-x: hidden;
}



</style>