<template>
    <DocPTViewer :docs="docs" class="!justify-start">
        <div class="">
            <div class="p-drawer p-component h-[450px] w-80" role="complementary" aria-modal="true" data-pc-name="drawer" data-pc-section="root">
                <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="firstfocusableelement"></span>
                <div class="p-drawer-header" data-pc-section="header">
                    <div class="p-drawer-title" data-pc-section="title">Drawer</div>
                    <button
                        class="p-button p-component p-button-icon-only p-button-secondary p-button-rounded p-button-text p-drawer-close-button"
                        type="button"
                        aria-label="Close"
                        data-pc-name="pcclosebutton"
                        data-p-disabled="false"
                        data-p-severity="secondary"
                        data-pc-group-section="iconcontainer"
                        data-pc-extend="button"
                        data-pc-section="root"
                    >
                        <TimesIcon class="p-button-icon" />
                    </button>
                </div>
                <div class="p-drawer-content" data-pc-section="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>
                <div class="p-drawer-footer" data-pc-section="footer">Footer</div>
                <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="lastfocusableelement"></span>
            </div>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import TimesIcon from '@primevue/icons/times';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            visible: true,
            docs: [
                {
                    data: getPTOptions('Drawer'),
                    key: 'Drawer'
                }
            ]
        };
    },
    components: {
        TimesIcon: markRaw(TimesIcon)
    }
};
</script>
