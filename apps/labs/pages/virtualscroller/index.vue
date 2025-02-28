<template>
    <DocComponent
        title="Vue Virtual Scroller Component"
        header="VirtualScroller"
        description="VirtualScroller is a performant approach to render large amounts of data efficiently."
        :componentDocs="docs"
        apiLink="/virtualscroller/#api"
        ptLink="/virtualscroller/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/virtualscroller/AccessibilityDoc.vue';
import BasicDoc from '@/doc/virtualscroller/BasicDoc.vue';
import DelayDoc from '@/doc/virtualscroller/DelayDoc.vue';
import GridDoc from '@/doc/virtualscroller/GridDoc.vue';
import HorizontalDoc from '@/doc/virtualscroller/HorizontalDoc.vue';
import ImportDoc from '@/doc/virtualscroller/ImportDoc.vue';
import LazyDoc from '@/doc/virtualscroller/LazyDoc.vue';
import LoadingDoc from '@/doc/virtualscroller/LoadingDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'horizontal',
                    label: 'Horizontal',
                    component: HorizontalDoc
                },
                {
                    id: 'grid',
                    label: 'Grid',
                    component: GridDoc
                },
                {
                    id: 'delay',
                    label: 'Delay',
                    component: DelayDoc
                },
                {
                    id: 'loading',
                    label: 'Loading',
                    component: LoadingDoc
                },
                {
                    id: 'lazy',
                    label: 'Lazy',
                    component: LazyDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
