<template>
    <DocSectionText v-bind="$attrs">
        <p>Dlays to the enter and leave events are defined with <i>showDelay</i> and <i>hideDelay</i> options respectively.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center">
        <Button v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" label="Save" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" label="Save" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center">
        <Button v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" label="Save" />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center">
        <Button v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" label="Save" />
    </div>
</template>
`
            }
        };
    }
};
</script>
