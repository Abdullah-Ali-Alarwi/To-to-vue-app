<template>
    <main >
      <div class="row">
        <div class="col">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Health Care Services</li>
            <li>Contact Us</li>
          </ul>
          <img style="width: 25vw;" src="/src/assets/logo second.png" alt="Company Logo">
        </div>
        <div class="col">
          <ul>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div class="col colform" >
          <p>Get In Touch</p>
          <form>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Mobile Number">
            <input type="text" placeholder="Select Country">
            <textarea name="message" style="height: 134px;" placeholder="Your Message"></textarea>


            <button style="background-color: #41113D; color: white; padding:5px; border-radius: 4px;">send</button>
          </form>

        </div>
      </div>
  
      <div class="social">
        <a href="https://www.facebook.com" target="_blank">
          <img src="/src/assets/facebook.png" alt="Facebook">
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="/src/assets/twiiter.png" alt="Twitter">
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="/src/assets/instgram.png" alt="Instagram">
        </a>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  main {
    background-color: white;
    color: black;
    padding: 10px;
  margin: 0;
  overflow-x: hidden;
  width: 100%;
  margin-top: 50px;
  
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    color: #41113D;
    font-size: 20px;
    margin: 10px 0;
    text-align: start;
  }
  
  .row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  input, textarea {
    width: 100%;
    border-radius: 4px;
    padding: 5px;
   
    border: 1px solid #41113d3e;
    outline: none;
  }

  .colform{
    width: 30%;
  }
  
  .social {
    display: flex;
    justify-content: center;
    margin: 20px;
    height: 47px;
    gap: 10px;
  }
  
  .social img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
  }
  form  {
    display: flex;
    flex-direction: column;
gap: 10px;
    align-items: start;
  }
  
  .social img:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px){ 


    main {
    background-color: white;
    color: black;
    padding: 10px;
  margin: 0;
  overflow-x: hidden;
  width: 100%;
  margin-top: 0;
  text-align: center;
  
  }


    .row{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    width: 100%;
    }
.col{

  text-align: center;
}
.colform{
  width: 90%;
}
 
  }
  </style>
  