<script setup>
import image from '../media/img.json'

</script>


<script>
    export default {
        methods: {
            fetchImages(obj) {
                for (let i = 0; i < obj.length; i++) {
                    fetch(obj[i].src)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error (`${response.status}, SORRY PAL`)
                        }

                        return response
                    })
                    .then(data => {
                        console.log(data)
                    })
                }
            }
        },


        mounted() {
            const listImage = image
            this.fetchImages(listImage)
        }


    }
</script>

<template>
    <div class="flex flex-row justify-center">
        <div class="carouselBox flex flex-row overflow-x-scroll overflow-y-clip mb-10 md:mb-20">
            <img v-for='img in image' class="carousel frontPic"  :src="img.src">
        </div>
        
    </div>
</template>

<style scoped>
    button {
        margin-left: 10px;
    }

    .carousel {
        max-height: 375px;
        max-width: none;
        transition: 200ms;

    }
    .carousel:hover{
        overflow-anchor: auto;
        max-height: 390px;
    }

    @media screen and (max-width: 600px) {
        .carousel {
            max-height: 200px;
        }
    }

</style>