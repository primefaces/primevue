<template>
    <DocPTViewer :docs="docs">
        <Message closable severity="info" icon="pi pi-send">Info Message</Message>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Message'),
                    key: 'Message'
                }
            ]
        };
    }
};
</script>
