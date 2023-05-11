<template>
    <td :style="containerStyle" :class="containerClass" role="cell" v-bind="{ ...getColumnPTOptions('root'), ...getColumnPTOptions('footerCell') }">
        <component v-if="column.children && column.children.footer" :is="column.children.footer" :column="column" />
        {{ columnProp('footer') }}
    </td>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { DomHandler, ObjectUtils } from 'primevue/utils';

export default {
    name: 'FooterCell',
    extends: BaseComponent,
    props: {
        column: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            styleObject: {}
        };
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    methods: {
        columnProp(prop) {
            return ObjectUtils.getVNodeProp(this.column, prop);
        },
        getColumnPTOptions(key) {
            return this.ptmo(this.getColumnProp(), key, {
                props: this.column.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                }
            });
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined;
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');

                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;

                    if (next) {
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }

                    this.styleObject.right = right + 'px';
                } else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;

                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }

                    this.styleObject.left = left + 'px';
                }
            }
        }
    },
    computed: {
        containerClass() {
            return [
                this.columnProp('footerClass'),
                this.columnProp('class'),
                {
                    'p-frozen-column': this.columnProp('frozen')
                }
            ];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('footerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
        }
    }
};
</script>
