<template>
  <main  >
    <div>

        <HealthHeaderVue/>
        <div>
          <p class="title">Health care services</p>
      <p class="sumtitle">About treatments, hospitals and doctors</p>
        </div>
        <SurgicalVue :Surgical="Surgical" :sectionTitle="SurgicalTitle" />
        <SurgicalVue :Surgical="Nonsurgical" :sectionTitle="Nonsurgicaltitle" />
        <SurgicalVue :Surgical="following" :sectionTitle="Followingtitle" />


    </div>
  </main>
</template>

<script setup>
import HealthHeaderVue from "@/component/HealthHeader.vue";
import SurgicalVue from "@/component/Surgical.vue";
import { ref } from "vue";

const SurgicalTitle= ref(' Surgical');
const Nonsurgicaltitle= ref(' Non-surgical');
const Followingtitle= ref(' Following medical fields are also practiced by the Indian hospitals');


const  Surgical= ref([
  {
topimage:'./src/assets/sur/t/1.png',
title:'Orthopaedics',
text:'This branch of medicine is dealing with the correction or prevention of deformities, injuries or disorders of the musculoskeletal system, consisting for example of muscles, bones, tendons and ligaments.',
butimage:'./src/assets/sur/1.png'
  },
  {
topimage:'./src/assets/sur/t/2.png',
title:'Transplantations',
text:'This is a surgical procedure in which an organ is removed from the donor and transplanted into the recipient. The donor and recipient can also be one and the same person. The most common of organ transplantations is the kidney transplant',
butimage:'./src/assets/sur/2.png'
  },
  {
topimage:'./src/assets/sur/t/3.png',
title:'Neurosurgery',
text:'This branch specialises in surgical treatment of brain and spinal cord disease. Diseases include brain tumors, epilepsy, neurotrauma but also spinal disc herniation.',
butimage:'./src/assets/sur/3.png'
  },
  {
topimage:'./src/assets/sur/t/4.png',
title:'Cardiothoracic surgery',
text:'This medical field treats diseases of the structures within the chest cavity, like the heart and lungs. Interventions include cardiac valve surgery, cardiac bypass surgery and lung removal surgery.',
butimage:'./src/assets/sur/4.png'
  },
  {
topimage:'./src/assets/sur/t/5.png',
title:'Gynaecology and obstetrics',
text:'These are both branches which direct the attention on the female reproduction system. Obstetrics focusses on the pregnancy, the delivery and the period following after given birth. Gynaecology deals with ailments of this system, which includes for example the uterus and ovaries.',
butimage:'./src/assets/sur/5.png'
  },
  {
topimage:'./src/assets/sur/t/6.png',
title:'Urology and andrology',
text:'Urology deals with surgical and medical diseases of the urinary system of both female and male and the male reproduction organs. These include organs as the bladder, kidneys and the adrenal glands as well as prostate and the penis. ',
butimage:'./src/assets/sur/6.png'
  },
  {
topimage:'./src/assets/sur/t/7.png',
title:'Dermatology',
text:'Dermatology specialises in the diagnosis and treatment of skin conditions, which sometimes indicate issues within the body. Treatment can, for example, be done through either medication, therapy or surgery',
butimage:'./src/assets/sur/7.png'
  },
  {
topimage:'./src/assets/sur/t/8.png',
title:'Gastro-intestinal surgery',
text:'This branch specialises in the surgical treatment of diseases of organs in the digestive system, like the esophagus, stomach, small intestine, bowel, liver and pancreas. Diseases include gallstones, appendicitis and various forms of cancer. ',
butimage:'./src/assets/sur/8.png'
  },
  {
   topimage:'./src/assets/sur/t/9.png',
   title:'Proctology',
   text:'This branch diagnoses and treats disorders of the colon, the rectum and the anus. Some of these disorders are haemorrhoids, incontinence and cancer.',
   butimage:'./src/assets/sur/9.png'
  },
  {
topimage:'./src/assets/sur/t/10.png',
title:'Plastic surgery',
text:'Plastic surgery or therapies are used to repair, reconstruct or replace physical defects due to illness, trauma or birth disorders. The procedure restores and improves function, as well as appearance. Cosmetic surgery is focused on the improvement of the appearance according to the wishes of the patient.',
butimage:'./src/assets/sur/10.png'
  },
])


