<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Knob</h1>
                <p>Knob is a form component to define number inputs with a dial.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="grid formgrid text-center">
                    <div class="field col-12 md:col-4">
                        <h5>Basic</h5>
                        <Knob v-model="value1" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5>Readonly</h5>
                        <Knob v-model="value2" readonly />
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5>Disabled</h5>
                        <Knob v-model="value3" disabled />
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5 class="mt-3">Min/Max</h5>
                        <Knob v-model="value4" :min="-50" :max="50" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5 class="mt-3">Step</h5>
                        <Knob v-model="value5" :step="10" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5 class="mt-3">Template</h5>
                        <Knob v-model="value6" valueTemplate="{value}%" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5 class="mt-3">Stroke</h5>
                        <Knob v-model="value7" :strokeWidth="5" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5 class="mt-3">Size</h5>
                        <Knob v-model="value8" :size="200"/>
                    </div>
                    <div class="field col-12 md:col-4">
                        <h5 class="mt-3">Color</h5>
                        <Knob v-model="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"  />
                    </div>
                </div>
            </div>
        </div>

        <KnobDoc />
    </div>
</template>

<script>
import KnobDoc from './KnobDoc';

export default {
    data() {
        return {
            value1: 0,
            value2: 50,
            value3: 75,
            value4: 10,
            value5: 40,
            value6: 60,
            value7: 40,
            value8: 60,
            value9: 50,
        }
    },
    components: {
        'KnobDoc': KnobDoc
    }
}
</script>