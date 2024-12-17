<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Section names prefixed with <i>pc</i> denote PrimeVue components, distinguishing them from standard DOM elements and indicating the necessity for a nested structure. For example, the "badge" section is identified as <i>pcBadge</i> because
            the button component incorporates the badge component internally.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button
            type="button"
            label="Messages"
            icon="pi pi-inbox"
            badge="2"
            variant="outlined"
            severity="secondary"
            :pt="{
                root: '!px-4 !py-3',
                icon: '!text-xl !text-violet-500 dark:!text-violet-400',
                label: '!text-lg !text-violet-500 dark:!text-violet-400',
                pcBadge: {
                    root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
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
 <Button
    type="button"
    label="Messages"
    icon="pi pi-inbox"
    badge="2"
    variant="outlined"
    severity="secondary"
    :pt="{
        root: '!px-4 !py-3',
        icon: '!text-xl !text-violet-500 dark:!text-violet-400',
        label: '!text-lg !text-violet-500 dark:!text-violet-400',
        pcBadge: {
            root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
        }
    }"
/>
`,
                options: `
<template>
     <Button
        type="button"
        label="Messages"
        icon="pi pi-inbox"
        badge="2"
        variant="outlined"
        severity="secondary"
        :pt="{
            root: '!px-4 !py-3',
            icon: '!text-xl !text-violet-500 dark:!text-violet-400',
            label: '!text-lg !text-violet-500 dark:!text-violet-400',
            pcBadge: {
                root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
            }
        }"
    />
</template>
`,
                composition: `
<template>
    <Button
        type="button"
        label="Messages"
        icon="pi pi-inbox"
        badge="2"
        variant="outlined"
        severity="secondary"
        :pt="{
            root: '!px-4 !py-3',
            icon: '!text-xl !text-violet-500 dark:!text-violet-400',
            label: '!text-lg !text-violet-500 dark:!text-violet-400',
            pcBadge: {
                root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
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
