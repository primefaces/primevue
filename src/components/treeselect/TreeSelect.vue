<template>
    <div ref="container" :class="containerClass" @click="onClick">
        <div class="p-hidden-accessible">
            <input ref="focusInput" type="text" role="listbox" :id="inputId" readonly :disabled="disabled" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :tabindex="tabindex"
                aria-haspopup="true" :aria-expanded="overlayVisible" :aria-labelledby="ariaLabelledBy"/>
        </div>
        <div class="p-treeselect-label-container">
            <div :class="labelClass">
                <slot name="value" :value="selectedNodes" :placeholder="placeholder">
                    <template v-if="display === 'comma'">
                        {{label || 'empty'}}
                    </template>
                    <template v-else-if="display === 'chip'">
                        <div v-for="node of selectedNodes" class="p-treeselect-token" :key="node.key">
                            <span class="p-treeselect-token-label">{{node.label}}</span>
                        </div>
                        <template v-if="emptyValue">{{placeholder || 'empty'}}</template>
                    </template>
                </slot>
            </div>
        </div>
        <div class="p-treeselect-trigger">
            <slot name="indicator">
                <span class="p-treeselect-trigger-icon pi pi-chevron-down"></span>
            </slot>
        </div>
        <Teleport :to="appendTarget" :disabled="appendDisabled">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div :ref="overlayRef" v-if="overlayVisible" @click="onOverlayClick" :class="panelStyleClass">
                    <slot name="header" :value="modelValue" :options="options"></slot>
                    <div class="p-treeselect-items-wrapper" :style="{'max-height': scrollHeight}">
                        <TSTree :value="options" :selectionMode="selectionMode" @update:selectionKeys="onSelectionChange" :selectionKeys="modelValue"
                            :expandedKeys="expandedKeys" @update:expandedKeys="onNodeToggle" :metaKeySelection="metaKeySelection"
                            @node-expand="$emit('node-expand', $event)" @node-collapse="$emit('node-collapse', $event)"
                            @node-select="onNodeSelect" @node-unselect="onNodeUnselect" />
                        <div v-if="emptyOptions" class="p-treeselect-empty-message">
                            <slot name="empty">{{emptyMessageText}}</slot>
                        </div>
                    </div>
                    <slot name="footer" :value="modelValue" :options="options"></slot>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script>
