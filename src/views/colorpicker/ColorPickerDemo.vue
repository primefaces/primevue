<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ColorPicker</h1>
                <p>ColorPicker is an input component to select a color.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Inline</h3>
            <ColorPicker v-model="color1" :inline="true" />

            <h3>Overlay</h3>
            <ColorPicker v-model="color2" />
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
            color2: '1976D2'
        }
    },
    components: {
        'ColorPickerDoc': ColorPickerDoc
    }
}
</script>