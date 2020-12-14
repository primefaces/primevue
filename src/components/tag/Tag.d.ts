import Vue from 'vue';

declare class Tag extends Vue {
    value?: any;
    severity?: string;
    rounded?: boolean;
    icon?: string;
}

export default Tag;