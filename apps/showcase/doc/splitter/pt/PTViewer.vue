<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="docs">
        <Splitter style="height: 300px" class="w-full">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Splitter'),
                    key: 'Splitter'
                },
                {
                    data: getPTOptions('SplitterPanel'),
                    key: 'SplitterPanel'
                }
            ]
        };
    }
};
</script>
