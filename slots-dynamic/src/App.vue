<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="whichButton = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="whichButton = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button @click="whichButton = 'app-red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="whichButton">
                    <h1 slot="stuffAndThings">Stuff in here!</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                whichButton: null
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
