<template>
    <div :class="containerClass">
        <div v-for="(item,index) of value" :key="getKey(item, index)" class="p-timeline-event">
            <div class="p-timeline-event-opposite">
                <slot name="opposite" :item="item" :index="index"></slot>
            </div>
            <div class="p-timeline-event-separator">
                <slot name="marker" :item="item" :index="index">
                    <div class="p-timeline-event-marker"></div>
                </slot>
                <slot name="connector" v-if="index !== (value.length - 1)">
                    <div class="p-timeline-event-connector"></div>
                </slot>
            </div>
            <div class="p-timeline-event-content">
                <slot name="content" :item="item" :index="index"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import {ObjectUtils} from 'primevue/utils';

export default {
    name: 'Timeline',
    props: {
        value: null,
        align: {
            mode: String,
            default: 'left'
        },
        layout: {
            mode: String,
            default: 'vertical'
        },
        dataKey: null
    },
    methods: {
        getKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
        }
    },
    computed: {
        containerClass() {
            return [
                'p-timeline p-component',
                'p-timeline-' + this.align,
                'p-timeline-' + this.layout
            ];
        }
    }
}
</script>

<style>
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: 70px;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
    padding: 0 1rem;
}

.p-timeline-event-content {
    flex: 1;
    padding: 0 1rem;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: flex;
    align-self: baseline;
}

.p-timeline-event-connector {
    flex-grow: 1;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector  {
    width: 100%;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}
</style>
