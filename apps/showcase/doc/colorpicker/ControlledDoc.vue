<template>
    <DocSectionText v-bind="$attrs">
        <p>ColorPicker can be controlled programmatically using value property as a model.</p>
    </DocSectionText>
    <div class="card flex items-center justify-center gap-8">
        <ColorPicker v-model="colorRGB" format="rgb" />
        <ColorPicker v-model="colorRGB" inline format="rgb" />
        <div class="flex flex-col gap-4 *:space-x-2">
            <div>
                <label>R</label>
                <InputNumber v-model="r" :max="255" :min="0" />
            </div>
            <div>
                <label>G</label>
                <InputNumber v-model="g" :max="255" :min="0" />
            </div>
            <div>
                <label>B</label>
                <InputNumber v-model="b" :max="255" :min="0" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            r: 100,
            g: 102,
            b: 241,
            code: {
                basic: `
<ColorPicker v-model="colorRGB" format="rgb" />
<ColorPicker v-model="colorRGB" inline format="rgb" />
`,
                options: `
<template>
    <div class="card flex items-center justify-center gap-8">
        <ColorPicker v-model="colorRGB" format="rgb" />
        <ColorPicker v-model="colorRGB" inline format="rgb" />
        <div class="flex flex-col gap-4 *:space-x-2">
            <div>
                <label>R</label>
                <InputNumber v-model="r" :max="255" :min="0" />
            </div>
            <div>
                <label>G</label>
                <InputNumber v-model="g" :max="255" :min="0" />
            </div>
            <div>
                <label>B</label>
                <InputNumber v-model="b" :max="255" :min="0" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            r: 100,
            g: 102,
            b: 241
        }
    },
    computed: {
        colorRGB: {
            get() {
                return { r: this.r, g: this.g, b: this.b };
            },
            set(newValue) {
                this.r = newValue.r;
                this.g = newValue.g;
                this.b = newValue.b;
            }
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex items-center justify-center gap-8">
        <ColorPicker v-model="colorRGB" format="rgb" />
        <ColorPicker v-model="colorRGB" inline format="rgb" />
        <div class="flex flex-col gap-4 *:space-x-2">
            <div>
                <label>R</label>
                <InputNumber v-model="r" :max="255" :min="0" />
            </div>
            <div>
                <label>G</label>
                <InputNumber v-model="g" :max="255" :min="0" />
            </div>
            <div>
                <label>B</label>
                <InputNumber v-model="b" :max="255" :min="0" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const r = ref(100);
const g = ref(102);
const b = ref(241);

const colorRGB = computed({
    get() {
        return { r: r.value, g: g.value, b: b.value };
    },
    set(newValue) {
        r.value = newValue.r;
        g.value = newValue.g;
        b.value = newValue.b;
    }
});
<\/script>
`
            }
        };
    },
    computed: {
        colorRGB: {
            get() {
                return { r: this.r, g: this.g, b: this.b };
            },
            set(newValue) {
                this.r = newValue.r;
                this.g = newValue.g;
                this.b = newValue.b;
            }
        }
    }
};
</script>
