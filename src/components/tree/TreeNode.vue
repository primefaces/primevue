<template>
  <li :class="containerClass">
    <div
      :class="contentClass"
      tabindex="0"
      role="treeitem"
      :aria-expanded="expanded"
      :style="node.style"
      @click="onClick"
      @click.right.prevent="onRightClick"
      @keydown="onKeyDown"
      @touchend="onTouchEnd"
    >
      <button v-ripple type="button" class="p-tree-toggler p-link" tabindex="-1" @click="toggle">
        <dh-ui-icon :name="toggleIconName" />
      </button>
      <div v-if="checkboxMode" class="p-checkbox p-component">
        <div :class="checkboxClass" role="checkbox" :aria-checked="checked">
          <span :class="checkboxIcon"></span>
        </div>
      </div>
      <span :class="icon"></span>
      <span class="p-treenode-label">
        <TreeNodeTemplate
          :node="node"
          :selected="selected"
          :template="templates[node.type] || templates['default']"
        />
      </span>
    </div>
    <ul v-if="hasChildren && expanded" class="p-treenode-children" role="group">
      <sub-treenode
        v-for="childNode of node.children"
        :key="childNode.key"
        :node="childNode"
        :templates="templates"
        :expanded-keys="expandedKeys"
        :selection-mode="selectionMode"
        :selection-keys="selectionKeys"
        @node-toggle="onChildNodeToggle"
        @node-click="onChildNodeClick"
        @node-right-click="onChildNodeRightClick"
        @checkbox-change="propagateUp"
      ></sub-treenode>
    </ul>
  </li>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

