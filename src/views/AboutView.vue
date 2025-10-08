<script setup>
import Bio from '../components/About.vue';
import Skills from '../components/Skills.vue';
</script>

<template>
    <div class="flex flex-col">    
    <main>
        <Bio />
        <!-- <h1 class="underline font-bold text-4xl text-center m-10">CORE VALUES</h1> -->
    <!-- <div class="valuesContainer justify-center">
        <div class="valuesItem"><h2 class="underline text-2xl">ECO FRIENDLY</h2>    
                <p>HOSTED AS IN-HOUSE AS POSSIBLE. WHILE MAINTAINING SECURITY</p></div>
        <div class="valuesItem">
            <h2 class="underline text-2xl">DISCRETE</h2>
            <p>data is collected at the personal level, maintained by me</p>
        </div>

                    
                
                         
        <div class="valuesItem"><h2 class="underline text-2xl">OPTIMIZED RATES</h2>
            <p class="overflow-y-scroll">Others cover their overhead in the starting rate. 
            By frontloading the work of things like this very website 
            I have practically zero overhead costs. I only outsource when time is a factor.
            Otherwise, everything you see here was shot, edited, and developed by me.</p>
        </div>    
                
    </div> -->
        
       
    </main></div>

</template>

<style>

.valuesItem {
        grid-column: auto;
        grid-row: auto;
        text-align: center;
    }

</style>