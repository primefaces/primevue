<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" class="p-invalid" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `<TriStateCheckbox v-model="value" class="p-invalid" />`,
                options: `
<template>
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" class="p-invalid" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
    </div>  
</template>

<script>
export default {
  data() {
      return {
          value: null
      }
  }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" class="p-invalid" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
    </div>  
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`
            }
        };
    }
};
</script>
