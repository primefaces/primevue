<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom icons are used to override the default icons with <i>onicon</i>, <i>officon</i> and <i>cancelicon</i> slots.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value">
            <template #cancelicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/cancel.png" height="24" width="24" />
            </template>
            <template #onicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<Rating v-model="value">
    <template #cancelicon>
        <img src="/images/rating/cancel.png" height="24" width="24" />
    </template>
    <template #onicon>
        <img src="/images/rating/custom-onicon.png" height="24" width="24" />
    </template>
    <template #officon>
        <img src="/images/rating/custom-officon.png" height="24" width="24" />
    </template>
</Rating>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value">
            <template #cancelicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/cancel.png" height="24" width="24" />
            </template>
            <template #onicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value">
            <template #cancelicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/cancel.png" height="24" width="24" />
            </template>
            <template #onicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
