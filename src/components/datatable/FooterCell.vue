<template>
    <td :style="containerStyle" :class="containerClass" role="cell"
        :colspan="columnProp('colspan')" :rowspan="columnProp('rowspan')">
        <component :is="column.children.footer" :column="column" v-if="column.children && column.children.footer"/>
        {{columnProp('footer')}}
    </td>
</template>

<script>
import {DomHandler} from 'primevue/utils';

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
                left: '0px'
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
            return this.column.props ? ((this.column.type.props[prop].type === Boolean && this.column.props[prop] === '') ? true : this.column.props[prop]) : null;
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let left = 0;
                let prev = this.$el.previousElementSibling;
                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
                }

                this.styleObject.left = left + 'px';
            }
        }
    },
    computed: {
        containerClass() {
            return [this.columnProp('footerClass'), this.columnProp('class'), {
                'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('footerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject]: [columnStyle, bodyStyle];
        }
    }
}
</script>