<template>
    <DocSectionText v-bind="$attrs">
        <p>When the input does not complete the mask definition, it is cleared by default. Use <i>autoClear</i> property to control this behavior. In addition, <i>?</i> is used to mark anything after the question mark optional.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
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
<InputMask v-model="value" mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="(999) 999-9999? x99999"  placeholder="(999) 999-9999? x99999" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
        
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="(999) 999-9999? x99999"  placeholder="(999) 999-9999? x99999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
        `
            }
        };
    }
};
</script>
