<script setup>
import videojs from 'video.js';
import VideoPlayer from './VideoPlayer.vue';
import videos from '../media/videos.json';
import { ref } from 'vue';




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
                    sources: [{
                        src: 'https://media.wrmwrks.net/reel_v2.mp4',
                        type: 'video/mp4'
                        }],

                    
                },
                videoDescription: videos[0].desc,
                videoTitle: videos[0].name
                

                
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
                this.videoDescription = video.desc
                this.videoTitle = video.name
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

    <div id="mainReelVid" class="flex flex-col items-center pt-10 pb-15 2xl:flex-row 2xl:justify-around md:gap-10">
        <VideoPlayer :key="reelOptions.sources" id="player" class="mainReelVid" :options="reelOptions"></VideoPlayer>
        <div class="flex flex-col pb-5 2xl:relative 2xl:right-60">
            <div class="flex flex-col items-center 2xl:items-start">
                <h1>{{ videoTitle }}</h1>
                <p class="self-center xl:self-baseline">{{ videoDescription }}</p>
            </div>
        </div>
    </div>
    <!-- <iframe src="https://player.vimeo.com/video/1104625606?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Ethan Bechtold Sizzle Reel 2024"></iframe> -->
    <h2 class="text-center">See What Else</h2>

    <!-- Thumbnail links from videos.json -->
    <div class="grid grid-cols-1 gap-5 p-5 lg:grid-cols-4 lg:content-center">
        <button class="ml-3 mr-3 sm:ml-0 sm:mr-0" v-for="clip in videos" @click="changeCurrentVideo(clip), scrollTo('mainReelVid')">
            <img :src=clip.thumbnail></img>
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