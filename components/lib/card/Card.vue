<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="card" data-pc-section="root">
        <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')" data-pc-section="header">
            <slot name="header"></slot>
        </div>
        <div :class="cx('body')" v-bind="ptm('body')" data-pc-section="body">
            <div v-if="$slots.title" :class="cx('title')" v-bind="ptm('title')" data-pc-section="title">
                <slot name="title"></slot>
            </div>
            <div v-if="$slots.subtitle" :class="cx('subtitle')" v-bind="ptm('subtitle')" data-pc-section="subtitle">
                <slot name="subtitle"></slot>
            </div>
            <div :class="cx('content')" v-bind="ptm('content')" data-pc-section="content">
                <slot name="content"></slot>
            </div>
            <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')" data-pc-section="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    name: 'Card',
    extends: BaseCard
};
</script>
