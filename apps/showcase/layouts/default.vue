<template>
    <div :class="containerClass" :data-p-theme="$appState.theme">
        <AppNews />
        <AppTopBar @menubutton-click="onMenuButtonClick" />
        <Transition name="px-modal">
            <div v-if="sidebarActive" class="layout-mask" @click="onMaskClick"></div>
        </Transition>
        <div class="layout-content">
            <app-menu :active="sidebarActive" />
            <div class="layout-content-slot">
                <slot></slot>
            </div>
        </div>
        <ClientOnly fallback-tag="div" fallback="Theme Designer">
            <AppDesigner />
        </ClientOnly>
        <AppFooter />
        <Toast />
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />
    </div>
</template>

<script>
import { blockBodyScroll, unblockBodyScroll } from '@primeuix/utils/dom';

export default {
    data() {
        return {
            sidebarActive: false
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                if (!process.client || typeof window === 'undefined') {
                    return;
                }

                this.sidebarActive = false;
                unblockBodyScroll('blocked-scroll');
                this.$toast.removeAllGroups();
            }
        }
    },
    methods: {
        onMenuButtonClick() {
            if (this.sidebarActive) {
                this.sidebarActive = false;
                unblockBodyScroll('blocked-scroll');
            } else {
                this.sidebarActive = true;
                blockBodyScroll('blocked-scroll');
            }
        },
        onMaskClick() {
            this.sidebarActive = false;
            unblockBodyScroll('blocked-scroll');
        },
        isOutdatedIE() {
            let ua = window.navigator.userAgent;

            if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
                return true;
            }

            return false;
        }
    },
    computed: {
        containerClass() {
            return [
                'layout-wrapper',
                {
                    'layout-news-active': this.$appState.newsActive
                }
            ];
        }
    }
};
</script>
