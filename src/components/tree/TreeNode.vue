<template>
    <li :class="containerClass">
        <div :class="contentClass" tabindex="0" role="treeitem" :aria-expanded="expanded"
            @click="onClick" @keydown="onKeyDown" @touchend="onTouchEnd" :style="node.style">
            <button type="button" class="p-tree-toggler p-link" @click="toggle" tabindex="-1" v-ripple>
                <span :class="toggleIcon"></span>
            </button>
            <div class="p-checkbox p-component" v-if="checkboxMode">
                <div :class="checkboxClass" role="checkbox" :aria-checked="checked">
                    <span :class="checkboxIcon"></span>
                </div>
            </div>
            <span :class="icon"></span>
            <span class="p-treenode-label">
                <TreeNodeTemplate :node="node" :template="templates[node.type]||templates['default']" />
            </span>
        </div>
        <ul class="p-treenode-children" role="group" v-if="hasChildren && expanded">
            <sub-treenode v-for="childNode of node.children" :key="childNode.key" :node="childNode" :templates="templates"
                :expandedKeys="expandedKeys" @node-toggle="onChildNodeToggle" @node-click="onChildNodeClick"
                :selectionMode="selectionMode" :selectionKeys="selectionKeys"
                @checkbox-change="propagateUp"></sub-treenode>
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
            default: null
        },
        template: {
            type: null,
            default: null
        }
    },
    render(createElement, context) {
        const content = context.props.template ? context.props.template({
            'node': context.props.node
        }): context.props.node.label;

        return [content];
    }
};

export default {
    name: 'sub-treenode',
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
    methods: {
        toggle() {
            this.$emit('node-toggle', this.node);
        },
        onChildNodeToggle(node) {
            this.$emit('node-toggle', node);
        },
        onClick(event) {
            if (DomHandler.hasClass(event.target, 'p-tree-toggler') || DomHandler.hasClass(event.target.parentElement, 'p-tree-toggler')) {
                return;
            }

            if (this.isCheckboxSelectionMode()) {
                this.toggleCheckbox();
            }
            else {
                this.$emit('node-click', {
                    originalEvent: event,
                    nodeTouched: this.nodeTouched,
                    node: this.node
                });
            }

            this.nodeTouched = false;
        },
        onChildNodeClick(event) {
            this.$emit('node-click', event);
        },
        onTouchEnd() {
            this.nodeTouched = true;
        },
        onKeyDown(event) {
            const nodeElement = event.target.parentElement;

            switch (event.which) {
                //down arrow
                case 40:
                    var listElement = nodeElement.children[1];
                    if (listElement) {
                        this.focusNode(listElement.children[0]);
                    }
                    else {
                        const nextNodeElement = nodeElement.nextElementSibling;
                        if (nextNodeElement) {
                            this.focusNode(nextNodeElement);
                        }
                        else {
                            let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
                            if (nextSiblingAncestor) {
                                this.focusNode(nextSiblingAncestor);
                            }
                        }
                    }

                    event.preventDefault();
                break;

                //up arrow
                case 38:
                    if (nodeElement.previousElementSibling) {
                        this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
                    }
                    else {
                        let parentNodeElement = this.getParentNodeElement(nodeElement);
                        if (parentNodeElement) {
                            this.focusNode(parentNodeElement);
                        }
                    }

                    event.preventDefault();
                break;

                //right-left arrows
                case 37:
                case 39:
                    this.$emit('node-toggle', this.node);

                    event.preventDefault();
                break;

                //enter
                case 13:
                    this.onClick(event);
                    event.preventDefault();
                break;

                default:
                    //no op
                break;
            }
        },
        toggleCheckbox() {
            let _selectionKeys = this.selectionKeys ? {...this.selectionKeys} : {};
            const _check = !this.checked;

            this.propagateDown(this.node, _check, _selectionKeys);

            this.$emit('checkbox-change', {
                node: this.node,
                check: _check,
                selectionKeys: _selectionKeys
            });
        },
        propagateDown(node, check, selectionKeys) {
            if (check)
                selectionKeys[node.key] = {checked: true, partialChecked: false};
            else
                delete selectionKeys[node.key];

            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.propagateDown(child, check, selectionKeys);
                }
            }
        },
        propagateUp(event) {
            let check = event.check;
            let _selectionKeys = {...event.selectionKeys};
            let checkedChildCount = 0;
            let childPartialSelected = false;

            for(let child of this.node.children) {
                if(_selectionKeys[child.key] && _selectionKeys[child.key].checked)
                    checkedChildCount++;
                else if(_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked)
                    childPartialSelected = true;
            }

            if(check && checkedChildCount === this.node.children.length) {
                _selectionKeys[this.node.key] = {checked: true, partialChecked: false};
            }
            else {
                if (!check) {
                    delete _selectionKeys[this.node.key];
                }

                if(childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.node.children.length))
                    _selectionKeys[this.node.key] = {checked: false, partialChecked: true};
                else
                    _selectionKeys[this.node.key] = {checked: false, partialChecked: false};
            }

            this.$emit('checkbox-change', {
                node: event.node,
                check: event.check,
                selectionKeys: _selectionKeys
            });
        },
        onChildCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        },
        findNextSiblingOfAncestor(nodeElement) {
            let parentNodeElement = this.getParentNodeElement(nodeElement);
            if (parentNodeElement) {
                if (parentNodeElement.nextElementSibling)
                    return parentNodeElement.nextElementSibling;
                else
                    return this.findNextSiblingOfAncestor(parentNodeElement);
            }
            else {
                return null;
            }
        },
        findLastVisibleDescendant(nodeElement) {
            const childrenListElement = nodeElement.children[1];
            if (childrenListElement) {
                const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];

                return this.findLastVisibleDescendant(lastChildElement);
            }
            else {
                return nodeElement;
            }
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
        }
    },
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
            return (this.selectionMode && this.selectionKeys) ? this.selectionKeys[this.node.key] === true : false;
        },
        containerClass() {
            return ['p-treenode', {'p-treenode-leaf': this.leaf}];
        },
        contentClass() {
            return ['p-treenode-content', this.node.styleClass, {
                'p-treenode-selectable': this.selectable,
                'p-highlight': this.checkboxMode ? this.checked : this.selected
            }];
        },
        icon() {
            return ['p-treenode-icon', this.node.icon];
        },
        toggleIcon() {
            return ['p-tree-toggler-icon pi pi-fw', {
                'pi-chevron-down': this.expanded,
                'pi-chevron-right': !this.expanded
            }];
        },
        checkboxClass() {
            return ['p-checkbox-box', {'p-highlight': this.checked, 'p-indeterminate': this.partialChecked}];
        },
        checkboxIcon() {
            return ['p-checkbox-icon', {'pi pi-check': this.checked, 'pi pi-minus': this.partialChecked}];
        },
        checkboxMode() {
            return this.selectionMode === 'checkbox' && this.node.selectable !== false;
        },
        checked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked: false;
        },
        partialChecked() {
            return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked: false;
        }
    },
    components: {
        'TreeNodeTemplate': TreeNodeTemplate
    },
    directives: {
        'ripple': Ripple
    }
}
</script>