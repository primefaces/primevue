<template>
    <DocPTViewer :docs="docs">
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value" placeholder="Search" />
        </IconField>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: null,
            docs: [
                {
                    data: getPTOptions('IconField'),
                    key: 'IconField'
                },
                {
                    data: getPTOptions('InputIcon'),
                    key: 'InputIcon'
                }
            ]
        };
    }
};
</script>
