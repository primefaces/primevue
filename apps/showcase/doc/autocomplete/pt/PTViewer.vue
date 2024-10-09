<template>
    <DocPTViewer :docs="docs">
        <AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" appendTo="self" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: '',
            items: [],
            docs: [
                {
                    data: getPTOptions('AutoComplete'),
                    key: 'AutoComplete'
                }
            ]
        };
    },
    methods: {
        search(event) {
            let _items = [...Array(10).keys()];

            this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
        }
    }
};
</script>
