<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Textarea v-model="value" rows="5" cols="30" />
            <label>Username</label>
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<span class="p-float-label">
    <Textarea v-model="value" rows="5" cols="30" />
    <label>Username</label>
</span>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Textarea v-model="value" rows="5" cols="30" />
            <label>Username</label>
        </span>
    </div>
</template>

<script>
export default {
  data() {
      return {
          value: ''
      }
  }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Textarea v-model="value" rows="5" cols="30" />
            <label>Username</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`
            }
        };
    }
};
</script>
