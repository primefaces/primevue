<template>
    <DocSectionText v-bind="$attrs">
        <p>Use a modifier key to <i>fine tune</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <div class="w-14rem">
            <InputText v-model.number="value" class="w-full" />
            <Slider 
                v-model="value"
                :step="1"
                :min="-8"
                :max="8"
                fineTunable
                :fineTuneFactor=".01"
                class="w-14rem"
            />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 0.0,
            code: {
                basic: `
<Slider v-model="value" fineTunable :fineTuneFactor=".1" :step="1" class="w-14rem" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Slider 
            v-model="value"
            :step="1"
            fineTunable
            :min="-8"
            :max="8"
            :fineTuneFactor=".1"
            class="w-14rem"
        \/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Slider 
            v-model="value"
            :step="1"
            fineTunable
            :fineTuneFactor=".1"
            class="w-14rem"
        \/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(20);
<\/script>`
            }
        };
    }
};
</script>
