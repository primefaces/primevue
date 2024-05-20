<template>
    <DocSectionText v-bind="$attrs">
        <p>Splitters can be combined to create advanced layouts.</p>
    </DocSectionText>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
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
    <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
    <SplitterPanel :size="80">
        <Splitter layout="vertical">
            <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
            <SplitterPanel :size="85">
                <Splitter>
                    <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                    <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </SplitterPanel>
</Splitter>
`,
                options: `
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
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
            <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
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
