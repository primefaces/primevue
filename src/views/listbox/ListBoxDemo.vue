<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ListBox</h1>
                <p>ListBox is used to select one or more values from a list of items.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Single</h3>
            <p-listBox v-model="selectedCity" :options="cities" optionLabel="name" />{{selectedCity}}

            <h3>Multiple</h3>
            <p-listBox :multiple="true" v-model="selectedCities" :options="cities" optionLabel="name" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            selectedCities: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ]
        }
    }
}
</script>

<style>

</style>
