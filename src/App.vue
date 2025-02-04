<template>
<div class="mx-20">
    <Navbar />
    <Header />
    <Skills />
    <router-view/>
    </div>
  </template>
  
  <script setup>
  import Navbar from './component/Navbar.vue';
  import Header from './component/Header.vue';
  import Skills from './component/Skills.vue';
  </script>
  
