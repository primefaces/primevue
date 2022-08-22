import Vue from 'vue';

declare class Textarea extends Vue {
    value?: string;
    autoResize?: boolean;
    $emit(eventName: 'input', value: string): this;
}

export default Textarea;