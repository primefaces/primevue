'use strict';

var utils = require('primevue/utils');
var vue = require('vue');

var script$1 = {
    name: 'OrganizationChartNode',
    emits: ['node-click', 'node-toggle'],
    props: {
        node: {
            type: null,
            default: null
        },
        templates: {
            type: null,
            default: null
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsedKeys: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        }
    },
    methods: {
        onNodeClick(event) {
            if (utils.DomHandler.hasClass(event.target, 'p-node-toggler') || utils.DomHandler.hasClass(event.target, 'p-node-toggler-icon')) {
                return;
            }

            if (this.selectionMode) {
                this.$emit('node-click', this.node);
            }
        },
        onChildNodeClick(node) {
            this.$emit('node-click', node);
        },
        toggleNode() {
            this.$emit('node-toggle', this.node);
        },
        onChildNodeToggle(node) {
            this.$emit('node-toggle', node);
        }
    },
    computed: {
        nodeContentClass() {
            return ['p-organizationchart-node-content', this.node.styleClass, {'p-organizationchart-selectable-node': this.selectable, 'p-highlight': this.selected}];
        },
        leaf() {
            return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
        },
        colspan() {
            return (this.node.children && this.node.children.length) ? this.node.children.length * 2: null;
        },
        childStyle() {
            return {
                visibility: !this.leaf && this.expanded ? 'inherit' : 'hidden'
            }
        },
        expanded() {
            return this.collapsedKeys[this.node.key] === undefined;
        },
        selectable() {
            return this.selectionMode && this.node.selectable !== false;
        },
        selected() {
            return this.selectable && this.selectionKeys && this.selectionKeys[this.node.key] === true;
        },
        toggleable() {
            return this.collapsible && this.node.collapsible !== false && !this.leaf;
        }
    }
};

const _hoisted_1$1 = { class: "p-organizationchart-table" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["colspan"];
const _hoisted_4 = ["colspan"];
const _hoisted_5 = /*#__PURE__*/vue.createElementVNode("div", { class: "p-organizationchart-line-down" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = ["colspan"];
const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("div", { class: "p-organizationchart-line-down" }, null, -1);
const _hoisted_9 = [
  _hoisted_8
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OrganizationChartNode = vue.resolveComponent("OrganizationChartNode", true);

  return (vue.openBlock(), vue.createElementBlock("table", _hoisted_1$1, [
    vue.createElementVNode("tbody", null, [
      ($props.node)
        ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_2, [
            vue.createElementVNode("td", { colspan: $options.colspan }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass($options.nodeContentClass),
                onClick: _cache[2] || (_cache[2] = (...args) => ($options.onNodeClick && $options.onNodeClick(...args)))
              }, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates[$props.node.type]||$props.templates['default']), { node: $props.node }, null, 8, ["node"])),
                ($options.toggleable)
                  ? (vue.openBlock(), vue.createElementBlock("a", {
                      key: 0,
                      tabindex: "0",
                      class: "p-node-toggler",
                      onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleNode && $options.toggleNode(...args))),
                      onKeydown: _cache[1] || (_cache[1] = vue.withKeys((...args) => ($options.toggleNode && $options.toggleNode(...args)), ["enter"]))
                    }, [
                      vue.createElementVNode("i", {
                        class: vue.normalizeClass(["p-node-toggler-icon pi", {'pi-chevron-down': $options.expanded, 'pi-chevron-up': !$options.expanded}])
                      }, null, 2)
                    ], 32))
                  : vue.createCommentVNode("", true)
              ], 2)
            ], 8, _hoisted_3)
          ]))
        : vue.createCommentVNode("", true),
      vue.createElementVNode("tr", {
        style: vue.normalizeStyle($options.childStyle),
        class: "p-organizationchart-lines"
      }, [
        vue.createElementVNode("td", { colspan: $options.colspan }, _hoisted_6, 8, _hoisted_4)
      ], 4),
      vue.createElementVNode("tr", {
        style: vue.normalizeStyle($options.childStyle),
        class: "p-organizationchart-lines"
      }, [
        ($props.node.children && $props.node.children.length === 1)
          ? (vue.openBlock(), vue.createElementBlock("td", {
              key: 0,
              colspan: $options.colspan
            }, _hoisted_9, 8, _hoisted_7))
          : vue.createCommentVNode("", true),
        ($props.node.children && $props.node.children.length > 1)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.node.children, (child, i) => {
              return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                key: child.key
              }, [
                vue.createElementVNode("td", {
                  class: vue.normalizeClass(["p-organizationchart-line-left", {'p-organizationchart-line-top': !(i === 0)}])
                }, " ", 2),
                vue.createElementVNode("td", {
                  class: vue.normalizeClass(["p-organizationchart-line-right", {'p-organizationchart-line-top': !(i === ($props.node.children.length - 1))}])
                }, " ", 2)
              ], 64))
            }), 128))
          : vue.createCommentVNode("", true)
      ], 4),
      vue.createElementVNode("tr", {
        style: vue.normalizeStyle($options.childStyle),
        class: "p-organizationchart-nodes"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.node.children, (child) => {
          return (vue.openBlock(), vue.createElementBlock("td", {
            key: child.key,
            colspan: "2"
          }, [
            vue.createVNode(_component_OrganizationChartNode, {
              node: child,
              templates: $props.templates,
              collapsedKeys: $props.collapsedKeys,
              onNodeToggle: $options.onChildNodeToggle,
              collapsible: $props.collapsible,
              selectionMode: $props.selectionMode,
              selectionKeys: $props.selectionKeys,
              onNodeClick: $options.onChildNodeClick
            }, null, 8, ["node", "templates", "collapsedKeys", "onNodeToggle", "collapsible", "selectionMode", "selectionKeys", "onNodeClick"])
          ]))
        }), 128))
      ], 4)
    ])
  ]))
}

