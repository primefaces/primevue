<template>
    <component :is="as" :class="[cx('root'), selector]" v-bind="ptmi('root')">
        <slot></slot>
    </component>
</template>

<script>
import { useStyle } from 'primevue/usestyle';
import { ObjectUtils, UniqueComponentId } from 'primevue/utils';
import BaseText, { styleData } from './BaseText.vue';

export default {
    name: 'Text',
    extends: BaseText,
    inheritAttrs: false,
    data() {
        return {
            selector: undefined,
            styleInstance: undefined
        };
    },
    watch: {
        styles(newValue) {
            this.loadStyles(newValue);
        }
    },
    mounted() {
        this.loadStyles(this.styles);
    },
    beforeUnmount() {
        this.styleInstance?.unload();
    },
    methods: {
        loadStyles(_styles) {
            this.selector = this.selector || UniqueComponentId('pvtxt');
            const css = ObjectUtils.css.getRule(`.${this.selector}`, _styles);

            this.styleInstance = useStyle(css, { name: `text-${this.selector}` });
            this.styleInstance?.load();
        }
    },
    computed: {
        styles() {
            return styleData.toString(this.$props);
        }
    }
};
</script>
