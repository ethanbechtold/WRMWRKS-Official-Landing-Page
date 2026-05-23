<script setup>
import { RouterView } from 'vue-router';
import WHeader from './components/WHeader.vue';
import Footer from './components/Footer.vue';
import NBtn from './components/NBtn.vue';
import ProjectPopup from './components/projectPopup.vue';
</script>

<script>
  export default {
    mounted() {
      console.log(this.name)
    },
    data() {
      return {
        name: "WRMWRKS Official",
      }
    },
    methods: {
      hideHeader() {
        if (ProjectPopup) {
          return true
      }
        else {
          return false
        }
             
      }
    }
  }
</script>

<template>
  <main>
    <NBtn class="sticky" />  
    <WHeader id="#z-axis" class="static w-full"/>
    
    <RouterView />
    
  </main>
  <footer>
    <div class="flex flex-col items-center content-center">
      <p>WRMWRKS 2026</p> 
    </div>

  </footer>
</template>


<style>
footer {
  background-color: rgba(33, 70, 7, 0.686);
  padding: 2.5%;


}

</style>