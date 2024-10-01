<template>
    <DocPTViewer :docs="docs">
        <div class="w-full">
            <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Paginator'),
                    key: 'Paginator'
                }
            ]
        };
    }
};
</script>
