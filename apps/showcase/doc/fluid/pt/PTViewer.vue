<template>
    <DocPTViewer :docs="docs">
        <Fluid>
            <InputText />
        </Fluid>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Fluid'),
                    key: 'Fluid'
                }
            ]
        };
    }
};
</script>
