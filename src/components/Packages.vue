<script>
import listPackages from './packages.json'
export default {
    data() {
        return {
            packlist: listPackages

        }
    }
}

</script>

<template>
<div class="flex flex-col justify-center align-center p-4 ml-2 mr-2 bg-blue-50 mb-10">
    <h1 class="font-bold text-center underline">Wedding Film Packages</h1>
    <p class="text-center mb-5">All wedding films come with a short 'trailer' delivered next week at no additional cost.</p>
    <div class="flex justify-around">
        <div v-for="item in packlist" :key="item.tier">
            <h2 class="underline">{{ item.name }}</h2>
                <ul class="text-center">
                <li>{{ item.price }}</li>
                <li>{{ item.length + " minutes" }}</li>
                <li>{{ item.resolution }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<style scoped>
    .packageTable {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
        justify-items: center;
        }

    li {
        font-size: medium;
    }

</style>