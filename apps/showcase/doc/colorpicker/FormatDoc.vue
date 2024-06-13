<template>
    <DocSectionText v-bind="$attrs">
        <p>Default color format to use in value binding is <i>hex</i> and other possible values can be <i>rgb</i> and <i>hsb</i> using the <i>format</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
            <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-4" />
            <span>{{ colorHEX }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
            <ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-4" />
            <span>{{ JSON.stringify(colorRGB) }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
            <ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-4" />
            <span>{{ JSON.stringify(colorHSB) }}</span>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            colorHEX: '6466f1',
            colorRGB: { r: 100, g: 102, b: 241 },
            colorHSB: { h: 239, s: 59, b: 95 },
            code: {
                basic: `
<ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-4" />
<ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-4" />
<ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-4" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
            <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-4" />
            <span>{{ colorHEX }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
            <ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-4" />
            <span>{{ JSON.stringify(colorRGB) }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
            <ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-4" />
            <span>{{ JSON.stringify(colorHSB) }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorHEX: '6466f1',
            colorRGB: { r: 100, g: 102, b: 241 },
            colorHSB: { h: 239, s: 59, b: 95 }
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
            <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-4" />
            <span>{{ colorHEX }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
            <ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-4" />
            <span>{{ JSON.stringify(colorRGB) }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
            <ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-4" />
            <span>{{ JSON.stringify(colorHSB) }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const colorHEX = ref('6466f1');
const colorRGB = ref({ r: 100, g: 102, b: 241 });
const colorHSB = ref({ h: 239, s: 59, b: 95 });
<\/script>
`
            }
        };
    }
};
</script>
