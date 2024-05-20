<template>
    <DocSectionText v-bind="$attrs">
        <p>Panels are displayed as stacked by setting the <i>layout</i> to <i>vertical</i>.</p>
    </DocSectionText>
    <div class="card">
        <Splitter style="height: 300px" layout="vertical">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
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
<Splitter style="height: 300px" layout="vertical">
    <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
</Splitter>
`,
                options: `
<template>
    <div class="card">
        <Splitter style="height: 300px" layout="vertical">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Splitter style="height: 300px" layout="vertical">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
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
