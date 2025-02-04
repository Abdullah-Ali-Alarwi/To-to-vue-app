<template>
  <main class="flex justify-around flex-wrap w-[100%] m-auto my-[100px]">
    <div class="box text-center">
      <a href="https://wa.me/967733178756?text=Hi!%20I'm%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more%20about%20it.%20Could%20you%20please%20send%20me%20more%20information?%20Thank%20you!">
        <div class="icon bg-amber-50 rounded-full flex w-[70px] h-[70px] p-3">
         
          <img class="w-[100%] h-[100%]" src="/src/assets/icon/whatsapp.png" alt="">
        </div>
      </a>
    
      <h1>Chat with Me On WhatsApp</h1>
      <p>+967 733 178 756</p>
    </div>
    <div class="box text-center">
      <a href="https://www.linkedin.com/in/abdullah-alarwi-4b92b634a/">
        <div class="icon bg-amber-50 rounded-full flex w-[70px] h-[70px] p-3">
         
          <img class="w-[100%] h-[100%]" src="/src/assets/icon/social (1).png" alt="">
        </div>
      </a>
      <h1>Chat with Me On LinkedIn</h1>
      <p>linkedin.com/in/abdullah-alarwi-4b92b634a</p>
    </div>
    <div class="box text-center">
      <div class="icon bg-amber-50 rounded-full flex w-[70px] h-[70px] p-3">
        <img class="w-[100%] h-[100%]" src="/src/assets/icon/phone-call.png" alt="">
      </div>
      <h1>Call Me On My Number</h1>
      <p>+967 733 178 756</p>
    </div>
  </main>
</template>


<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: rgb(4, 204, 234); /* Blue background */
  color: white;
  box-shadow: 0 0 20px rgba(4, 204, 234, 0.8), 0 0 30px rgba(30, 58, 138, 0.6), 0 0 40px rgba(30, 58, 138, 0.4);
}

h1 {
  font-size: 22px;
}

.box .icon:hover {
  cursor: pointer;
  color: rgb(4, 204, 234); /* Blue background */
  box-shadow: 0 0 20px rgba(4, 204, 234, 0.8), 0 0 30px rgba(30, 58, 138, 0.6), 0 0 40px rgba(30, 58, 138, 0.4);
}

.icon {
  position: relative;
  bottom: 35px;
}
</style>
