<template>
    <DocSectionText v-bind="$attrs">
        <p>Knob can be controlled with custom controls as well.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-2">
        <Knob v-model="value" :size="150" readonly />
        <div class="flex gap-2">
            <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
            <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 0,
            code: {
                basic: `
<Knob v-model="value" :size="150" readonly />
<div class="flex gap-2">
    <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
    <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
</div>
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-2">
        <Knob v-model="value" :size="150" readonly />
        <div class="flex gap-2">
            <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
            <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
        </div>
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
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-2">
        <Knob v-model="value" :size="150" readonly />
        <div class="flex gap-2">
            <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
            <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>
`
            }
        };
    }
};
</script>
