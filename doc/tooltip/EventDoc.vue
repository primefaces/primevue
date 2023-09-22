<template>
    <DocSectionText v-bind="$attrs">
        <p>Tooltip is configured via modifiers that can be chained. Also, tooltip gets displayed on hover event by default, use <i>focus</i> modifier as alternative to set.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.focus="'Enter your username'" type="text" placeholder="Focus" />
        <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText v-tooltip.focus="'Enter your username'" type="text" placeholder="Focus" />
<Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.focus="'Enter your username'" type="text" placeholder="Focus" />
        <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.focus="'Enter your username'" type="text" placeholder="Focus" />
        <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
    </div>
</template>`
            }
        };
    }
};
</script>
