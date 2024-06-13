<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Here is a sample that provides a style using PrimeFlex CSS library. Before beginning, head over to the pass through section <NuxtLink to="/button">button</NuxtLink> documentation to learn more about the components internals. We'll be
            using the <i>root</i>, <i>label</i> and <i>icon</i> elements to add a custom style.
        </p>
        <div class="card flex justify-center">
            <Button
                label="Check"
                icon="pi pi-check"
                unstyled
                :pt="{
                    root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-4 rounded border-0 flex gap-2' },
                    label: { class: 'text-white font-bold text-xl' },
                    icon: 'text-white text-2xl'
                }"
            />
        </div>
        <DocSectionCode :code="code" />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Check" icon="pi pi-check" unstyled
    :pt="{
        root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-4 rounded border-0 flex gap-2' },
        label: { class: 'text-white font-bold text-xl' },
        icon: 'text-white text-2xl' // OR { class: 'text-white text-2xl' }
    }"
/>
`,
                options: `
<template>
    <div class="card">
        <Button label="Check" icon="pi pi-check" unstyled
            :pt="{
                root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-4 rounded border-0 flex gap-2' },
                label: { class: 'text-white font-bold text-xl' },
                icon: 'text-white text-2xl' // OR { class: 'text-white text-2xl' }
            }"
        />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <Button label="Check" icon="pi pi-check" unstyled
        :pt="{
            root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-4 rounded border-0 flex gap-2' },
            label: { class: 'text-white font-bold text-xl' },
            icon: 'text-white text-2xl' // OR { class: 'text-white text-2xl' }
        }"
    />
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
