<script>
    export default {
        data() {
            return {}
        },
        methods: {
            left() {
                // find the images
                // assign images in carousel to an array
                console.log('left!')
            },

            right() {
                console.log('right!')
            }

            
        },
    }
</script>

<template>
    <div class="flex flex-row justify-center">
        <div ref="carousel" class="flex flex-row overflow-x-scroll overflow-y-clip mb-10 md:mb-20">
            <img class="max-w-100 max-h-100 object-cover" src="/05 Luma Ratio Hi Key.jpg" alt=""><img src="" alt="">
            <img class="max-w-100 max-h-100 object-cover" src="/craftyponieannav3.png" alt="me">
            <img class="max-w-100 max-h-100 object-cover" src="/Large Moon-9.jpg" alt="skater">
            <img class="max-w-100 max-h-100 object-cover" src="/end of act one-1.jpg">
            <img class="max-w-100 max-h-100 object-cover" src="/03 Luma Range Wide.jpg" alt="mane">
            <img class="max-w-100 max-h-100 object-cover" src="/birb.jpg" alt="birb">
            <img class="max-w-100 max-h-100 object-cover" src="/seff-3.jpg" alt="seth">
        </div>
        
    </div>
    
</template>

<style scoped>
    button {
        margin-left: 10px;
    }

</style>