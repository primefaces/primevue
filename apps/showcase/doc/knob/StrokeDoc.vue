<template>
    <DocSectionText v-bind="$attrs">
        <p>The border size is specified with the <i>stroke</i> property as a number in pixels.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Knob v-model="value" :strokeWidth="5" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 40,
            code: {
                basic: `
<Knob v-model="value" :strokeWidth="5" />
`,
                options: `
<template>
  <div class="card flex justify-center">
      <Knob v-model="value" :strokeWidth="5" />
  </div>
</template>

<script>
export default {
  data() {
      return {
          value: 40
      }
  }
};
<\/script>
`,
                composition: `
<template>
  <div class="card flex justify-center">
      <Knob v-model="value" :strokeWidth="5" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(40);
<\/script>
`
            }
        };
    }
};
</script>
