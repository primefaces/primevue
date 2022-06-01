import Button from 'primevue/button';
import { ObjectUtils, DomHandler, UniqueComponentId } from 'primevue/utils';
import Ripple from 'primevue/ripple';
import { resolveComponent, resolveDirective, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createVNode, createCommentVNode, TransitionGroup, normalizeStyle, withCtx, Fragment, renderList, withDirectives } from 'vue';

var script = {
    name: 'OrderList',
    emits: ['update:modelValue', 'reorder', 'update:selection', 'selection-change'],
    props: {
        modelValue: {
            type: Array,
            default: null
        },
        selection: {
            type: Array,
            default: null
        },
        dataKey: {
            type: String,
            default: null
        },
        listStyle: {
            type: null,
            default: null
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        },
        responsive: {
            type: Boolean,
            default: true
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        stripedRows: {
            type: Boolean,
            default: false
        }
    },
    itemTouched: false,
    reorderDirection: null,
    styleElement: null,
    data() {
        return {
            d_selection: this.selection
        }
    },
    beforeUnmount() {
        this.destroyStyle();
    },
    updated() {
        if (this.reorderDirection) {
            this.updateListScroll();
            this.reorderDirection = null;
        }
    },
    mounted() {
        if (this.responsive) {
            this.createStyle();
        }
    },
    methods: {
        getItemKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey): index;
        },
        isSelected(item) {
            return ObjectUtils.findIndexInList(item, this.d_selection) != -1;
        },
        moveUp(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex - 1];
                        value[selectedItemIndex - 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'up';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveTop(event) {
            if(this.d_selection) {
                let value = [...this.modelValue];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];
                        value.unshift(movedItem);
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'top';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveDown(event) {
            if(this.d_selection) {
                let value = [...this.modelValue];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== (value.length - 1)) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex + 1];
                        value[selectedItemIndex + 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'down';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveBottom(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== (value.length - 1)) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];
                        value.push(movedItem);
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'bottom';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        onItemClick(event, item, index) {
            this.itemTouched = false;
            let selectedIndex = ObjectUtils.findIndexInList(item, this.d_selection);
            let selected = (selectedIndex != -1);
            let metaSelection = this.itemTouched ? false : this.metaKeySelection;

            if (metaSelection) {
                let metaKey = (event.metaKey || event.ctrlKey);

                if (selected && metaKey) {
                    this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex);
                }
                else {
                    this.d_selection = (metaKey) ? this.d_selection ? [...this.d_selection] : [] : [];
                    ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.modelValue);
                }
            }
            else {
                if (selected) {
                    this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex);
                }
                else {
                    this.d_selection = this.d_selection ? [...this.d_selection] : [];
                    ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.modelValue);
                }
            }

            this.$emit('update:selection', this.d_selection);
            this.$emit('selection-change', {
                originalEvent:event,
                value: this.d_selection
            });
        },
        onItemTouchEnd() {
            this.itemTouched = true;
        },
        onItemKeyDown(event, item, index) {
            let listItem = event.currentTarget;

            switch(event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(listItem);
                    if (nextItem) {
                        nextItem.focus();
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    var prevItem = this.findPrevItem(listItem);
                    if (prevItem) {
                        prevItem.focus();
                    }

                    event.preventDefault();
                break;

                //enter
                case 13:
                    this.onItemClick(event, item, index);
                    event.preventDefault();
                break;
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return !DomHandler.hasClass(nextItem, 'p-orderlist-item') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return !DomHandler.hasClass(prevItem, 'p-orderlist-item') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        updateListScroll() {
            const listItems = DomHandler.find(this.$refs.list.$el, '.p-orderlist-item.p-highlight');

            if (listItems && listItems.length) {
                switch(this.reorderDirection) {
                    case 'up':
                        DomHandler.scrollInView(this.$refs.list.$el, listItems[0]);
                    break;

                    case 'top':
                        this.$refs.list.$el.scrollTop = 0;
                    break;

                    case 'down':
                        DomHandler.scrollInView(this.$refs.list.$el, listItems[listItems.length - 1]);
                    break;

                    case 'bottom':
                        this.$refs.list.$el.scrollTop = this.$refs.list.$el.scrollHeight;
                    break;
                }
            }
        },
        createStyle() {
			if (!this.styleElement) {
                this.$el.setAttribute(this.attributeSelector, '');
				this.styleElement = document.createElement('style');
				this.styleElement.type = 'text/css';
				document.head.appendChild(this.styleElement);

                let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-orderlist[${this.attributeSelector}] {
        flex-direction: column;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls .p-button:last-child {
        margin-right: 0;
    }
}
`;

                this.styleElement.innerHTML = innerHTML;
			}
		},
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-orderlist p-component', {
                'p-orderlist-striped': this.stripedRows
            }];
        },
        attributeSelector() {
            return UniqueComponentId();
        }
    },
    components: {
        'OLButton': Button
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = { class: "p-orderlist-controls" };
const _hoisted_2 = { class: "p-orderlist-list-container" };
const _hoisted_3 = {
  key: 0,
  class: "p-orderlist-header"
};
const _hoisted_4 = ["onClick", "onKeydown", "aria-selected"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OLButton = resolveComponent("OLButton");
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "controlsstart"),
      createVNode(_component_OLButton, {
        type: "button",
        icon: "pi pi-angle-up",
        onClick: $options.moveUp
      }, null, 8, ["onClick"]),
      createVNode(_component_OLButton, {
        type: "button",
        icon: "pi pi-angle-double-up",
        onClick: $options.moveTop
      }, null, 8, ["onClick"]),
      createVNode(_component_OLButton, {
        type: "button",
        icon: "pi pi-angle-down",
        onClick: $options.moveDown
      }, null, 8, ["onClick"]),
      createVNode(_component_OLButton, {
        type: "button",
        icon: "pi pi-angle-double-down",
        onClick: $options.moveBottom
      }, null, 8, ["onClick"]),
      renderSlot(_ctx.$slots, "controlsend")
    ]),
    createElementVNode("div", _hoisted_2, [
      (_ctx.$slots.header)
        ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "header")
          ]))
        : createCommentVNode("", true),
      createVNode(TransitionGroup, {
        ref: "list",
        name: "p-orderlist-flip",
        tag: "ul",
        class: "p-orderlist-list",
        style: normalizeStyle($props.listStyle),
        role: "listbox",
        "aria-multiselectable": "multiple"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.modelValue, (item, i) => {
            return withDirectives((openBlock(), createElementBlock("li", {
              key: $options.getItemKey(item, i),
              tabindex: "0",
              class: normalizeClass(['p-orderlist-item', {'p-highlight': $options.isSelected(item)}]),
              onClick: $event => ($options.onItemClick($event, item, i)),
              onKeydown: $event => ($options.onItemKeyDown($event, item, i)),
              onTouchend: _cache[0] || (_cache[0] = (...args) => ($options.onItemTouchEnd && $options.onItemTouchEnd(...args))),
              role: "option",
              "aria-selected": $options.isSelected(item)
            }, [
              renderSlot(_ctx.$slots, "item", {
                item: item,
                index: i
              })
            ], 42, _hoisted_4)), [
              [_directive_ripple]
            ])
          }), 128))
        ]),
        _: 3
      }, 8, ["style"])
    ])
  ], 2))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-orderlist {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-orderlist-controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-orderlist-list-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.p-orderlist-list {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: auto;\n    min-height: 12rem;\n    max-height: 24rem;\n}\n.p-orderlist-item {\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n.p-orderlist.p-state-disabled .p-orderlist-item,\n.p-orderlist.p-state-disabled .p-button {\n    cursor: default;\n}\n.p-orderlist.p-state-disabled .p-orderlist-list {\n    overflow: hidden;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
