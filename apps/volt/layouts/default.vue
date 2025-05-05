<template>
    <div :class="containerClass">
        <AppNews />
        <AppTopBar @menubutton-click="onMenuButtonClick" />
        <div :class="['layout-mask', { 'layout-mask-active': sidebarActive }]" @click="onMaskClick"></div>
        <div class="layout-content">
            <app-menu :active="sidebarActive" />
            <div class="layout-content-slot">
                <slot></slot>
            </div>
        </div>
        <AppFooter />
        <Toast />
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />
        <ConfirmDialog />
    </div>
</template>

<script setup lang="ts">
import ConfirmDialog from '@/volt/ConfirmDialog.vue';
import Toast from '@/volt/Toast.vue';
import { blockBodyScroll, unblockBodyScroll } from '@primeuix/utils/dom';
import { useToast } from 'primevue/usetoast';
import { computed, ref, watch } from 'vue';

const { layoutState } = useLayout();
const route = useRoute();
const toast = useToast();
const sidebarActive = ref(false);

const containerClass = computed(() => {
    return [
        'layout-wrapper',
        {
            'layout-news-active': layoutState.newsActive
        }
    ];
});

const onMenuButtonClick = () => {
    if (sidebarActive.value) {
        sidebarActive.value = false;
        unblockBodyScroll('blocked-scroll');
    } else {
        sidebarActive.value = true;
        blockBodyScroll('blocked-scroll');
    }
};

const onMaskClick = () => {
    sidebarActive.value = false;
    unblockBodyScroll('blocked-scroll');
};

watch(
    () => route.path,
    () => {
        // if (!import.meta.client || typeof window === 'undefined') {
        //     return;
        // }

        sidebarActive.value = false;
        unblockBodyScroll('blocked-scroll');
        toast.removeAllGroups();
    }
);
</script>
