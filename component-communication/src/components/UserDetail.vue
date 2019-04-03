<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <!-- The {{ name }} needs to match the prop below-->
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <!-- This one is the function from below -->
        <button @click="resetName">Reset Name</button>
        <!-- This is from the prop that is passed in from the User.vue file -->
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        //the name here has to match the property we're using in the template
        // You can also use case sensative like myName - this only works in
        // a single file template
        props: {
            //By making the prop an object, you can add validation
            //Type is the type of prop youre expecting
            //You can also use required or default
            //If you use 
            // type: Object,
            // default: function() {
                // return {
                    //name: 'Max'
                //}
            //}
            name: {
                type: String,
                required: true
            },
            //This is from the prop that is bascially like a call back
            //An alternative to dooigm the custom emit event like below
            resetFn: Function,
            userAge: Number
        },
        methods: {
            //a prop can be used like any other property in the whole vue object
            switchName() {
                return this.name.split("").reverse().join('')
            },
            resetName() {
                //If your property is an array or object, it only exists in memory once
                //if you change it like this, it would also change it in memory
                //Passes a pointer
                //Strings passes a copy
                //This string, only changes it in the child, to change it in the parent
                //we need to create a custom event
                this.name = 'Boom Shaka Laka';
                this.$emit('nameWasReset', this.name);
            }
        },
        //created is one of the lifecycle hooks
        created() {
            //the eventBus needs to be imported at the beginng of the script
            //eventBus.$on is the listener
            //the function is the first argument, and the data passed is the second
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
