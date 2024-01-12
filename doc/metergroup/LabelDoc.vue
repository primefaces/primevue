<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Default layout of MeterGroup is <i>horizontal</i>, and also <i>labelOrientation</i> property can be set as <i>vertical</i>.In addition, position of the label can be changed using <i>labelPosition</i> property that the default value is
            <i>end</i> and also <i>start</i> option is available.
        </p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start" />
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
<MeterGroup :value="value" labelPosition="start" />
`,
                options: `
<template>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start" />
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
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start" />
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
