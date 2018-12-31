<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Spinner</h1>
                <p>Spinner is an input component to provide a numerical input.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <Spinner v-model="value1" />

            <h3>Min/Max</h3>
            <Spinner v-model="value2" :min="0" :max="100" />

            <h3>Step</h3>
            <Spinner v-model="value3" :step="0.25" />

            <h3>Disabled</h3>
            <Spinner v-model="value4" :disabled="true" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null
        }
    }
}
</script>

<style>

</style>
