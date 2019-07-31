<template>
    <li :class="containerClass">
        <div class="p-treenode-content" tabindex="0" role="treeitem" @click="onClick" @keydown="onKeyDown" :aria-expanded="expanded">
            <span class="p-tree-toggler p-unselectable-text p-link" @click="toggle">
                <span :class="toggleIcon"></span>
            </span>
            <span :class="icon"></span>
            <span class="p-treenode-label">{{node.label}}</span>
        </div>
        <ul class="p-treenode-children" role="group" v-if="hasChildren && expanded">
            <sub-treenode v-for="childNode of node.children" :key="childNode.key" :node="childNode"
                :expandedKeys="expandedKeys" @toggle="onChildNodeToggle"></sub-treenode>
        </ul>
    </li>
</template>

<script>
import DomHandler from '../utils/DomHandler';

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
        }
    },
    methods: {
        toggle() {
            this.$emit('toggle', this.node);
        },
        onChildNodeToggle(node) {
            this.$emit('toggle', node);
        },
        onClick() {

        },
        onKeyDown(event) {
            const nodeElement = event.target.parentElement;

            switch (event.which) {
                //down arrow
                case 40:
                    const listElement = nodeElement.children[1];
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
                    this.$emit('toggle', this.node);

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
        containerClass() {
            return ['p-treenode', {'p-treenode-leaf': this.leaf}];
        },
        icon() {
            return ['p-treenode-icon', this.node.icon];
        },
        toggleIcon() {
            return ['p-tree-toggler-icon pi pi-fw', {
                'pi-caret-down': this.expanded,
                'pi-caret-right': !this.expanded
            }];
        }
    }
}
</script>