<template>
    <DocPTViewer :docs="docs">
        <Breadcrumb :home="home" :model="items" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home'
            },
            items: [{ label: 'Electronics' }, { label: 'Computer', icon: 'pi pi-desktop' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }],
            docs: [
                {
                    data: getPTOptions('Breadcrumb'),
                    key: 'Breadcrumb'
                }
            ]
        };
    }
};
</script>
