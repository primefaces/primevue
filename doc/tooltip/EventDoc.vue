<template>
    <DocSectionText v-bind="$attrs">
        <p>Event to display the tooltip is defined as a modifier, default event is hover.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip.focus.top="'Enter your username'" type="text" placeholder="Focus" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText v-tooltip.focus.top="'Enter your username'" type="text" placeholder="Focus" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center">
        <InputText v-tooltip.focus.top="'Enter your username'" type="text" placeholder="Focus" />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center">
        <InputText v-tooltip.focus.top="'Enter your username'" type="text" placeholder="Focus" />
    </div>
</template>
`
            }
        };
    }
};
</script>
