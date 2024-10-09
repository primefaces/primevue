<template>
    <DocPTViewer :docs="docs">
        <IftaLabel>
            <InputText id="username" v-model="value" autocomplete="off" />
            <label for="username">Username</label>
        </IftaLabel>
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
                    data: getPTOptions('IftaLabel'),
                    key: 'IftaLabel'
                }
            ]
        };
    }
};
</script>
