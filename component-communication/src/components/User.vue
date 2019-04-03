<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- Use the colon here to bind to the name attribute below -->
                <!-- Otherwise, it just interprets it as a string -->
                <!-- Also needs to match the prop in the array in the child component -->
                <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
                <!-- The @nameWasReset is like v-on -->
                <!-- $event is the event that was sent with the emit event -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Sarah'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }, 
        methods: {
            changeName() {
                this.name = "Blorg"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
