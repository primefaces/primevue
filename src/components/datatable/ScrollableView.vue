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

        },
        onBodyScroll() {

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