<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="(index, i) in 5"
                    :key="i">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
    div {
        border: solid 1px blue;
    }
</style>

