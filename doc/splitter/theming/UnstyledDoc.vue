<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
