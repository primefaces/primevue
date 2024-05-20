<template>
    <DocSectionText v-bind="$attrs">
        <p>A tooltip sample with a custom style and content.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center">
        <Button
            v-tooltip.bottom="{
                value: 'PrimeVue Rocks',
                pt: {
                    arrow: {
                        style: {
                            borderBottomColor: 'var(--p-primary-color)'
                        }
                    },
                    text: 'bg-primary text-primary-contrast font-medium'
                }
            }"
            severity="secondary"
            label="Button"
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
<Button
    v-tooltip.bottom="{
        value: 'PrimeVue Rocks',
        pt: {
            arrow: {
                style: {
                    borderBottomColor: 'var(--p-primary-color)'
                }
            },
            text: 'bg-primary text-primary-contrast font-medium'
        }
    }"
    label="Button"
/>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center">
        <Button
            v-tooltip.bottom="{
                value: 'PrimeVue Rocks',
                pt: {
                    arrow: {
                        style: {
                            borderBottomColor: 'var(--p-primary-color)'
                        }
                    },
                    text: 'bg-primary text-primary-contrast font-medium'
                }
            }"
            severity="secondary"
            label="Button"
        />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center">
        <Button
            v-tooltip.bottom="{
                value: 'PrimeVue Rocks',
                pt: {
                    arrow: {
                        style: {
                            borderBottomColor: 'var(--p-primary-color)'
                        }
                    },
                    text: 'bg-primary text-primary-contrast font-medium'
                }
            }"
            severity="secondary"
            label="Button"
        />
    </div>
</template>
`
            }
        };
    }
};
</script>
