<template>
  <div>
    <Nav />
    <router-view></router-view>
    <FooterVue />
  </div>
</template>

<script setup>
import Nav from './component/Nav.vue';
import FooterVue from './component/Footer.vue';
</script>
