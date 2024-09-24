<template>
    <DocPTViewer :docs="docs">
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
            docs: [
                {
                    data: getPTOptions('ProgressBar'),
                    key: 'ProgressBar'
                }
            ]
        };
    }
};
</script>
