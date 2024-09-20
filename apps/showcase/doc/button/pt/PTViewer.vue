<template>
    <DocPTViewer :docs="docs">
        <Button label="Profile" icon="pi pi-user" severity="secondary" badge="2" badgeSeverity="contrast" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Button'),
                    key: 'Button'
                }
            ]
        };
    }
};
</script>
