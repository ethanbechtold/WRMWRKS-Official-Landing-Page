<script setup>
import { useWindowSize } from '@vueuse/core';
import siteLinks from '../router/siteLinks.vue'
</script>


<script>

export default {
    data() {
        return {
            isNavbar: false,
            w: useWindowSize()
        }
    },
    methods: {
        toggleNav() {
            this.isNavbar = !this.isNavbar
        },
        closeNav() {
            this.isNavbar = false
        }
    }
        
}


</script>


<template>
    
    <button v-if="w.width < 800" @click="toggleNav" class="btn cursor-pointer text-2xl p-1 fixed right-10 top-10">&#8801;</button>
    <Transition mode="out-in">
        <div v-if="isNavbar" class="navBar fixed right-0 top-0 flex-fill pt-20">
            <button v-if="isNavbar, w.width > 800" @click="closeNav" class="absolute right-10 top-10">X</button>
            <siteLinks @click="toggleNav" class="flex flex-col gap-10 pl-5"/>
        </div>
    </Transition>
     <!-- invisible 'click off' button (mobile) -->
    <div v-if="isNavbar"class="clickOff" @click="closeNav"></div>
</template>

<style scoped>
    @import 'tailwindcss';
    .v-enter-active, .v-leave-active {
        max-width: 100%;
        opacity: 100%;
        transition: 200ms;
    }

    .v-enter-from, .v-leave-to {
        max-width: 0;
        transition: 200ms;
    }

    .btn {
        z-index: 99;
    }
    .clickOff {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        width: 55%;
        height: 100%;
    }
    .navBar {
        z-index: 3;
        background-color: #6B8A7A;
        height:100%;
        width: 45%;
        box-shadow: 0px 2px 50px 50px rgba(0, 36, 8, 0.192);

        border-radius: .75rem 0 0 .75rem;
    }

    a:hover {
        color: coral;

    }

</style>