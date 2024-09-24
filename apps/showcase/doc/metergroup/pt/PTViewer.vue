<template>
    <DocPTViewer :docs="docs">
        <MeterGroup :value="value" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: [
                { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
                { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
                { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
                { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
            ],
            docs: [
                {
                    data: getPTOptions('MeterGroup'),
                    key: 'MeterGroup'
                }
            ]
        };
    }
};
</script>
