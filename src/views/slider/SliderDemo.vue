<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Slider</h1>
                <p>Slider is an input component to provide a numerical input.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic: {{value1}}</h5>
                <Slider v-model="value1" />

                <h5>Input: {{value2}}</h5>
                <InputText v-model.number="value2" />
                <Slider v-model="value2" />

                <h5>Step: {{value3}}</h5>
                <Slider v-model="value3" :step="20" />

                <h5>Decimal Step: {{value4}}</h5>
                <Slider v-model="value4" :step="0.5" />

                <h5>Range: {{value5}}</h5>
                <Slider v-model="value5" :range="true" />

                <h5>Vertical: {{value6}}</h5>
                <Slider v-model="value6" orientation="vertical" />
            </div>
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
            value4: 30.5,
            value5: [20,80],
            value6: 50
        }
    },
    components: {
        'SliderDoc': SliderDoc
    }
}
</script>

<style scoped>
.p-slider-horizontal, .p-inputtext {
    width: 14rem;
}

.p-slider-vertical {
    height: 14rem;
}
</style>
