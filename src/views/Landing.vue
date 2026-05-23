<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id='wormLanding' class="flex flex-col items-center lg:pt-40">
        <img class='welcomeLogo lg:h-75 md:h-50' src="/wrm_logo_no_tag.png" alt="WRMWRKS Logo">
        <RouterLink to="/home">
            <div id="goButton" class="goButton mt-10">
                <p>GO</p>
            </div>
        </RouterLink>
    </div>
<div class="backgroundElement"></div>
</template>

<script>
export default {
    mounted() {
        const page = document.getElementById('wormLanding')
        const button = document.getElementById('goButton')
        page.style.opacity = 0
        button.style.opacity = 0
        setTimeout(() => {
            page.style.opacity = 100
            setTimeout(() => {
                button.style.opacity = 100
            }, 800)
        }, 10);
    }
}
</script>


<style scoped>
    #wormLanding{
        position: relative;
        z-index: 1;
    }

    #wormLanding > * {
        margin: 34px;
    }

    .backgroundElement {
        background-color: #2C3930;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh; 
        overflow: hidden; 
        z-index: 0;
    }
</style>