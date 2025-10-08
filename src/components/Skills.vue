<script>
import skillsList from "./Skills.json"

export default{ 
    data() {
        return {
            skills: skillsList
        }
    },
}


</script>

<template>  
        <div class="skillContainer m-5 mobileColumn">
            
            <div v-for="skill in skills" :key="id" class="p-2 flex flex-col items-center text-center">
            
                <h2>{{ skill.name }}</h2>
                <p>{{ skill.description }}</p>
            
                
            </div>
            </div>

</template>


<style scoped>
    .skillContainer{
        width: 75%;
        padding: 25px;
        color: #DAD3BE; 
        box-shadow: 0px 0px 19px 4px #6B8A7A;
        background-color: #254336;
        border-radius: .75rem;
    }

</style>
