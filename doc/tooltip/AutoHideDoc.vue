<template>
    <DocSectionText v-bind="$attrs">
        <p>Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set <i>autoHide</i> to false to change the default behavior.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="autoHide: true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText v-tooltip="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
<InputText v-tooltip="'Enter your username'" type="text" placeholder="autoHide: true" />`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="autoHide: true" />
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="autoHide: true" />
    </div>
</template>`
            }
        };
    }
};
</script>
