<template>
    <DocSectionText v-bind="$attrs">
        <p>Initial dimension of a panel is percentage based and defined using the <i>size</i> property. In addition,<i>minSize</i> is provided to set a minimum value during a resize.</p>
    </DocSectionText>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
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
<Splitter style="height: 300px">
    <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
</Splitter>
`,
                options: `
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
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
