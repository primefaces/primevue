import Vue, { VNode } from 'vue';

declare class ConfirmPopup extends Vue {
    group?: string;
    $slots: {
        message: VNode[];
    }
}

export default ConfirmPopup;