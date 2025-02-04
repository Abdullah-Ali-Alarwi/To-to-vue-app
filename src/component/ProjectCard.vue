<template>
  <main class="my-[100px]">
    <div v-for="i in WebPAge" :key="i.id" class="box">
      <img :src="i.image || '/src/assets/project image/default.png'" class="box-image" />
      <div class="content">
        <h1>{{ i.title }}</h1>
        <a :href="i.page" target="_blank">Visit Page</a>
        <a :href="i.code" target="_blank">Show Code</a>
      </div>
    </div>
  </main>
</template>

<script setup>

import DashBord from "../assets/project image/dashBord.png";
import ToDoApp from "../assets/project image/To Do App with Vue.png";
import Market from "../assets/project image/market.png";
import TemplateTow from "../assets/project image/templateTow.png";
import TemplateThree from "../assets/project image/template three.png";

let WebPAge = [
  {
    id: 1,
    title: "Dashboard",
    image:DashBord,
    page: "https://abdullah-ali-alarwi.github.io/Dashboard/",
    code: "https://github.com/Abdullah-Ali-Alarwi/Dashboard",
  },
  {
    id: 2,
    title: "Simple Market",
    image:Market,
    page: "https://abdullah-ali-alarwi.github.io/SmallShopVujs/landingPage",
    code: "https://github.com/Abdullah-Ali-Alarwi/SmallShopVujs",
  },
  {
    id: 3,
    title: "To Do App with Vue.js",
    image:ToDoApp,
    page: "https://abdullah-ali-alarwi.github.io/To-to-vue-app/#/",
    code: "https://github.com/Abdullah-Ali-Alarwi/To-to-vue-app",
  },
  {
    id: 4,
    title: "Template Two (HTML & CSS)",
    image:TemplateTow,
    page: "https://abdullah-ali-alarwi.github.io/template-2/#",
    code: "https://github.com/Abdullah-Ali-Alarwi/template-2",
  },
  {
    id: 5,
    title: "Template Three (HTML & CSS)",
    image:TemplateThree,
    page: "https://abdullah-ali-alarwi.github.io/template-3/",
    code: "https://github.com/Abdullah-Ali-Alarwi/template-3",
  },
];
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.box {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.195);
  box-shadow: 0 3px 15px rgba(94, 129, 129, 0.359);
}

.box:hover {
  transform: rotate(1deg) scale(1.08); /* تحسين تأثير الهفر */
  box-shadow: 0 12px 30px rgba(94, 129, 129, 0.25);
}

.box-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.box:hover .box-image {
  transform: scale(1.1); /* تكبير خفيف للصورة عند الهفر */
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(36, 127, 160, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1;
  color: white;
  padding: 15px;
  text-align: center;
  transform: translateY(20px); /* تحريك بسيط للنصوص */
}

.box:hover .content {
  opacity: 1;
  transform: translateY(0); /* رجوع النصوص عند الهفر */
}

.content a {
  background-color: white;
  color: rgb(59, 149, 179);
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.content a:hover {
  background-color: rgb(38, 173, 222);
  color: white;
  transform: scale(1.05); /* تكبير الزر عند الهفر */
}

h1 {
  font-size: 18px;
  margin: 0;
}
</style>
