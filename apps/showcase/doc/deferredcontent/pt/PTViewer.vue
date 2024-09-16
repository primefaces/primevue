<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="docs">
        <DeferredContent>
            <img src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg" alt="Nature" />
        </DeferredContent>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('DeferredContent'),
                    key: 'DeferredContent'
                }
            ]
        };
    }
};
</script>
