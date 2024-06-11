<template>
    <DocSectionText v-bind="$attrs">
        <p>
            <i>valueColor</i> defines the value color, <i>rangeColor</i> defines the range background and similarly <i>textColor</i> configures the color of the value text. In addition, <i>strokeWidth</i> is used to determine the width of the stroke
            of range and value sections.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 50,
            code: {
                basic: `
<Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
`,
                options: `
<template>
  <div class="card flex justify-center">
      <Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
  </div>
</template>

<script>
export default {
  data() {
      return {
          value: 50
      }
  }
};
<\/script>
`,
                composition: `
<template>
  <div class="card flex justify-center">
      <Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>
`
            }
        };
    }
};
</script>
