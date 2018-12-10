<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Textarea</h1>
                <p>Textarea is a multi-line text input element.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <p-textarea v-model="value1" rows="5" cols="30" />

            <h3>Auto Resize</h3>
            <p-textarea v-model="value2" :autoResize="true" rows="5" cols="30" />

            <h3>Disabled</h3>
            <p-textarea v-model="value3" disabled rows="5" cols="30" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 'Welcome to PrimeVue',
            value2: '',
            value3: ''
        }
    }
}
</script>

<style>

</style>
