<template>
<div class="main">
    <img src="/src/assets/man-with-classes.png" alt="">

    <div class="mission">

        <h1 class="title" style="text-align: start;">Mission and core values</h1>
        <p class="subtitle">What does Leeuw stand for</p>
        <p>Mission Leeuw’s mission is to facilitate high quality and affordable medical care for patients who have no access to it in their own surroundings and to be a support to them throughout the whole medical journey.</p>
<h5>Core values Leeuw is upholding </h5>
<ul>
    <li>Sympathy: doing business in an empathic and committed manner with the patient at the centre. </li>
    <li>Integrity: clarity and honesty are keystones of our business. </li>
    <li>Precision: provide holistic services, taking care of every detail.</li>
</ul>
    </div>

</div>
</template>

<script>

</script>

<style scoped>
.main{
    display: flex;
    margin: auto;
    width: 80%;
    justify-content: space-between;
    align-items: center;
}
.mission{
    width: 50%;
    text-align: start;
}
p{
    font-size: 22px;
}
@media screen and (max-width :768px){
    .main{
        widows: 100%;
        flex-direction: column-reverse;
        width: 100%;
        margin: 0;
        padding: 0;

    }
    .mission{
    width: 90%;
    text-align: center;
    padding: 10px;
    margin: 20px;
}

.title{
    font-size: 30px;

}

img{
    width: 50%;
}

}

</style>