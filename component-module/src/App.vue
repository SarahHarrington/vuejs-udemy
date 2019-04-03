<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <!-- Component -->
        <div class="row">
            <app-servers></app-servers>
            <!-- This is something else -->
            <app-details></app-details>
        </div>
        <hr>
        <!-- This is something else -->
        <div class="row">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/ServerFooter.vue';
    import Servers from './components/Servers.vue';
    import ServerDetails from './components/ServerDetails.vue';

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-servers': Servers,
            'app-details': ServerDetails
        }
    }
</script>

<style>

</style>
