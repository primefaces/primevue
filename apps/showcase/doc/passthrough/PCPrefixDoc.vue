<template>
    <DocSectionText v-bind="$attrs">
        <p>Section names that start with the <i>pc</i> prefix indicate that the element is a PrimeVue component not a DOM element.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button
            type="button"
            label="Messages"
            icon="pi pi-users"
            badge="2"
            outlined
            :pt="{
                root: 'border-violet-500',
                label: 'text-violet-900 dark:text-violet-400',
                icon: 'text-violet-900 dark:text-violet-400',
                pcBadge: {
                    root: '!bg-violet-400 !text-white'
                }
            }"
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
<Button type="button" label="Messages" icon="pi pi-users" badge="2" outlined
    :pt="{
        root: 'border-violet-500',
        label: 'text-violet-900 dark:text-violet-400',
        icon: 'text-violet-900 dark:text-violet-400',
        pcBadge: {
            root: '!bg-violet-400 !text-white'
        }
    }"
/>
`,
                options: `
<template>
    <Button type="button" label="Messages" icon="pi pi-users" badge="2" outlined
        :pt="{
            root: 'border-violet-500',
            label: 'text-violet-900 dark:text-violet-400',
            icon: 'text-violet-900 dark:text-violet-400',
            pcBadge: {
                root: '!bg-violet-400 !text-white'
            }
        }"
    />
</template>
`,
                composition: `
<template>
    <Button type="button" label="Messages" icon="pi pi-users" badge="2" outlined
        :pt="{
            root: 'border-violet-500',
            label: 'text-violet-900 dark:text-violet-400',
            icon: 'text-violet-900 dark:text-violet-400',
            pcBadge: {
                root: '!bg-violet-400 !text-white'
            }
        }"
    />
</template>
`
            }
        };
    }
};
</script>
