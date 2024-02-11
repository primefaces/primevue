<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
            <slot name="header"></slot>
        </div>
        <div :class="cx('body')" v-bind="ptm('body')">
            <div v-if="$slots.title || $slots.subtitle" :class="cx('caption')" v-bind="ptm('caption')">
                <div v-if="$slots.title" :class="cx('title')" v-bind="ptm('title')">
                    <slot name="title"></slot>
                </div>
                <div v-if="$slots.subtitle" :class="cx('subtitle')" v-bind="ptm('subtitle')">
                    <slot name="subtitle"></slot>
                </div>
            </div>
            <div :class="cx('content')" v-bind="ptm('content')">
                <slot name="content"></slot>
            </div>
            <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    name: 'Card',
    extends: BaseCard,
    inheritAttrs: false
};
</script>
