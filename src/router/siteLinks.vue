<script>
import { RouterLink } from 'vue-router';


    export default{

    }

</script>


<template>
    <div class="text-black font-xs flex flex-col md:flex-row">
        <RouterLink class="ml-3 mr-3"to="/home"><p>Home</p></RouterLink>
        <!-- <RouterLink class="ml-3 mr-3"to="/projects"><p>Work</p></RouterLink>  -->
        <RouterLink class="ml-3 mr-3" to="/about"><p>About</p></RouterLink>
    </div>
</template>

<style scoped>

</style>