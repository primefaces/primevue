<template>
      <div :class="containerClass" :style="containerStyle">
        <div class="p-datatable-scrollable-header" ref="scrollHeader" @scroll="onHeaderScroll">
            <div class="p-datatable-scrollable-header-box" ref="scrollHeaderBox">
                <table class="p-datatable-scrollable-header-table">
                    <colgroup>
                        <template v-for="(col,i) of columns">
                            <col v-if="shouldRenderCol(col)" :key="col.columnKey||col.field||i" :style="col.headerStyle" />
                        </template>
                    </colgroup>
                    <slot name="header"></slot>
                    <slot name="frozenbody"></slot>
                </table>
            </div>
        </div>
        <div class="p-datatable-scrollable-body" ref="scrollBody" @scroll="onBodyScroll" :style="bodyStyle">
            <table ref="scrollTable" :class="bodyTableClass" :style="bodyTableStyle">
                <colgroup>
                    <template v-for="(col,i) of columns">
                        <col v-if="shouldRenderCol(col)" :key="col.columnKey||col.field||i" :style="col.bodyStyle || col.headerStyle" />
                    </template>
                </colgroup>
                <slot name="body"></slot>
            </table>
            <table ref="loadingTable" :style="{top:'0', display: 'none'}" class="p-datatable-scrollable-body-table p-datatable-loading-virtual-table p-datatable-virtual-table" v-if="virtualScroll">
                <colgroup>
                    <col v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.bodyStyle || col.headerStyle" />
                </colgroup>
                <DTTableLoadingBody :columns="columns" :rows="rows" />
            </table>
            <div class="p-datatable-virtual-scroller" ref="virtualScroller"></div>
        </div>
        <div class="p-datatable-scrollable-footer" ref="scrollFooter">
            <div class="p-datatable-scrollable-footer-box" ref="scrollFooterBox">
                <table class="p-datatable-scrollable-footer-table">
                    <colgroup>
                        <template v-for="(col,i) of columns">
                            <col v-if="shouldRenderCol(col)" :key="col.columnKey||col.field||i" :style="col.footerStyle || col.headerStyle" />
                        </template>
                    </colgroup>
                    <slot name="footer"></slot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import TableLoadingBody from './TableLoadingBody';

export default {
    props: {
        frozen: {
            type: Boolean,
            default: false
        },
        frozenWidth: {
            type: String,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        scrollHeight: {
            type: String,
            default: null
        },
        virtualScroll: {
            type: Boolean,
            default: false
        },
        virtualRowHeight: {
            type: Number,
            default: null
        },
        rows: {
            type: Number,
            default: null,
        },
        totalRecords: {
            type: Number,
            default: 0
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array,String],
            default: null
        }
    },
    virtualScrollCallback: null,
    mounted() {
        if (!this.frozen)
            this.alignScrollBar();
        else
            this.$refs.scrollBody.style.paddingBottom = DomHandler.calculateScrollbarWidth() + 'px';

        if (this.virtualScroll) {
            this.$refs.virtualScroller.style.height = this.totalRecords * this.virtualRowHeight + 'px';
        }
    },
    updated() {
        if (this.virtualScrollCallback) {
            this.virtualScrollCallback();
            this.virtualScrollCallback = null;
        }
    },
    watch: {
        totalRecords(newValue) {
            if (this.virtualScroll) {
                this.$refs.virtualScroller.style.height = newValue * this.virtualRowHeight + 'px';
            }
        }
    },
    methods: {
        onHeaderScroll() {
            this.$refs.scrollHeader.scrollLeft = 0;
        },
        onBodyScroll() {
            let frozenView = this.$el.previousElementSibling;
            let frozenScrollBody;
            if (frozenView) {
                frozenScrollBody = DomHandler.findSingle(frozenView, '.p-datatable-scrollable-body');
            }

            if (frozenScrollBody) {
                frozenScrollBody.scrollTop = this.$refs.scrollBody.scrollTop;
            }

            this.$refs.scrollHeaderBox.style.marginLeft = -1 * this.$refs.scrollBody.scrollLeft + 'px';
            if (this.$refs.scrollFooterBox) {
                this.$refs.scrollFooterBox.style.marginLeft = -1 * this.$refs.scrollBody.scrollLeft + 'px';
            }

            if (this.virtualScroll) {
                let viewport = DomHandler.getClientHeight(this.$refs.scrollBody);
                let tableHeight = DomHandler.getOuterHeight(this.$refs.scrollTable);
                let pageHeight = this.virtualRowHeight * this.rows;
                let virtualTableHeight = DomHandler.getOuterHeight(this.$refs.virtualScroller);
                let pageCount = (virtualTableHeight / pageHeight)||1;
                let scrollBodyTop = this.$refs.scrollTable.style.top||'0';

                if(this.$refs.scrollBody.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight || this.$refs.scrollBody.scrollTop < parseFloat(scrollBodyTop)) {
                    if (this.$refs.loadingTable) {
                        this.$refs.loadingTable.style.display = 'table';
                        this.$refs.loadingTable.style.top = this.$refs.scrollBody.scrollTop + 'px';
                    }

                    let page = Math.floor((this.$refs.scrollBody.scrollTop * pageCount) / (this.$refs.scrollBody.scrollHeight)) + 1;
                    this.$emit('virtual-scroll', {
                        page: page
                    });

                    this.virtualScrollCallback = () => {
                        if (this.$refs.loadingTable) {
                            this.$refs.loadingTable.style.display = 'none';
                        }

                        this.$refs.scrollTable.style.top = ((page - 1) * pageHeight) + 'px';
                    }
                }
            }
        },
        alignScrollBar() {
            let scrollBarWidth = DomHandler.calculateScrollbarWidth();

            this.$refs.scrollHeaderBox.style.paddingRight = scrollBarWidth + 'px';
            if (this.$refs.scrollFooterBox) {
                this.$refs.scrollFooterBox.style.paddingRight = scrollBarWidth + 'px';
            }
        },
        shouldRenderCol(column) {
            if (this.rowGroupMode && this.rowGroupMode === 'subheader') {
                return this.groupRowsBy !== column.field;
            }

            return true;
        }
    },
    computed: {
        containerClass() {
            return ['p-datatable-scrollable-view', {'p-datatable-frozen-view': this.frozen, 'p-datatable-unfrozen-view': !this.frozen && this.frozenWidth}];
        },
        containerStyle() {
            if (this.frozenWidth) {
                if (this.frozen) {
                    return {
                        width: this.frozenWidth
                    };
                }
                else {
                    return {
                        width: 'calc(100% - ' + this.frozenWidth + ')',
                        left: this.frozenWidth
                    }
                }
            }
            else {
                return null;
            }
        },
        bodyTableClass() {
            return ['p-datatable-scrollable-body-table', {'p-datatable-virtual-table': this.virtualScroll}];
        },
        bodyTableStyle() {
            return this.virtualScroll ? {top: '0'} : null;
        },
        bodyStyle() {
            return {
                 maxHeight: this.scrollHeight !== 'flex' ? this.scrollHeight: null,
                 overflowY: !this.frozen && this.scrollHeight ? 'scroll': null
            }
         }
    },
    components: {
        'DTTableLoadingBody': TableLoadingBody
    }
}
</script>