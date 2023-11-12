<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <Splitter :pt="{ root: { style: { height: '300px' } }, gutterHandler: { class: 'bg-primary' } }">
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 1 </SplitterPanel>
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 2 </SplitterPanel>
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
<Splitter
    :pt="{
        root: { style: { height: '300px' } },
        gutterHandler: { class: 'bg-primary' }
    }">
    <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 1 </SplitterPanel>
    <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 2 </SplitterPanel>
</Splitter>
`,
                options: `
<template>
    <div class="card">
        <Splitter
            :pt="{
                root: { style: { height: '300px' } },
                gutterHandler: { class: 'bg-primary' }
            }">
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 1 </SplitterPanel>
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card">
        <Splitter
            :pt="{
                root: { style: { height: '300px' } },
                gutterHandler: { class: 'bg-primary' }
            }">
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 1 </SplitterPanel>
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>
`
            }
        };
    }
};
</script>
