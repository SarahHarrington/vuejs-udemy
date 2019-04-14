<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- The pipe applies the filter to the first thing -->
                <!-- This only transforms the value we see in the template
                it does not transform the data property itself-->
                <!-- By adding another | with filter, it chains the filters -->
                <!-- The filters will go in order -->
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from '../List'
    export default {
        data() {
            return {
                text: 'Hello there!',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        // This will create filters
        // This is a local filter
        filters: {
            //this could also be written as 'toUppercase'(value) {...}
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        // computed properties can be better and have better performance
        // than a filter
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText)
                })
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
