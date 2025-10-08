<script setup>
import { RouterView } from 'vue-router';
import WHeader from './components/WHeader.vue';
import Footer from './components/Footer.vue';
import NBtn from './components/NBtn.vue';


</script>
<template>
  <main>  
    <WHeader />
    <NBtn />
    <RouterView />
    <Footer />
  </main>
</template>


<style>

</style>