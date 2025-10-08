<script setup>
    import NBtn from './NBtn.vue'
    import Links from '../router/siteLinks.vue';
    import { useWindowSize } from '@vueuse/core';
    import { RouterLink } from 'vue-router';
</script>

<script>
    export default {
        data() {
            return {
                menuStatus: NBtn.isNavbar,
                w: useWindowSize(),
            }
        },
    }
</script>

<template>
    <div class="mainHeader">
        <div class="container pt-10 pb-5 pl-5 pr-5 fit-content md:pt-15 md:mr-10 md:ml-19 lg:ml:100">
            <RouterLink to="/">
                <div class="flex justify-baseline">
                    <img class=" w-48 pb-5 h-auto md:w-64 lg:w-100" src="/public/wrmwrks business card.svg"></img>
                </div>
            </RouterLink>
            <div v-if="w.width > 800" class="lg:text-2xl lg:text-xl md:text-lg absolute lg:right-40 md:right-15 xs:right-10 top-30">
                <Links />
            </div>
        </div>
    </div>   
</template>

<style scoped>
    .container {
        width: fit-content;
    }
    .wormTitle {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 32px;
    }
    * {
        background-color: #2C3930;
        color: #DCD7C9;

    }
    a {
        font-size: large;
        transition: 50ms;
    }
    a:hover {
        transition: 50ms;
        font-size:larger;
        color: coral;
    }

    .navBar {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        height:100%;
    }
</style>