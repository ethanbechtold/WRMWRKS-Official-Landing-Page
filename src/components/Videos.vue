<script setup>
import videojs from 'video.js';
import VideoPlayer from './VideoPlayer.vue';
import videos from '../media/videos.json';



console.log(videos[1])
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
                    sources: [{src: 'https://media.wrmwrks.net/reel_v2.mp4', type: 'video/mp4'}],
                    preload: 'auto'
                    
                },
                

                
        }
        },
        methods: {
            changeCurrentVideo(video) {
                this.reelOptions.sources = [
                    {
                      src: video.src,
                      type: video.type,
                    },
                ]
                console.log(this.reelOptions.sources)
            },
            scrollTo(id) {
                const element = document.getElementById(id)
                element.scrollIntoView({behavior: 'smooth'})
            }
        }   
    }
</script>

<template>

    <!-- video js player skin -->
<link href="https://unpkg.com/video.js@7/dist/video-js.min.css"
        rel="stylesheet"/>

    <div id="mainReelVid" class="flex flex-col-reverse items-center pt-10 pb-15 2xl:flex-row 2xl:justify-around">
        <VideoPlayer :key="reelOptions.sources" id="player" class="mainReelVid" :options="reelOptions"></VideoPlayer>
        <div class="flex flex-col pb-5 2xl:relative 2xl:right-60">
            <h1 id="videoIntroductionText">flexible content.</h1>
            <p class="self-center xl:self-baseline">I've shot a little bit of everything</p>
        </div>
    </div>
    <!-- <iframe src="https://player.vimeo.com/video/1104625606?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Ethan Bechtold Sizzle Reel 2024"></iframe> -->
    <h2 class="text-center">See What Else</h2>

    <!-- Thumbnail links from videos.json -->
    <div class="grid grid-cols-1 gap-5 p-5 lg:grid-cols-4 lg:content-center">
        <button class="ml-3 mr-3 sm:ml-0 sm:mr-0"v-for="clip in videos" @click="changeCurrentVideo(clip), scrollTo('mainReelVid')">
            <img v-bind:src=clip.thumbnail></img>
        </button>
    </div>
</template>

<style scoped>

    * {
        background-color: #0c0e0a;
        color: rgba(215, 241, 198, 0.897);
    }

    .thumbnail {
        width: 1fr;
    }

</style>