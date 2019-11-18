<template>
      <div :class="containerClass">
        <div class="p-datatable-scrollable-header" ref="scrollHeader" @scroll="onHeaderScroll">
            <div class="p-datatable-scrollable-header-box" ref="scrollHeaderBox">
                <table class="p-datatable-scrollable-header-table'">
                    <colgroup class="p-datatable-scrollable-colgroup">
                        <col v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" />
                    </colgroup>
                    <slot name="header"></slot>
                </table>
            </div>
        </div>
        <div class="p-datatable-scrollable-body" ref="scrollBody" @scroll="onBodyScroll">
            <table ref="scrollTable">
                <colgroup class="p-datatable-scrollable-colgroup">
                    <col v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" />
                </colgroup>
                <slot name="body"></slot>
            </table>
        </div>
        <div class="p-datatable-scrollable-footer" ref="scrollFooter">
            <div class="p-datatable-scrollable-footer-box" ref="scrollFooterBox">
                <table class="p-datatable-scrollable-footer-table">
                    <colgroup class="p-datatable-scrollable-colgroup">
                        <col v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" />
                    </colgroup>
                    <slot name="footer"></slot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import DomHandler from '../utils/DomHandler';

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
        }
    },
    mounted() {
        this.setScrollHeight();

        if (!this.frozen)
            this.alignScrollBar();
        else
            this.$refs.scrollBody.style.paddingBottom = DomHandler.calculateScrollbarWidth() + 'px';
    },
    watch: {
        scrollHeight() {
            this.setScrollHeight();
        }
    },
    methods: {
        onHeaderScroll() {
            this.$refs.scrollHeader.scrollLeft = 0;
        },
        onBodyScroll() {
            let frozenView = this.$refs.previousElementSibling;
            let frozenScrollBody;
            if (frozenView) {
                frozenScrollBody = DomHandler.findSingle(frozenView, '.p-datatable-scrollable-body');
            }

            this.$refs.scrollHeaderBox.style.marginLeft = -1 * this.$refs.scrollBody.scrollLeft + 'px';
            if( this.$refs.scrollFooterBox) {
                this.$refs.scrollFooterBox.style.marginLeft = -1 * this.$refs.scrollBody.scrollLeft + 'px';
            }

            if(frozenScrollBody) {
                frozenScrollBody.scrollTop = this.$refs.scrollBody.scrollTop;
            }
            /*
            if (this.props.virtualScroll) {
                let viewport = DomHandler.getClientHeight(this.scrollBody);
                let tableHeight = DomHandler.getOuterHeight(this.scrollTable);
                let pageHeight = this.props.virtualRowHeight * this.props.rows;
                let virtualTableHeight = DomHandler.getOuterHeight(this.virtualScroller);
                let pageCount = (virtualTableHeight / pageHeight)||1;
                let scrollBodyTop = this.scrollTable.style.top||'0';

                if(this.scrollBody.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight || this.scrollBody.scrollTop < parseFloat(scrollBodyTop)) {
                    if (this.loadingTable) {
                        this.loadingTable.style.display = 'table';
                        this.loadingTable.style.top = this.scrollBody.scrollTop + 'px';
                    }

                    let page = Math.floor((this.scrollBody.scrollTop * pageCount) / (this.scrollBody.scrollHeight)) + 1;
                    if(this.props.onVirtualScroll) {
                        this.props.onVirtualScroll({
                            page: page
                        });

                        this.virtualScrollCallback = () => {
                            if (this.loadingTable) {
                                this.loadingTable.style.display = 'none';
                            }

                            this.scrollTable.style.top = ((page - 1) * pageHeight) + 'px';
                        }
                    }
                }
            }*/
        },
        setScrollHeight() {
            if (this.scrollHeight) {
                if(this.scrollHeight.indexOf('%') !== -1) {
                    let datatableContainer = this.findDataTableContainer(this.$el);
                    this.$refs.scrollBody.style.visibility = 'hidden';
                    this.$refs.scrollBody.style.height = '100px';         //temporary height to calculate static height
                    let containerHeight = DomHandler.getOuterHeight(datatableContainer);
                    let relativeHeight = DomHandler.getOuterHeight(datatableContainer.parentElement) * parseInt(this.scrollHeight, 10) / 100;
                    let staticHeight = containerHeight - 100;       //total height of headers, footers, paginators
                    let scrollBodyHeight = (relativeHeight - staticHeight);

                    this.$refs.scrollBody.style.height = 'auto';
                    this.$refs.scrollBody.style.maxHeight = scrollBodyHeight + 'px';
                    this.$refs.scrollBody.style.visibility = 'visible';
                }
                else {
                    this.$refs.scrollBody.style.maxHeight = this.scrollHeight;
                }
            }
        },
        hasVerticalOverflow() {
            return DomHandler.getOuterHeight(this.$refs.scrollTable) > DomHandler.getOuterHeight(this.$refs.scrollBody);
        },
        alignScrollBar() {
            let scrollBarWidth = this.hasVerticalOverflow() ? DomHandler.calculateScrollbarWidth() : 0;

            this.$refs.scrollHeaderBox.style.marginRight = scrollBarWidth + 'px';
            if (this.$refs.scrollFooterBox) {
                this.$refs.scrollFooterBox.style.marginRight = scrollBarWidth + 'px';
            }
        },
        findDataTableContainer(element) {
            if (element) {
                let el = element;
                while (el && !DomHandler.hasClass(el, 'p-datatable')) {
                    el = el.parentElement;
                }

                return el;
            }
            else {
                return null;
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-datatable-scrollable-view', {'p-datatable-frozen-view': this.frozen, 'p-datatable-unfrozen-view': !this.frozen && this.frozenWidth}];
        }
    }
}
</script>