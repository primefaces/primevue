<template>
    <div class="doc-section-nav-container">
        <ul ref="nav" class="doc-section-nav">
            <li v-for="doc of docs" :key="doc.label" :class="['navbar-item', { 'active-navbar-item': activeId === doc.id }]">
                <div class="navbar-item-content">
                    <button @click="onButtonClick(doc)">{{ doc.label }}</button>
                </div>

                <template v-if="doc.children">
                    <ul>
                        <li v-for="child of doc.children" :key="child.label" :class="['navbar-item', { 'active-navbar-item': activeId === child.id }]">
                            <div class="navbar-item-content">
                                <button @click="onButtonClick(child)">
                                    {{ child.label }}
                                </button>
                            </div>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>

        <div class="mt-8 px-4 py-6 rounded-lg border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-900 w-full" v-if="false">
            <div class="text-xl font-semibold flex flex-col gap-2 text-center">
                <span class="leading-none">Build Faster </span>
                <span class="leading-none text-primary">Design Better</span>
            </div>
            <div class="text-center text-sm mt-4 text-secondary">490+ ready to use UI blocks crafted with PrimeVue and Tailwind CSS.</div>
            <span class="flex justify-center">
                <Button as="a" label="Learn More" href="https://primeblocks.org/" target="_blank" rel="noopener" class="mt-4 inline-flex" rounded />
            </span>
        </div>

        <div class="mt-8 p-4 rounded-lg border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-900 w-full">
            <img src="https://primefaces.org/cdn/discount/primestore-summersale-2025-sm.jpg" class="w-full rounded-lg" alt="Summer Sale 2025" />
            <div class="text-xl font-semibold flex flex-col gap-2 text-center mt-4">
                <span class="leading-none">SUMMER SALE</span>
                <span class="leading-none text-primary">2025</span>
            </div>
            <div class="text-center text-sm mt-4 text-muted-color">Use coupon code <b>PRSM25</b> at checkout to get 50% OFF everything in PrimeStore and PrimeBlocks.</div>
            <span class="flex justify-center">
                <Button as="a" label="Learn More" size="small" href="https://www.primefaces.org/blog/summer-sale-2025" target="_blank" rel="noopener" class="mt-4 inline-flex" rounded />
            </span>
        </div>
    </div>
</template>

<script>
import { findSingle, getHeight, getOffset, getWindowScrollTop, isVisible } from '@primeuix/utils/dom';
import { isNotEmpty } from '@primeuix/utils/object';

export default {
    props: ['docs'],
    data() {
        return {
            activeId: null,
            isScrollBlocked: false,
            scrollEndTimer: null,
            topbarHeight: 0
        };
    },
    watch: {
        '$route.hash'() {
            this.scrollCurrentUrl();
        }
    },
    mounted() {
        this.scrollCurrentUrl();

        window.addEventListener('scroll', this.onScroll, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll, { passive: true });
    },
    methods: {
        onScroll() {
            if (!this.isScrollBlocked) {
                const labels = [...document.querySelectorAll(':is(h1,h2,h3).doc-section-label')].filter((el) => isVisible(el));

                const windowScrollTop = getWindowScrollTop();

                labels.forEach((label) => {
                    const { top } = getOffset(label);
                    const threshold = this.getThreshold(label);

                    if (top - threshold <= windowScrollTop) {
                        const link = findSingle(label, 'a');

                        this.activeId = link.id;
                    }
                });
            }

            clearTimeout(this.scrollEndTimer);
            this.scrollEndTimer = setTimeout(() => {
                this.isScrollBlocked = false;

                const activeItem = findSingle(this.$refs.nav, '.active-navbar-item');

                activeItem && activeItem.scrollIntoView({ block: 'nearest', inline: 'start' });
            }, 50);
        },
        scrollToLabelById(id, behavior = 'smooth') {
            const label = document.getElementById(id);

            label && label.parentElement.scrollIntoView({ block: 'start', behavior });
        },
        onButtonClick(doc) {
            this.$router.push(`${this.checkRouteName}/#${doc.id}`);
            setTimeout(() => {
                this.activeId = doc.id;
                this.scrollToLabelById(doc.id, 'smooth');
                this.isScrollBlocked = true;
            }, 1);
        },
        getThreshold(label) {
            if (!this.topbarHeight) {
                const topbar = findSingle(document.body, '.layout-topbar');

                this.topbarHeight = topbar ? getHeight(topbar) : 0;
            }

            return this.topbarHeight + getHeight(label) * 1.5;
        },
        getIdOfTheSection(section) {
            return section.querySelector('a').getAttribute('id');
        },
        scrollCurrentUrl() {
            const hash = window.location.hash.substring(1);
            const hasHash = isNotEmpty(hash);
            const id = hasHash ? hash : (this.docs[0] || {}).id;

            this.activeId = id;
            hasHash &&
                setTimeout(() => {
                    this.scrollToLabelById(id);
                }, 1);
        }
    },
    computed: {
        checkRouteName() {
            const path = this.$router.currentRoute.value.path;

            if (path.lastIndexOf('/') === path.length - 1) {
                return path.slice(0, -1);
            }

            return path;
        }
    }
};
</script>
