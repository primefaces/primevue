<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content for icon is displayed with the handle slot that takes an check state as a parameter.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked">
            <template #handle="{ checked }">
                <i :class="checked ? 'pi pi-check' : 'pi pi-times'" />
            </template>
        </ToggleSwitch>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<ToggleSwitch v-model="checked">
    <template #handle="{ checked }">
        <i :class="checked ? 'pi pi-check' : 'pi pi-times'" />
    </template>
</ToggleSwitch>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked">
            <template #handle="{ checked }">
                <i :class="checked ? 'pi pi-check' : 'pi pi-times'" />
            </template>
        </ToggleSwitch>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked">
            <template #handle="{ checked }">
                <i :class="checked ? 'pi pi-check' : 'pi pi-times'" />
            </template>
        </ToggleSwitch>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
