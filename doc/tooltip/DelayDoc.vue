<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding delays to the show and hide events are defined with <i>showDelay</i> and <i>hideDelay</i> options respectively.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', showDelay: 1000, hideDelay: 300 }" type="text" placeholder="Delayed" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText v-tooltip="{ value: 'Enter your username', showDelay: 1000, hideDelay: 300 }" type="text" placeholder="Delayed" />`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', showDelay: 1000, hideDelay: 300 }" type="text" placeholder="Delayed" />
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', showDelay: 1000, hideDelay: 300 }" type="text" placeholder="Delayed" />
    </div>
</template>`
            }
        };
    }
};
</script>