script$1.render = render$1;

var script = {
    name: 'OrganizationChart',
    emits: ['node-unselect', 'node-select', 'update:selectionKeys', 'node-expand', 'node-collapse', 'update:collapsedKeys'],
    props: {
        value: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsedKeys: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            d_collapsedKeys: this.collapsedKeys || {}
        }
    },
    watch: {
        collapsedKeys(newValue) {
            this.d_collapsedKeys = newValue;
        }
    },
    methods: {
        onNodeClick(node) {
            const key = node.key;

            if (this.selectionMode) {
                let _selectionKeys = this.selectionKeys ? {...this.selectionKeys} : {};

                if (_selectionKeys[key]) {
                    delete _selectionKeys[key];
                    this.$emit('node-unselect', node);
                }
                else {
                    if (this.selectionMode === 'single') {
                        _selectionKeys = {};
                    }

                    _selectionKeys[key] = true;
                    this.$emit('node-select', node);
                }

                this.$emit('update:selectionKeys', _selectionKeys);
            }
        },
        onNodeToggle(node) {
            const key = node.key;

            if (this.d_collapsedKeys[key]) {
                delete this.d_collapsedKeys[key];
                this.$emit('node-expand', node);
            }
            else {
                this.d_collapsedKeys[key] = true;
                this.$emit('node-collapse', node);
            }

            this.d_collapsedKeys = {...this.d_collapsedKeys};
            this.$emit('update:collapsedKeys', this.d_collapsedKeys);
        }
    },
    components: {
        'OrganizationChartNode': script$1
    }
};

const _hoisted_1 = { class: "p-organizationchart p-component" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OrganizationChartNode = vue.resolveComponent("OrganizationChartNode");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createVNode(_component_OrganizationChartNode, {
      node: $props.value,
      templates: _ctx.$slots,
      onNodeToggle: $options.onNodeToggle,
      collapsedKeys: $data.d_collapsedKeys,
      collapsible: $props.collapsible,
      onNodeClick: $options.onNodeClick,
      selectionMode: $props.selectionMode,
      selectionKeys: $props.selectionKeys
    }, null, 8, ["node", "templates", "onNodeToggle", "collapsedKeys", "collapsible", "onNodeClick", "selectionMode", "selectionKeys"])
  ]))
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

var css_248z = "\n.p-organizationchart-table {\n    border-spacing: 0;\n    border-collapse: separate;\n    margin: 0 auto;\n}\n.p-organizationchart-table > tbody > tr > td {\n    text-align: center;\n    vertical-align: top;\n    padding: 0 .75rem;\n}\n.p-organizationchart-node-content {\n    display: inline-block;\n    position: relative;\n}\n.p-organizationchart-node-content .p-node-toggler {\n    position: absolute;\n    bottom: -.75rem;\n    margin-left: -.75rem;\n    z-index: 2;\n    left: 50%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem;\n    text-decoration: none;\n}\n.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {\n    position: relative;\n    top: .25rem;\n}\n.p-organizationchart-line-down {\n    margin: 0 auto;\n    height: 20px;\n    width: 1px;\n}\n.p-organizationchart-line-right {\n    border-radius: 0px;\n}\n.p-organizationchart-line-left {\n    border-radius: 0;\n}\n.p-organizationchart-selectable-node {\n    cursor: pointer;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
