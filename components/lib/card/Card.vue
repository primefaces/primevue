<template>
    <div class="p-card p-component" v-bind="ptm('root')">
        <div v-if="$slots.header" class="p-card-header" v-bind="ptm('header')">
            <slot name="header"></slot>
        </div>
        <div class="p-card-body" v-bind="ptm('body')">
            <div v-if="$slots.title" class="p-card-title" v-bind="ptm('title')">
                <slot name="title"></slot>
            </div>
            <div v-if="$slots.subtitle" class="p-card-subtitle" v-bind="ptm('subtitle')">
                <slot name="subtitle"></slot>
            </div>
            <div class="p-card-content" v-bind="ptm('content')">
                <slot name="content"></slot>
            </div>
            <div v-if="$slots.footer" class="p-card-footer" v-bind="ptm('footer')">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'Card',
    extends: BaseComponent
};
</script>
