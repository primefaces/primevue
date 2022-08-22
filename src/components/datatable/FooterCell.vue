<template>
    <td :style="containerStyle" :class="containerClass" role="cell"
        :colspan="columnProp('colspan')" :rowspan="columnProp('rowspan')">
        <ColumnSlot :data="column.$scopedSlots.footer" :column="column" type="footer" v-if="column.$scopedSlots && column.$scopedSlots.footer"/>
        {{columnProp('footer')}}
    </td>
</template>

<script>
import ColumnSlot from './ColumnSlot';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';

export default {
    props: {
        column: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            styleObject: {
                left: '',
                right: ''
            }
        }
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
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');
                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;
                    if (next) {
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.left);
                    }
                    this.styleObject.right = right + 'px';
                }
                else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;
                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
                    }
                    this.styleObject.left = left + 'px';
                }
            }
        }
    },
    computed: {
        containerClass() {
            return [this.columnProp('footerClass'), this.columnProp('className'), {
                'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('footerStyle');
            let columnStyle = this.columnProp('styles');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject]: [columnStyle, bodyStyle];
        }
    },
    components: {
        'ColumnSlot': ColumnSlot
    }
}
</script>
