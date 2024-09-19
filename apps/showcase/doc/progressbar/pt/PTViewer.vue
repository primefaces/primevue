<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <div class="w-full">
            <ProgressBar :value="50"></ProgressBar>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            ptViewerDoc: [
                {
                    data: getPTOptions('ProgressBar'),
                    key: 'ProgressBar'
                }
            ]
        };
    }
};
</script>
