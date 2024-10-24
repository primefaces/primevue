<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>halfStars</i> is present, values between x.5 and x+1 will be represented as a half star.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" halfStars />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {``

        return {
            value: 3.5,
            code: {
                basic: `
<Rating v-model="value" halfStars />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" halfStars />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 3.5
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" halfStars />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3.5);
<\/script>
`
            }
        };
    }
};
</script>