const TreeNodeTemplate = {
  functional: true,
  props: {
    node: {
      type: null,
      default: null,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    template: {
      type: null,
      default: null,
    },
  },
  render(createElement, context) {
    const content = context.props.template
      ? context.props.template({
          node: context.props.node,
          selected: context.props.selected,
        })
      : context.props.node.label;

    return [content];
  },
};

export default defineComponent({
  name: 'SubTreenode',
  components: { TreeNodeTemplate },
  directives: {
    ripple: Ripple,
  },
  props: {
    node: {
      type: null,
      default: null
    },
    expandedKeys: {
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
    templates: {
      type: null,
      default: null
    }
  },
  nodeTouched: false,
  computed: {
    hasChildren() {
      return this.node.children && this.node.children.length > 0;
    },
    expanded() {
      return this.expandedKeys && this.expandedKeys[this.node.key] === true;
    },
    leaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    },
    selectable() {
      return this.node.selectable === false ? false : this.selectionMode != null;
    },
    selected() {
      return this.selectionMode && this.selectionKeys
        ? this.selectionKeys[this.node.key] === true
        : false;
    },
    containerClass() {
      return ['p-treenode', { 'p-treenode-leaf': this.leaf }];
    },
    contentClass() {
      return [
        'p-treenode-content',
        this.node.styleClass,
        {
          'p-treenode-selectable': this.selectable,
          'p-highlight': this.checkboxMode ? this.checked : this.selected,
        },
      ];
    },
    icon() {
      return ['p-treenode-icon', this.node.icon];
    },
    toggleIconName() {
      return this.expanded ? 'minus' : 'plus';
    },
    checkboxClass() {
      return [
        'p-checkbox-box',
        { 'p-highlight': this.checked, 'p-indeterminate': this.partialChecked },
      ];
    },
    checkboxIcon() {
      return [
        'p-checkbox-icon',
        { 'pi pi-check': this.checked, 'pi pi-minus': this.partialChecked },
      ];
    },
    checkboxMode() {
      return this.selectionMode === 'checkbox' && this.node.selectable !== false;
    },
    checked() {
      return this.selectionKeys
        ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked
        : false;
    },
    partialChecked() {
      return this.selectionKeys
        ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked
        : false;
    },
  },
  methods: {
    toggle() {
      this.$emit('node-toggle', this.node);
    },
    onChildNodeToggle(node) {
      this.$emit('node-toggle', node);
    },
    onClick(event) {
      if (
        DomHandler.hasClass(event.target, 'p-tree-toggler') ||
        DomHandler.hasClass(event.target.parentElement, 'p-tree-toggler')
      ) {
        return;
      }

      if (this.isCheckboxSelectionMode()) {
        this.toggleCheckbox();
      } else {
        this.$emit('node-click', {
          originalEvent: event,
          nodeTouched: this.nodeTouched,
          node: this.node,
        });
      }

      this.nodeTouched = false;
    },
    onChildNodeClick(event) {
      this.$emit('node-click', event);
    },
    onRightClick(event) {
      this.$emit('node-right-click', {
        originalEvent: event,
        node: this.node,
      });
    },
    onChildNodeRightClick(event) {
      this.$emit('node-right-click', event);
    },
    onTouchEnd() {
      this.nodeTouched = true;
    },
    onKeyDown(event) {
      const nodeElement = event.target.parentElement;

      switch (event.which) {
        // down arrow
        case 40:
          var listElement = nodeElement.children[1];

          if (listElement) {
            this.focusNode(listElement.children[0]);
          } else {
            const nextNodeElement = nodeElement.nextElementSibling;

            if (nextNodeElement) {
              this.focusNode(nextNodeElement);
            } else {
              const nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);

              if (nextSiblingAncestor) {
                this.focusNode(nextSiblingAncestor);
              }
            }
          }

          event.preventDefault();
          break;
        // up arrow
        case 38:
          if (nodeElement.previousElementSibling) {
            this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
          } else {
            const parentNodeElement = this.getParentNodeElement(nodeElement);

            if (parentNodeElement) {
              this.focusNode(parentNodeElement);
            }
          }

          event.preventDefault();
          break;
        // right-left arrows
        case 37:
        case 39:
          this.$emit('node-toggle', this.node);
          event.preventDefault();
          break;
        // enter
        case 13:
          this.onClick(event);
          event.preventDefault();
          break;
        default:
          // no op
          break;
      }
    },
    toggleCheckbox() {
      const _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {};
      const _check = !this.checked;

      this.propagateDown(this.node, _check, _selectionKeys);
      this.$emit('checkbox-change', {
        node: this.node,
        check: _check,
        selectionKeys: _selectionKeys,
      });
    },
    propagateDown(node, check, selectionKeys) {
      if (check) selectionKeys[node.key] = { checked: true, partialChecked: false };
      else delete selectionKeys[node.key];

      if (node.children && node.children.length) {
        for (const child of node.children) {
          this.propagateDown(child, check, selectionKeys);
        }
      }
    },
    propagateUp(event) {
      const { check } = event;
      const _selectionKeys = { ...event.selectionKeys };
      let checkedChildCount = 0;
      let childPartialSelected = false;

      for (const child of this.node.children) {
        if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;
        else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked)
          childPartialSelected = true;
      }

      if (check && checkedChildCount === this.node.children.length) {
        _selectionKeys[this.node.key] = { checked: true, partialChecked: false };
      } else {
        if (!check) {
          delete _selectionKeys[this.node.key];
        }

        if (
          childPartialSelected ||
          (checkedChildCount > 0 && checkedChildCount !== this.node.children.length)
        )
          _selectionKeys[this.node.key] = { checked: false, partialChecked: true };
        else delete _selectionKeys[this.node.key];
      }

      this.$emit('checkbox-change', {
        node: event.node,
        check: event.check,
        selectionKeys: _selectionKeys,
      });
    },
    onChildCheckboxChange(event) {
      this.$emit('checkbox-change', event);
    },
    findNextSiblingOfAncestor(nodeElement) {
      const parentNodeElement = this.getParentNodeElement(nodeElement);

      if (parentNodeElement) {
        if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;

        return this.findNextSiblingOfAncestor(parentNodeElement);
      }

      return null;
    },
    findLastVisibleDescendant(nodeElement) {
      const childrenListElement = nodeElement.children[1];

      if (childrenListElement) {
        const lastChildElement =
          childrenListElement.children[childrenListElement.children.length - 1];

        return this.findLastVisibleDescendant(lastChildElement);
      }

      return nodeElement;
    },
    getParentNodeElement(nodeElement) {
      const parentNodeElement = nodeElement.parentElement.parentElement;

      return DomHandler.hasClass(parentNodeElement, 'p-treenode') ? parentNodeElement : null;
    },
    focusNode(element) {
      element.children[0].focus();
    },
    isCheckboxSelectionMode() {
      return this.selectionMode === 'checkbox';
    },
  },
});
</script>
