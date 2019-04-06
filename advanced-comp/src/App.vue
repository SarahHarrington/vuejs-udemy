<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-author'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
                <p>{{ selectedComponent }}</p>
                <!-- <app-quote>
                    The html here is rendered in the child component 
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p slot="content">A quote for the ages.</p>
                </app-quote> -->

                <!-- This :is keyword here is what binds the component -->
                <keep-alive>
                    <!-- If a dynamic component is wrapped in a 
                    keep-alive element, it will be kept alive overriding
                    the default behavior -->
                    <component :is="selectedComponent">
                        <!-- When you use dynamic components, it is destroyed
                        and starts again by default -->
                        Default Content
                    </component>
                    <!-- There are two lifecycle hooks for dynamic components-->
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        data: function() {
            return {
                // For compiling any of the content, 
                // the code in the template will make the change
                // It's in this components template
                // The computational and data is handled in the parent
                quoteTitle: 'A fancy quote.',
                selectedComponent: 'qpp-quote',
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        }
    }
</script>

<style>
    h2 {
        color: blue;
    }
</style>
