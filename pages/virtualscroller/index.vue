<template>
    <DocComponent
        title="Vue Virtual Scroller Component"
        header="VirtualScroller"
        description="VirtualScroller is a performant approach to render large amounts of data efficiently."
        :componentDocs="docs"
        :apiDocs="['VirtualScroller']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/virtualscroller/AccessibilityDoc';
import BasicDoc from '@/doc/virtualscroller/BasicDoc';
import DelayDoc from '@/doc/virtualscroller/DelayDoc';
import GridDoc from '@/doc/virtualscroller/GridDoc';
import HorizontalDoc from '@/doc/virtualscroller/HorizontalDoc';
import ImportDoc from '@/doc/virtualscroller/ImportDoc';
import LazyDoc from '@/doc/virtualscroller/LazyDoc';
import LoadingDoc from '@/doc/virtualscroller/LoadingDoc';
import PTComponent from '@/doc/virtualscroller/pt/index.vue';
import ThemingDoc from '@/doc/virtualscroller/theming/index.vue';

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
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
