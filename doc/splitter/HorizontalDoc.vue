<template>
    <DocSectionText v-bind="$attrs">
        <p>Splitter requires two SplitterPanel components as children which are displayed horizontally by default.</p>
    </DocSectionText>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Splitter style="height: 300px" class="mb-5">
    <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
</Splitter>
`,
                options: `
<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
