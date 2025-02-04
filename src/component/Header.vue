<template>
  <main class="flex flex-col justify-center sm:
">
   
<div class="title p-20 bg-[rgba(16,16,16,0.6)] lg:bg-transparent " >
    <h3>Hellow</h3>
 <h4 class="text-2xl

">i'm Abuullah</h4>
 <h1 class="text-[60px] text-cyan-400">Front End Developer</h1>
</div>
 </main>
</template>

<script>
export default {

}
</script>

<style scoped>

main {
    width: 100%;
    background-image: url("/src/assets/image/me.jpg");
    height: 500px;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain; 

}

@media (max-width: 600px) {
    main {
        background-size: cover; 
        background-position: center; 
    }
}
.title{
    color: white; /* لون النص */

font-weight: bold;
text-shadow: 
  0 0 0px rgba(4, 204, 234, 0.9), 
  0 0 10px rgba(4, 204, 234, 0.8), 
  0 0 0px rgba(4, 204, 234, 0.7), 
  0 0 0px rgba(4, 204, 234, 0.6);
}


</style>