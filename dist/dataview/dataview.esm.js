import { ObjectUtils } from 'primevue/utils';
import Paginator from 'primevue/paginator';
import { resolveComponent, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createBlock, createSlots, withCtx, createElementVNode, Fragment, renderList } from 'vue';

var script = {
    name: 'DataView',
    emits: ['update:first', 'update:rows', 'page'],
    props: {
        value: {
            type: Array,
            default: null
        },
        layout: {
            type: String,
            default: 'list'
        },
        rows: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        totalRecords: {
            type: Number,
            default: 0
        },
        paginator: {
            type: Boolean,
            default: false
        },
        paginatorPosition: {
            type: String,
            default: 'bottom'
        },
        alwaysShowPaginator: {
            type: Boolean,
            default: true
        },
        paginatorTemplate: {
            type: String,
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        pageLinkSize: {
            type: Number,
            default: 5
        },
        rowsPerPageOptions: {
            type: Array,
            default: null
        },
        currentPageReportTemplate: {
            type: String,
            default: '({currentPage} of {totalPages})'
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        },
        dataKey: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            d_first: this.first,
            d_rows: this.rows
        }
    },
    watch: {
        first(newValue) {
            this.d_first = newValue;
        },
        rows(newValue) {
            this.d_rows = newValue;
        },
        sortField() {
            this.resetPage();
        },
        sortOrder() {
            this.resetPage();
        }
    },
    methods: {
        getKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
        },
        onPage(event) {
            this.d_first = event.first;
            this.d_rows = event.rows;

            this.$emit('update:first', this.d_first);
            this.$emit('update:rows', this.d_rows);
            this.$emit('page', event);
        },
        sort() {
            if (this.value) {
                const value = [...this.value];

                value.sort((data1, data2) => {
                    let value1 = ObjectUtils.resolveFieldData(data1, this.sortField);
                    let value2 = ObjectUtils.resolveFieldData(data2, this.sortField);
                    let result = null;

                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2, undefined, { numeric: true });
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                    return (this.sortOrder * result);
                });

                return value;
            }
            else {
                return null;
            }
        },
        resetPage() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
        }
    },
    computed: {
        containerClass() {
            return ['p-dataview p-component', {
                    'p-dataview-list': (this.layout === 'list'),
                    'p-dataview-grid': (this.layout === 'grid')
                }
            ]
        },
        getTotalRecords() {
            if (this.totalRecords)
                return this.totalRecords;
            else
                return this.value ? this.value.length : 0;
        },
        empty() {
            return (!this.value || this.value.length === 0);
        },
        paginatorTop() {
            return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
        },
        paginatorBottom() {
            return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
        },
        items() {
            if (this.value && this.value.length) {
                let data = this.value;

                if (data && data.length && this.sortField) {
                    data = this.sort();
                }

                if (this.paginator) {
                    const first = this.lazy ? 0 : this.d_first;
                    return data.slice(first, first + this.d_rows);
                }
                else {
                    return data;
                }

            }
            else {
                return null;
            }
        }
    },
    components: {
        'DVPaginator': Paginator
    }
};

const _hoisted_1 = {
  key: 0,
  class: "p-dataview-header"
};
const _hoisted_2 = { class: "p-dataview-content" };
const _hoisted_3 = { class: "p-grid p-nogutter grid grid-nogutter" };
const _hoisted_4 = {
  key: 0,
  class: "p-col col"
};
const _hoisted_5 = { class: "p-dataview-emptymessage" };
const _hoisted_6 = {
  key: 3,
  class: "p-dataview-footer"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DVPaginator = resolveComponent("DVPaginator");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    (_ctx.$slots.header)
      ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "header")
        ]))
      : createCommentVNode("", true),
    ($options.paginatorTop)
      ? (openBlock(), createBlock(_component_DVPaginator, {
          key: 1,
          rows: $data.d_rows,
          first: $data.d_first,
          totalRecords: $options.getTotalRecords,
          pageLinkSize: $props.pageLinkSize,
          template: $props.paginatorTemplate,
          rowsPerPageOptions: $props.rowsPerPageOptions,
          currentPageReportTemplate: $props.currentPageReportTemplate,
          class: normalizeClass({'p-paginator-top': $options.paginatorTop}),
          alwaysShow: $props.alwaysShowPaginator,
          onPage: _cache[0] || (_cache[0] = $event => ($options.onPage($event)))
        }, createSlots({ _: 2 }, [
          (_ctx.$slots.paginatorstart)
            ? {
                name: "start",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "paginatorstart")
                ])
              }
            : undefined,
          (_ctx.$slots.paginatorend)
            ? {
                name: "end",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "paginatorend")
                ])
              }
            : undefined
        ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow"]))
      : createCommentVNode("", true),
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.items, (item, index) => {
          return (openBlock(), createElementBlock(Fragment, {
            key: $options.getKey(item, index)
          }, [
            (_ctx.$slots.list && $props.layout === 'list')
              ? renderSlot(_ctx.$slots, "list", {
                  key: 0,
                  data: item,
                  index: index
                })
              : createCommentVNode("", true),
            (_ctx.$slots.grid && $props.layout === 'grid')
              ? renderSlot(_ctx.$slots, "grid", {
                  key: 1,
                  data: item,
                  index: index
                })
              : createCommentVNode("", true)
          ], 64))
        }), 128)),
        ($options.empty)
          ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createElementVNode("div", _hoisted_5, [
                renderSlot(_ctx.$slots, "empty")
              ])
            ]))
          : createCommentVNode("", true)
      ])
    ]),
    ($options.paginatorBottom)
      ? (openBlock(), createBlock(_component_DVPaginator, {
          key: 2,
          rows: $data.d_rows,
          first: $data.d_first,
          totalRecords: $options.getTotalRecords,
          pageLinkSize: $props.pageLinkSize,
          template: $props.paginatorTemplate,
          rowsPerPageOptions: $props.rowsPerPageOptions,
          currentPageReportTemplate: $props.currentPageReportTemplate,
          class: normalizeClass({'p-paginator-bottom': $options.paginatorBottom}),
          alwaysShow: $props.alwaysShowPaginator,
          onPage: _cache[1] || (_cache[1] = $event => ($options.onPage($event)))
        }, createSlots({ _: 2 }, [
          (_ctx.$slots.paginatorstart)
            ? {
                name: "start",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "paginatorstart")
                ])
              }
            : undefined,
          (_ctx.$slots.paginatorend)
            ? {
                name: "end",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "paginatorend")
                ])
              }
            : undefined
        ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow"]))
      : createCommentVNode("", true),
    (_ctx.$slots.footer)
      ? (openBlock(), createElementBlock("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "footer")
        ]))
      : createCommentVNode("", true)
  ], 2))
}

script.render = render;

export { script as default };
