<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <div class="relative w-full h-[400px]">
            <Dock :model="items">
                <template #itemicon="{ item }">
                    <img v-tooltip.top="item.label" :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Finder',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
                },
                {
                    label: 'App Store',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
                },
                {
                    label: 'Photos',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
                },
                {
                    label: 'Trash',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
                }
            ],
            ptViewerDoc: [
                {
                    data: getPTOptions('Dock'),
                    key: 'Dock'
                }
            ]
        };
    }
};
</script>
