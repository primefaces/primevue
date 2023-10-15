<template>
    <DocSectionText v-bind="$attrs" :level="2" />
    <div class="card flex justify-content-center">
        <ProgressSpinner
            :pt="{
                spinner: { style: { animationDuration: '0s' } },
                circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ProgressSpinner
    :pt="{
        spinner: { style: { animationDuration: '0s' } },
        circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner
            :pt="{
                spinner: { style: { animationDuration: '0s' } },
                circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
            }"
        />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner
            :pt="{
                spinner: { style: { animationDuration: '0s' } },
                circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
            }"
        />
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
