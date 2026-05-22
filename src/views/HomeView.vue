<script setup>
import About from '../components/About.vue';
import Carousel from '../components/Carousel.vue';
import ProjectPopup from '../components/projectPopup.vue';
import VideoPlayer from '../components/VideoPlayer.vue';
import Videos from '../components/Videos.vue';
import Contact from "../components/Contact.vue";



</script>

<script>
  export default {
    data() {
      return {
        components: {
                    VideoPlayer,
                },
                reelOptions: {
                    autoplay: true,
                    controls: "hide",
                    fluid: true,
                    aspectRatio: '16:9',
                    muted: true,
                    loop: true,
                    sources: [{
                        src: 'https://media.wrmwrks.net/reel_v2.mp4',
                        type: 'video/mp4'
                        }],

                    
                }
      }
      
    }
  }

</script>


<template>
<main>
  <Videos></Videos>
  <h1>Photo</h1>
  <Carousel />
  <Contact></Contact>
  <p class="text-center">to save money on unnecessary subscriptions, wrmwrks.net is built and hosted by yours truly. if something is not working, please submit a complaint to bug@wrmwrks.net</p>
</main>
</template>

<style>
.mainVid {
  max-width: 400px;
}

</style>