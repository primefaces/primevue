<template>
    <DocPTViewer :docs="docs">
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
            </template>
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ],
            docs: [
                {
                    data: getPTOptions('Timeline'),
                    key: 'Timeline'
                }
            ]
        };
    }
};
</script>
