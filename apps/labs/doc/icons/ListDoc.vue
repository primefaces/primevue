<template>
    <DocSectionText v-bind="$attrs">
        <p>Here is the full list of PrimeIcons. More icons will be added periodically and you may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>
    </DocSectionText>

    <InputText v-model="filter" class="w-full p-4 mt-4 mb-6" placeholder="Search an icon" />

    <div class="card">
        <div class="grid grid-cols-12 gap-4 text-center">
            <div v-for="icon of filteredIcons" :key="icon.properties.name" class="col-span-12 md:col-span-2 mb-8">
                <i :class="'text-2xl mb-4 text-surface-500 dark:text-surface-400 pi pi-' + icon.properties.name"></i>
                <div>pi-{{ icon.properties.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { IconService } from '@/service/IconService';

export default {
    data() {
        return {
            icons: null,
            filter: null
        };
    },
    mounted() {
        IconService.getIcons().then((data) => {
            let d_data = data;
            let d_icons = d_data.filter((value) => {
                return value.icon.tags.indexOf('deprecate') === -1;
            });

            d_icons.sort((icon1, icon2) => {
                if (icon1.properties.name < icon2.properties.name) return -1;
                else if (icon1.properties.name < icon2.properties.name) return 1;
                else return 0;
            });

            this.icons = d_icons;
        });
    },
    computed: {
        filteredIcons() {
            let sanitizedInput = this.filter?.replace(/[^\w\s]/gi, '').replace(/\s/g, '');

            if (this.filter)
                return this.icons.filter((icon) => {
                    return (
                        icon.icon.tags.some((tag) =>
                            tag
                                .replace(/[^\w\s]/gi, '')
                                .replace(/\s/g, '')
                                .includes(sanitizedInput.toLowerCase())
                        ) ||
                        icon.properties.name
                            .replace(/[^\w\s]/gi, '')
                            .replace(/\s/g, '')
                            .toLowerCase()
                            .includes(sanitizedInput.toLowerCase())
                    );
                });
            else return this.icons;
        }
    }
};
</script>
