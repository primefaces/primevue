<template>
    <DocPTViewer :docs="docs">
        <div class="p-toast p-component" data-pc-name="toast">
            <div>
                <div class="p-toast-message p-toast-message-info" data-pc-section="message">
                    <div class="p-toast-message-content" data-pc-section="messagecontent">
                        <InfoCircleIcon class="p-toast-message-icon" data-pc-section="messageicon" />
                        <div class="p-toast-message-text" data-pc-section="messagetext">
                            <span class="p-toast-summary" data-pc-section="summary">Message Summary</span>
                            <div class="p-toast-detail" data-pc-section="detail">Message Detail</div>
                        </div>
                        <div data-pc-section="buttoncontainer">
                            <button class="p-toast-close-button" type="button" data-pc-section="closebutton">
                                <TimesIcon class="p-toast-close-icon" data-pc-section="closeicon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import InfoCircleIcon from '@primevue/icons/infocircle';
import TimesIcon from '@primevue/icons/times';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Toast'),
                    key: 'Toast'
                }
            ]
        };
    },
    components: {
        InfoCircleIcon: markRaw(InfoCircleIcon),
        TimesIcon: markRaw(TimesIcon)
    }
};
</script>
