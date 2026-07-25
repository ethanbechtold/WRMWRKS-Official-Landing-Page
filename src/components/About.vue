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

<div class="wormBio bg-antique flex flex-col doubleGold m-5 pb-5 lg:grid xl:ml-75 xl:mr-75">
    <img class="pt-5 w-75 pl-5 pr-5 self-center object-scale-down lg:w-150 lg:col-2 lg:row-span-3" src="https://media.wrmwrks.net/images/thumbs/PFP.PNG">
        <div name="aboutDescription" class="text-center p-2 md:text-base md:mr-5 md:justify-left flex flex-col justify-center lg:p-20">
            <h2 class="text-4xl mt-5 mb-5 relative sm:bottom-2 text-center">Ethan</h2>
            
            <div class="lg:text-lg xl:text-xl"> 
            <p>I've been making digital 
            content professionally since the age of 16.
            I received my BFA in Cinematic Arts Production from APU in 2023 with a focus in cinematography and color science.</p>
            <p>My collaborations include major companies such as Adobe and long-standing industry professionals like Disney animator, Tony Bancroft.</p>
            <p>My goal is to provide effective and affordable service to those in my community</p>

            </div>
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
    .bioFont {
        font-size: medium;
        padding-top: 5px;
    }
    }


</style>