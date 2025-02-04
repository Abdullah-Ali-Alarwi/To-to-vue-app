<template>
<main>
  <nav class="flex justify-between items-cente bg-[rgb(12,12,12)] text-amber-50 p-4 relative">
    <h1 class="text-xl font-bold text-cyan-500 title" >Abuullah Al-Arwi</h1>

    <!-- زر القائمة للشاشات الصغيرة -->
    <button @click="toggleMenu" class="sm:hidden text-2xl transition-transform duration-500 ease-in-out">
      {{ isMenuOpen ? '✖' : '☰' }}
    </button>

    <transition name="slide-fade">
      <ul
        v-show="isMenuOpen || windowWidth >= 640"
        class="flex flex-col sm:flex-row gap-4 items-center bg-[rgb(12,12,12)] sm:bg-transparent p-4 sm:p-0 absolute sm:static left-0 right-0 top-14 sm:top-auto"
      >
        <li><router-link to="/About" class="hover:text-cyan-400 text-[22px]" >About</router-link></li>
        <li><router-link to="/Portfolio" class="hover:text-cyan-400 text-[22px]">Portfolio</router-link></li>
        <li><router-link to="/contact" class="hover:text-cyan-400 text-[22px]">Contact </router-link></li>
      </ul>
    </transition>
  </nav>



</main>

</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 640) {
        this.isMenuOpen = false;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style>
ul li {
  list-style: none;
}


.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

a:hover{

  
  color: white; /* لون النص */
  font-size: 22px;
  font-weight: bold;
  text-shadow: 
    0 0 5px rgba(4, 204, 234, 0.9), 
    0 0 10px rgba(4, 204, 234, 0.8), 
    0 0 20px rgba(4, 204, 234, 0.7), 
    0 0 30px rgba(4, 204, 234, 0.6); }

    .title{
font-size: 25px;
font-weight: bold;
text-shadow: 
  0 0 0px rgba(4, 204, 234, 0.9), 
  0 0 10px rgba(4, 204, 234, 0.8), 
  0 0 0px rgba(4, 204, 234, 0.7), 
  0 0 0px rgba(4, 204, 234, 0.6);
}
</style>
