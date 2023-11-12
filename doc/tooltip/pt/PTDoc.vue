<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText
            v-tooltip.right="{
                value: `PrimeVue Rocks!`,
                pt: {
                    text: 'bg-primary'
                }
            }"
            type="text"
            placeholder="PassThrough Tooltip"
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
<InputText
    v-tooltip.right="{
        value: \`PrimeVue Rocks!\`,
        pt: {
            arrow: {
                style: {
                    borderRightColor: 'var(--primary-color)'
                }
            },
            text: 'bg-primary font-medium'
        }
    }"
    type="text"
    placeholder="PassThrough Tooltip"
/>
`,
                options: `<div class="card flex flex-wrap justify-content-center gap-2">
    <InputText
        v-tooltip.right="{
            value: \`PrimeVue Rocks!\`,
            pt: {
                arrow: {
                    style: {
                        borderRightColor: 'var(--primary-color)'
                    }
                },
                text: 'bg-primary font-medium'
            }
        }"
        type="text"
        placeholder="PassThrough Tooltip"
    />
</div>
`,
                composition: `
                <div class="card flex flex-wrap justify-content-center gap-2">
    <InputText
        v-tooltip.right="{
            value: \`PrimeVue Rocks!\`,
            pt: {
                arrow: {
                    style: {
                        borderRightColor: 'var(--primary-color)'
                    }
                },
                text: 'bg-primary font-medium'
            }
        }"
        type="text"
        placeholder="PassThrough Tooltip"
    />
</div>
`
            }
        };
    }
};
</script>
