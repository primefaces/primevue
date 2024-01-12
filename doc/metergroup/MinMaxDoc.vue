<template>
    <DocSectionText v-bind="$attrs">
        <p>Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.</p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" :max="120" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: [
                { label: 'Apps', value: 16, color: '#EB9A9C', icon: 'pi pi-cog' },
                { label: 'Messages', value: 8, color: '#FFCF91', icon: 'pi pi-envelope' },
                { label: 'Media', value: 24, color: '#93DEAC', icon: 'pi pi-image' },
                { label: 'System Data', value: 20, color: '#91cff8', icon: 'pi pi-database' }
            ],
            code: {
                basic: `
<MeterGroup :value="value" :max="120"  />
`,
                options: `
<template>
    <div class="card">
        <MeterGroup :value="value" :max="120"  />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: [
                { label: 'Apps', value: 16, color: '#EB9A9C', icon: 'pi pi-cog' },
                { label: 'Messages', value: 8, color: '#FFCF91', icon: 'pi pi-envelope' },
                { label: 'Media', value: 24, color: '#93DEAC', icon: 'pi pi-image' },
                { label: 'System Data', value: 20, color: '#91cff8', icon: 'pi pi-database' }
            ],
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <MeterGroup :value="value" :max="120"  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', value: 16, color: '#EB9A9C', icon: 'pi pi-cog' },
    { label: 'Messages', value: 8, color: '#FFCF91', icon: 'pi pi-envelope' },
    { label: 'Media', value: 24, color: '#93DEAC', icon: 'pi pi-image' },
    { label: 'System Data', value: 20, color: '#91cff8', icon: 'pi pi-database' }
]);
<\/script>
`
            }
        };
    }
};
</script>
