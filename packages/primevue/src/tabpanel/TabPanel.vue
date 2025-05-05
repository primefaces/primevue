<template>
    <slot v-if="!$pcTabs"></slot>
    <template v-else>
        <template v-if="!asChild">
            <component v-if="$pcTabs?.lazy ? active : true" v-show="$pcTabs?.lazy ? true : active" :is="as" :class="cx('root')" v-bind="attrs">
                <slot></slot>
            </component>
        </template>

        <slot v-else :class="cx('root')" :active="active" :a11yAttrs="a11yAttrs"></slot>
    </template>
</template>

<script>
import { equals } from '@primeuix/utils/object';
import { mergeProps } from 'vue';
import BaseTabPanel from './BaseTabPanel.vue';

export default {
    name: 'TabPanel',
    extends: BaseTabPanel,
    inheritAttrs: false,
    inject: ['$pcTabs'],
    computed: {
        active() {
            return equals(this.$pcTabs?.d_value, this.value);
        },
        id() {
            return `${this.$pcTabs?.$id}_tabpanel_${this.value}`;
        },
        ariaLabelledby() {
            return `${this.$pcTabs?.$id}_tab_${this.value}`;
        },
        attrs() {
            return mergeProps(this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        a11yAttrs() {
            return {
                id: this.id,
                tabindex: this.$pcTabs?.tabindex,
                role: 'tabpanel',
                'aria-labelledby': this.ariaLabelledby,
                'data-pc-name': 'tabpanel',
                'data-p-active': this.active
            };
        },
        ptParams() {
            return {
                context: {
                    active: this.active
                }
            };
        }
    }
};
</script>
