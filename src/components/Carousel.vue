<script>
    export default {
        methods: {
            left() {
                console.log('left!')
            },
            right() {
                console.log('right!')
            },
 
        },


    }
</script>

<template>
    <div class="flex flex-row justify-center">
        <div ref="carousel" class="flex flex-row overflow-x-scroll overflow-y-clip mb-10 md:mb-20">
            <img class='carousel' src="https://media.wrmwrks.net/images/03%20Luma%20Range%20Wide.jpg" alt="">
        </div>
        
    </div>
</template>

<style scoped>
    button {
        margin-left: 10px;
    }


    .carousel {
        max-height: 480px;
        max-width: auto;
    }
</style>