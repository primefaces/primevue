<template>
    <DocSectionText v-bind="$attrs">
        <p>Diameter of the knob is defined in pixels using the <i>size</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Knob v-model="value" :size="200" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 60,
            code: {
                basic: `
<Knob v-model="value" :size="200" />
`,
                options: `
<template>
  <div class="card flex justify-center">
      <Knob v-model="value" :size="200" />
  </div>
</template>

<script>
export default {
  data() {
      return {
          value: 60
      }
  }
};
<\/script>
`,
                composition: `
<template>
  <div class="card flex justify-center">
      <Knob v-model="value" :size="200" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(60);
<\/script>
`
            }
        };
    }
};
</script>
