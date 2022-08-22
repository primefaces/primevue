import Vue from 'vue';

declare class ProgressBar extends Vue {
    value?: number;
    mode?: string;
    showValue?: boolean;
}

export default ProgressBar;