<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Slider</h1>
                <p>Slider is an input component to provide a numerical input.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic: {{value1}}</h3>
            <Slider v-model="value1" />

            <h3>Input: {{value2}}</h3>
            <InputText v-model.number="value2" />
            <Slider v-model="value2" />
            
            <h3>Step: {{value3}}</h3>
            <Slider v-model="value3" :step="20" />

            <h3>Range: {{value4}}</h3>
            <Slider v-model="value4" :range="true" />

            <h3>Vertical: {{value5}}</h3>
            <Slider v-model="value5" orientation="vertical" />
        </div>

        <SliderDoc/>
    </div>
</template>

<script>
import SliderDoc from './SliderDoc';

export default {
    data() {
        return {
            value1: null,
            value2: 50,
            value3: 20,
            value4: [20,80],
            value5: 50
        }
    },
    components: {
        'SliderDoc': SliderDoc
    }
}
</script>

<style scoped>
.p-slider-horizontal, .p-inputtext {
    width: 14em;
}

.p-slider-vertical {
     height: 14em;
}
</style>
