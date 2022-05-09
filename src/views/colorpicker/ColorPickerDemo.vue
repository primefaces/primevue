<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ColorPicker</h1>
                <p>ColorPicker is an input component to select a color.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Inline</h5>
                <ColorPicker v-model="color1" :inline="true" />

                <h5>Overlay</h5>
                <ColorPicker v-model="color2" />
            </div>

            <div class="card">
                <h5>Wall Color</h5>
                <div class="flex flex-column align-items-center md:flex-row md:align-items-start">
                    <ColorPicker v-model="color3" :inline="true" />
                    <div :style="wallStyle" class="mt-5 md:mt-0 md:ml-5 inline-flex">
                        <img alt="room" src="demo/images/interior.png" class="w-full md:auto">
                    </div>
                </div>
            </div>
        </div>

        <ColorPickerDoc />
    </div>
</template>

<script>
import ColorPickerDoc from './ColorPickerDoc';

export default {
    data() {
        return {
            color1: null,
            color2: '1976D2',
            color3: '474747'
        }
    },
    computed: {
        wallStyle() {
            return {
                backgroundColor: '#' + this.color3
            }
        }
    },
    components: {
        'ColorPickerDoc': ColorPickerDoc
    }
}
</script>