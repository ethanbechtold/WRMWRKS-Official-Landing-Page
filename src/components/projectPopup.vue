<script>
import Projects from "./Projects.json"
import { useToggle } from "@vueuse/core";
const projects = Projects

export default {
    data() {
        return{
            projects: Projects,
            popup: false,
            title: "",
            client: "",
            description:"",
            media: [],
        }
    },
    methods: {
        open(x){
        console.log(x)
        },
        getProject(proj){
            console.log(proj)
            this.title = proj.title
            this.client = proj.client
            this.description = proj.description
            this.media = proj.media
            this.links = proj.links
            console.log(this.link)
            // Not working suddenly
            window.scrollTo(0,0)
        },
    },
}
    

</script>

<template>

<!-- <v-overlay id="PROJECTPOPUP" class="absolute h-full w-full bg-red-500" v-if="popup"></v-overlay> -->
<div v-if="popup">
    <button @click="popup = false">< BACK</button>
    <!-- Selected project title and description-->
    <h1 class="text-center"><strong>{{ title }}</strong></h1>
    <h2 class="text-center">{{ client }}</h2>
    <p class="m-5">{{ description }}</p>
    <a v-if="this.links" :href="this.links" target="_blank" class="text-lg">Watch {{ title }} in its entirety here!</a>
    <!-- contains images and supporting information for selected project  -->
    <div class="grid grid-cols-2 grid-rows-4 gap-2 lg:pl-75 lg:pr-75">
        <div v-for="src in this.media" class="imageContainer pl-2 pr-2">
            <img :src="src.link" class="btsImage" alt="Placeholder">
            <p> {{ src.description }} ({{ src.source }})</p>
        </div>
    </div>
</div>

<div v-for="proj in projects" class="grid grid-cols-1 grid-auto-rows justify-items-center">
<button id="popupBtn" v-if="!popup" @click="getProject(proj); popup = true" class="buttonContain p-4 m-2 border-1 rounded-sm w-fit">
    <h2 id="buttonText">{{ proj.title }}</h2>
</button>

</div>

</template>

<style>

.buttonContain {
    transition: 1000ms;
    background: none;
}

.buttonContain:hover {
    transition: 20ms;
    background: rgba(255, 91, 91, 0.281);
}

#popupBtn {
    font-size: x-large;
}

#popupBtn:hover {
    font-size: xx-large;
}

</style>