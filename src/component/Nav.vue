<template>
  <nav class="container" style="width: 90%; margin: auto;">
    <main>

      <div class="logo">
        <img src="/src/assets/logo.png" alt="Logo">
      </div>

      <!-- زر القائمة ☰ -->
      <label for="menu-toggle" class="menu-icon">☰</label>
      <input type="checkbox" id="menu-toggle" class="menu-toggle">

      <!-- القائمة -->
   <!-- القائمة -->
<ul class="menu">
  <li><router-link :to="{ name: 'home' }">Home</router-link></li>
  <li><router-link :to="{ name: 'about' }">About us</router-link></li>
  <li><router-link :to="{ name: 'ourservices' }">Our Services</router-link></li>
  <li><router-link :to="{name:'healthcareservies'}">Health Care Services</router-link></li>
  <li><router-link :to="{name:'contactus'}">Contact Us</router-link></li>
</ul>

    </main>
  </nav>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative; 
  margin-top: 0;
 
}

.logo {
  width: 25%;
}

.logo img {
  width: 100%;
}

/* تصميم القائمة */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.menu li {
  margin: 0 10px;
}

.menu a {
  font-size: 22px;
  text-decoration: none;
  color: #D4AF37;
  padding: 8px 12px;
  display: block;
}

.menu a:hover {
  background-color: rgba(194, 135, 135, 0.2);
  border-radius: 10px;
}

/* زر القائمة ☰ */
#menu-toggle {
  display: none;
}

.menu-icon {
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: #D4AF37;
}


@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: rgba(6, 1, 1, 0.95);
    text-align: center;
    padding: 10px 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    width: 90%;
  }

  .menu li {
    padding: 10px 0;
  }

  .menu-icon {
    display: block;
  }

 
  #menu-toggle:checked + .menu {
    display: flex;
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .logo  {
  width: 39%;
}

main{
  width: 100%;
}
}
</style>
