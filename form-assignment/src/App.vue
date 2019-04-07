<template>
    <div class="container">
        <form v-if="!formSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="first-name"
                            v-model="userData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="last-name"
                            v-model="userData.lastName">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="email"
                            v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                            type="password"
                            class="form-control"
                            id="password"
                            v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <p>Store your data?</p>
                        <label for="data-yes">Yes</label>
                        <input 
                            type="radio"
                            class="form-control"
                            id="data-yes"
                            value="Yes"
                            v-model="dataSave">
                        <label for="data-no">No</label>
                        <input 
                            type="radio"
                            class="form-control"
                            id="data-no"
                            value="No"
                            v-model="dataSave">
                    </div>
                    <div class="form-group">
                        <button 
                            class="btn btn-primary"
                            @click="submitted">Submit</button>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="formSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.firstName }} {{ userData.lastName }} </p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{ dataSave }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                },
                dataSave: '',
                formSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.formSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
