<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                //This can be replaced by the eventBus
                // this.$emit('ageWasEdited', this.userAge);
                // eventBus.$emit('ageWasEdited', this.userAge)
                
                //this method has the method passed from the eventBus
                //You can use the eventBus to centrally store the code
                //if you don't want to have it in every component
            
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
