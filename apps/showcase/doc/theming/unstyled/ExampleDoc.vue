<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Here is a sample that provides a style using Tailwind CSS. Before beginning, head over to the pass through section <NuxtLink to="/button">button</NuxtLink> documentation to learn more about the components internals. We'll be using the
            <i>root</i>, <i>label</i> and <i>icon</i> elements to add a custom style.
        </p>
        <div class="card flex justify-center">
            <Button
                label="Search"
                icon="pi pi-search"
                unstyled
                pt:root="bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2"
                pt:label="text-white font-bold text-lg"
                pt:icon="text-white text-xl"
            />
        </div>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button
    label="Search"
    icon="pi pi-search"
    unstyled
    pt:root="bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2"
    pt:label="text-white font-bold text-lg"
    pt:icon="text-white text-xl"
/>
`
            }
        };
    }
};
</script>