const  Nonsurgical= ref([
  {
topimage:'./src/assets/sur/t/11.png',
title:'Oncology',
text:'The branch of medicine specialises in the diagnosis and treatment of cancer. It includes medical oncology (the use of chemotherapy and other drug treatments), radiation therapy and surgical oncology.',
butimage:'./src/assets/sur/11.png'
  },
  {
topimage:'./src/assets/sur/t/12.png',
title:'Gastroenterology',
text:'This medical branch focuses on the disorders of the digestive system and its organs, such as the intestines and stomach, as well as the accessory organs such as the pancreas and liver. Diseases include inflammatory bowel disease, coeliac disease and liver cirrhosis. ',
butimage:'./src/assets/sur/12.png'
  },
  {
topimage:'./src/assets/sur/t/13.png',
title:'Cardiology',
text:'This branch of medicine is dealing with the disorders and treatment of the heart and the cardiovascular system, for example as a result of a heart attack or heart failure.',
butimage:'./src/assets/sur/13.png'
  },
  {
topimage:'./src/assets/sur/t/14.png',
title:'Neurology',
text:'Neurology is concerned with diagnosing and treating disorders of the nervous system, comprising the brain, the spinal cord and the peripheral nerves. Some of the neurological conditions are a stroke, epilepsy, multiple sclerosis and polyneuropathy.',
butimage:'./src/assets/sur/14.png'
  },
  
  ]);

const following = ref([
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Nephrology',
    text: 'is the medical speciality which concerns the diagnosis and treatment of kidney disorders.',
    butimage: './src/assets/sur/15.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Internal Medicine',
    text: 'is the branch dealing with complex medical diagnoses, managing long-term illnesses, and helping patients with multiple chronic conditions. It also concerns the treatment and prevention of chronic cardiovascular diseases like hypertension, high cholesterol, and obesity.',
    butimage: './src/assets/sur/17.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Immunology',
    text: 'is the area of medicine dedicated to the diagnosis and treatment of immune system conditions, including allergic diseases and their symptoms and reactions.',
    butimage: './src/assets/sur/17.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Endocrinology',
    text: 'is the study and treatment of disorders concerning hormones, endocrine glands, and organs, such as diabetes and thyroid problems.',
    butimage: './src/assets/sur/18.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Hematology',
    text: 'is the medical branch dealing with blood and blood-forming organs like the bone marrow. Diseases include leukemia and bleeding disorders.',
    butimage: './src/assets/sur/19.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Ophthalmology',
    text: 'is the branch of medical science dealing with the structure, functions, and diseases of the eye, like cataracts and glaucoma.',
    butimage: './src/assets/sur/20.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Pediatrics',
    text: 'is the branch of medicine concerned with the development, care, and diseases of babies and children.',
    butimage: './src/assets/sur/21.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Rheumatology',
    text: 'is the branch of medicine dealing with painful, inflammatory, or infectious conditions of the joints and other parts of the musculoskeletal system, such as osteoarthritis, rheumatoid arthritis, and gout.',
    butimage: './src/assets/sur/22.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Vascular Surgery',
    text: 'specializes in treating illnesses of the veins and arteries in the vascular system. Diseases include aneurysms, varicose veins, and peripheral artery disease (claudication). It also aids in the creation of arteriovenous fistula for dialysis.',
    butimage: './src/assets/sur/24.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Anesthesiology',
    text: 'is concerned with perioperative care and pain medicine. People are referred to this department in preparation for surgical treatment. In their outpatient clinic, anesthesiologists specialize in treating chronic pain.',
    butimage: './src/assets/sur/25.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Dentistry',
    text: 'is the specialty of the maintenance of teeth and the repairing of dental issues. Oral surgery deals with complicated issues like difficult tooth extractions and jaw corrections.',
    butimage: './src/assets/sur/27.png'
  },
  {
    topimage: './src/assets/sur/t/15.png',
    title: 'Otolaryngology',
    text: 'is the branch of medicine dealing with the surgical and medical management of conditions of the head and neck. Disorders of the ear, nose, and throat are treated within this discipline.',
    butimage: './src/assets/sur/28.png'
  }
]);



</script>

<style scoped>

  @media screen and (max-width:798px){
main{
}

  .title ,.sumtitle{
    font-size: 30px;

    width: 100%;
  }
}

</style>