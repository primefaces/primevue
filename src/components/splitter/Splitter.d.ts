import Vue from 'vue';

declare class Splitter extends Vue {
    layout?: string;
    gutterSize?: number;
    stateKey?: string;
    stateStorage?: string;
}

export default Splitter;