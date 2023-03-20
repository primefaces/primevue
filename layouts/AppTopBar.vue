<template>
    <div :ref="containerRef" class="layout-topbar">
        <div class="layout-topbar-inner">
            <button type="button" class="p-link menu-button" @click="onMenuButtonClick" aria-haspopup aria-label="Menu">
                <i class="pi pi-bars"></i>
            </button>

            <div id="docsearch"></div>

            <ul class="flex list-none m-0 p-0 gap-2 align-items-center">
                <li>
                    <a
                        href="https://github.com/primefaces/primevue"
                        class="flex p-link border-1 w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                    >
                        <i class="pi pi-github text-700"></i>
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/gzKFYnpmCY" class="flex p-link border-1 w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary">
                        <i class="pi pi-discord text-700"></i>
                    </a>
                </li>
                <li>
                    <button type="button" class="p-button flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center transition-all transition-duration-300 min-w-0" @click="onConfigButtonClick">
                        <i class="pi pi-cog"></i>
                    </button>
                </li>

                <li class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="p-link flex align-items-center surface-card h-2rem px-3 hover:surface-hover border-1 border-solid surface-border transition-all transition-duration-300 hover:border-primary"
                    >
                        <span class="text-900"> {{ versions[0].version }}</span>
                        <span class="ml-2 pi pi-angle-down text-600"></span>
                    </button>

                    <div class="p-3 surface-overlay hidden absolute right-0 top-auto border-round shadow-2 origin-top w-12rem">
                        <ul class="list-none m-0 p-0">
                            <li v-for="version in versions" :key="version.version" role="none">
                                <a :href="version.url" class="block p-2 border-round hover:surface-hover w-full">
                                    <span class="font-bold text-900">{{ version.name }}</span>
                                    <span class="ml-2 text-700">{{ version.version }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';
import docsearch from '@docsearch/js';

export default {
    emits: ['menubutton-click', 'configbutton-click'],
    outsideClickListener: null,
    data() {
        return {
            versions: [
                {
                    name: 'v3',
                    version: pkg.version,
                    url: 'https://www.primevue.org'
                },
                {
                    name: 'v2',
                    version: '2.10.1',
                    url: 'https://www.primefaces.org/primevue-v2'
                }
            ]
        };
    },
    scrollListener: null,
    container: null,
    mounted() {
        this.bindScrollListener();

        docsearch({
            container: '#docsearch',
            appId: '01CMUF4W4R',
            indexName: 'primevue',
            apiKey: '9bb5939e36897b26ff7de5b7b64d6c43'
        });
    },
    beforeUnmount() {
        if (this.scrollListener) {
            this.unbindScrollListener();
        }
    },
    methods: {
        onConfigButtonClick(event) {
            this.$emit('configbutton-click', event);
        },
        onMenuButtonClick(event) {
            this.$emit('menubutton-click', event);
        },
        bindScrollListener() {
            if (!this.scrollListener) {
                if (this.container) {
                    this.scrollListener = () => {
                        if (window.scrollY > 0) this.container.classList.add('layout-topbar-sticky');
                        else this.container.classList.remove('layout-topbar-sticky');
                    };
                }
            }

            window.addEventListener('scroll', this.scrollListener);
        },
        unbindScrollListener() {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.isOutsideTopbarMenuClicked(event)) {
                        this.unbindOutsideClickListener();
                    }
                };

                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideTopbarMenuClicked(event) {
            return !(this.$refs.topbarMenu.isSameNode(event.target) || this.$refs.topbarMenu.contains(event.target));
        },
        containerRef(el) {
            this.container = el;
        }
    }
};
</script>
