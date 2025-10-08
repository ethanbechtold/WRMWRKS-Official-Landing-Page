<script>
    export default {
        data() {
            return {
                animationStart: null
            }
        }
    }
</script>

<template>
    
<div class="wormBio bg-antique flex flex-col doubleGold m-5 pb-5 xl:flex-row justify-center 2xl:ml-50 2xl:mr-50">
    <img class=" rounded-lg m-5 w-75 self-center object-scale-down lg:w-150 lg:col-2 lg:row-span-3" src="/pfp.png">
        <div name="aboutDescription" class="text-lg text-center p-2 md:text-base md:mr-5 flex flex-col justify-center lg:text-lg lg:p-20">
            <h1 class="relative sm:bottom-2 lg:bottom-10 text-4xl text-center">About Me</h1>
            <p>My name is Ethan Bechtold, I've been making digital content professionally since the age of 16.
            I received my BFA in Cinematic Arts Production from APU in 2023, where I acted as Director of Photography and Colorist on my Senior Capstone film.</p>
            <p>Upon completing college, I moved to the Santa Cruz area where I worked as a full-service videographer for Mission Springs Conference Center and their Outdoor Education Program.</p>
        </div>
</div>




    
</template>

<style>
    @media screen and (max-width: 1024px) {
        .valuesContainer {
            grid-template-columns: 1;
        }
    }

    @media screen and (max-width: 640px) {
        .valuesContainer{
        display: grid;
        grid-template-columns: 2;
        grid-template-rows: auto;
        grid-auto-flow: column;
        grid-auto-rows: auto;
    }
    }


</style>