import {ConnectedOverlayScrollHandler,DomHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Tree from 'primevue/tree';
import Ripple from 'primevue/ripple';

export default {
    name: 'TreeSelect',
    emits: ['update:modelValue', 'before-show', 'before-hide', 'change', 'show', 'hide', 'node-select', 'node-unselect', 'node-expand', 'node-collapse'],
    props: {
        modelValue: null,
        options: Array,
		scrollHeight: {
			type: String,
			default: '400px'
		},
		placeholder: String,
		disabled: Boolean,
        tabindex: String,
        inputId: String,
        ariaLabelledBy: null,
        selectionMode: {
            type: String,
            default: 'single'
        },
        panelClass: {
            type: String,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        emptyMessage: {
            type: String,
            default: null
        },
        display: {
            type: String,
            default: 'comma'
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        modelValue: {
            handler: function() {
                if (!this.selfChange) {
                    this.updateTreeState();
                }
                this.selfChange = false;
            },
            immediate: true
        },
        options() {
            this.updateTreeState();
        }
    },
    data() {
        return {
            focused: false,
            overlayVisible: false,
            expandedKeys: {}
        };
    },
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    selfChange: false,
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    },
    mounted() {
        this.updateTreeState();
    },
    methods: {
        show() {
            this.$emit('before-show');
            this.overlayVisible = true;
        },
        hide() {
            this.$emit('before-hide');
            this.overlayVisible = false;
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        onClick(event) {
            if (!this.disabled && (!this.overlay || !this.overlay.contains(event.target)) && !DomHandler.hasClass(event.target, 'p-treeselect-close')) {
                if (this.overlayVisible)
                    this.hide();
                else
                    this.show();

                this.$refs.focusInput.focus();
            }
        },
        onSelectionChange(keys) {
            this.selfChange = true;
            this.$emit('update:modelValue', keys);
            this.$emit('change', keys);
        },
        onNodeSelect(node) {
            this.$emit('node-select', node);

            if (this.selectionMode === 'single') {
                this.hide();
            }
        },
        onNodeUnselect(node) {
            this.$emit('node-unselect', node);
        },
        onNodeToggle(keys) {
            this.expandedKeys = keys;
        },
        onKeyDown(event) {
            switch(event.which) {
                //down
                case 40:
                    if (!this.overlayVisible && event.altKey) {
                        this.show();
                        event.preventDefault();
                    }
                break;

                //space
                case 32:
                    if (!this.overlayVisible) {
                        this.show();
                        event.preventDefault();
                    }
                break;

                //enter and escape
                case 13:
                case 27:
                    if (this.overlayVisible) {
                        this.hide();
                        event.preventDefault();
                    }
                break;

                //tab
                case 9:
                    this.hide();
                break;

                default:
                break;
            }
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
            this.$emit('show');
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.$emit('hide');
            this.overlay = null;
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            if (this.appendDisabled) {
                DomHandler.relativePosition(this.overlay, this.$el);
            }
            else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
                DomHandler.absolutePosition(this.overlay, this.$el);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.isOutsideClicked(event)) {
                        this.hide();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        },
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
        },
        overlayRef(el) {
            this.overlay = el;
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.$el
            });
        },
        findSelectedNodes(node, keys, selectedNodes) {
            if (node) {
                if (this.isSelected(node, keys)) {
                    selectedNodes.push(node);
                    delete keys[node.key];
                }

                if (Object.keys(keys).length && node.children) {
                    for (let childNode of node.children) {
                        this.findSelectedNodes(childNode, keys, selectedNodes);
                    }
                }
            }
            else {
                for (let childNode of this.options) {
                    this.findSelectedNodes(childNode, keys, selectedNodes);
                }
            }
        },
        isSelected(node, keys) {
            return this.selectionMode === 'checkbox' ? keys[node.key] && keys[node.key].checked : keys[node.key];
        },
        updateTreeState() {
            let keys = {...this.modelValue};
            this.expandedKeys = {};
            if (keys && this.options) {
                this.updateTreeBranchState(null, null, keys);
            }
        },
        updateTreeBranchState(node, path, keys) {
            if (node) {
                if (this.isSelected(node, keys)) {
                    this.expandPath(path);
                    delete keys[node.key];
                }

                if (Object.keys(keys).length && node.children) {
                    for (let childNode of node.children) {
                        path.push(node.key);
                        this.updateTreeBranchState(childNode, path, keys);
                    }
                }
            }
            else {
                for (let childNode of this.options) {
                    this.updateTreeBranchState(childNode, [], keys);
                }
            }
        },
        expandPath(path) {
            if (path.length > 0) {
                for (let key of path) {
                    this.expandedKeys[key] = true;
                }
            }
        }
    },
    computed: {
        containerClass() {
            return [
                'p-treeselect p-component p-inputwrapper',
                {
                    'p-treeselect-chip': this.display === 'chip',
                    'p-disabled': this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': !this.emptyValue,
                    'p-inputwrapper-focus': this.focused || this.overlayVisible
                }
            ];
        },
        labelClass() {
            return [
                'p-treeselect-label',
                {
                    'p-placeholder': this.label === this.placeholder,
                    'p-treeselect-label-empty': !this.placeholder && this.emptyValue
                }
            ];
        },
        panelStyleClass() {
            return ['p-treeselect-panel p-component', this.panelClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        selectedNodes() {
            let selectedNodes = [];
            if (this.modelValue && this.options) {
                let keys = {...this.modelValue};
                this.findSelectedNodes(null, keys, selectedNodes);
            }

            return selectedNodes;
        },
        label() {
            let value = this.selectedNodes;
            return value.length ? value.map(node => node.label).join(', '): this.placeholder;
        },
        emptyMessageText() {
            return this.emptyMessage || this.$primevue.config.locale.emptyMessage;
        },
        emptyValue() {
            return !this.modelValue || Object.keys(this.modelValue).length === 0;
        },
        emptyOptions() {
            return !this.options || this.options.length === 0;
        },
        appendDisabled() {
            return this.appendTo === 'self';
        },
        appendTarget() {
            return this.appendDisabled ? null : this.appendTo;
        }
    },
    components: {
        'TSTree': Tree
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.p-treeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label  {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-treeselect .p-treeselect-panel {
    min-width: 100%;
}

.p-treeselect-panel {
    position: absolute;
    top: 0;
    left: 0;
}

.p-treeselect-items-wrapper {
    overflow: auto;
}

.p-fluid .p-treeselect {
    display: flex;
}
</style>
