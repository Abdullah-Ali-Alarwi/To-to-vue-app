<template>
  <main>
    <div>
  

      <div class="aboutimage">
        <img class="imgBlur" src="/src/assets/girl.png" alt="Girl">
        <h1 class="title">About Us</h1>
        <img class="imgBlur" src="/src/assets/man tow.png" alt="Man">
      </div>

      <Mission />

      <div class="centered-image">
        <img src="/src/assets/grop-docotrs.png" alt="Group of Doctors">
      </div>

 

     
      <team-list  :PresentationTeam="PresentationTeam" :title="PresentationTitle"/>
      <team-list  :PresentationTeam="MemberData" :title="MemberTitle"/>
      <BranchesVue/>


    


     
    </div>
 
  </main>

</template>

<script setup>
import { ref } from 'vue';
import Mission from '@/component/Mission.vue';
import TeamList from '@/component/TeamList.vue';
import BranchesVue from '@/component/Branches.vue';


const PresentationTitle= ref("Team Presentation:");
const MemberTitle= ref("Team Members:");

const PresentationTeam = ref([
  {
    title: "Nicole Zuiker, CEO",
    text: "A Dutch national, has a Master of Sciences in Product Design at Technical University of Delft in the Netherlands and has a history working in education, consultancy, and management.",
    teamImage: new URL('@/assets/Rectangle.png', import.meta.url).href,
  },
  {
    title: "Mohammed Al-Gunaid, Director and Operation Manager",
    text: "A Yemeni national, has a Master's degree in Business Administration of Bangalore and has a background in IT network engineering and established an extensive experience in guiding patients in India.",
    teamImage: new URL('@/assets/Rectangle.png', import.meta.url).href,
  },
  {
    title: "Kfayed Kahn, Director and Business Developer for India and Dubai",
    text: "An Indian national, has a bachelor's degree in Commerce, owns a practice in alternative treatment methods in Bangalore, and is a physical therapist.",
    teamImage: new URL('@/assets/Rectangle.png', import.meta.url).href,
  },
  {
    title: "Abdullah Al-Junaid, Director of Leeuw Yemen and Business Developer for Yemen",
    text: "A Yemeni national, has a master's degree in business administration, a bachelor's in Economic Sciences (from universities in Yemen), and a diploma in system engineering (in Jordan). Under the supervision of the United Nations Office for the Coordination of Humanitarian Affairs, Abdullah led many projects for the One World Bank in Yemen, such as the Basic Education Development Project. He was also a project manager for Enhancing Learning Opportunities for Vulnerable Students in several governorates in Yemen.",
    teamImage: new URL('@/assets/sur/Abdullah.png', import.meta.url).href,
  }
]);


const MemberData =ref([
{
    title: "Kareem Anes Al-Gunaid, medicine doctor of Sana’a branch",
    text: "a Yemeni national, is a graduated doctor and specialised in medical medicine. He will assist our Yemeni patients.",
    teamImage: new URL('@/assets/sur/Kareem.png', import.meta.url).href,
  },
{
    title: "Timothy van der Hoeven, medical advisor",
    text: "Timothy is a medical doctor from The Netherlands with a specialisation in General Practice (Family Medicine). He has gained international experience in tropical and emergency medicine, working in countries like Malawi, Indonesia and Suriname. Timothy is currently in training for an additional specialisation in Elderly Medicine at the Amsterdam University Medical Centre",
      teamImage: new URL('@/assets/sur/Timothy.png', import.meta.url).href,
  },
{
    title: "Paul Zuiker, business and financial advisor ",
    text: "Paul is business consultant since 1996 and advises companies in all kinds of industries in the field of finance and organisational development. He obtained his master of science degree at the Technical University in Eindhoven, the Netherlands. Paul is director of Emergent (see www.emergent.nl) and co-director of ValueMatch (see www.valauematch.net). He is co-author of several societal and management books.", 
     teamImage: new URL('@/assets/sur/Paul.png', import.meta.url).href,
  },
{
    title: "Loeke Grimmon, marketing team",
    text: "A Belgian national who has a bachelor in Architecture at University of Antwerp, Belgium and a Master of Science in Urban Design at University of Strathclyde in Glasgow, Scotland. Loeke extends her skillset beyond architecture and city design by delving into interior design, graphic design and illustration.", 
     teamImage: new URL('@/assets/sur/Loeke.png', import.meta.url).href,
  },
{
    title: "Islam Loussaief, business developer for Saudi Arabia",
    text: "A Tunisia national, has a bachelor in Computer administration, founder of Muneriz International Group in business solutions", 
     teamImage: new URL('@/assets/Rectangle.png', import.meta.url).href,
  },

])
</script>

<style scoped>


.aboutimage {
  display: flex;
  margin: auto;
  width: 95%;
  justify-content: space-between;
  align-items: center;
}

.centered-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.team-row {
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin: auto;
  margin-bottom: 20px;

}

.subtitle {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}

.text-row {
  max-width: 80%;
}


@media screen and (max-width: 768px){
  
  .aboutimage{
    width: 80%;
  }
  
  .aboutimage img{
    width: 30%;
  }

  .title{
    font-size: 30px;
  }

  img{
    width: 50%;
  }
}
  </style>
