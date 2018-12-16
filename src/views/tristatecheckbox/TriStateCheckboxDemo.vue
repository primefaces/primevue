<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TriStateCheckbox</h1>
                <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <p-triStateCheckbox v-model="value" />
            <p>Value: <span style="font-weight: bold">{{value == null ? 'null' : value}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
</script>

<style>

</style>
