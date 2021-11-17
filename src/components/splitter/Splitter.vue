<template>
    <div :class="containerClass">
        <template v-for="(panel,i) of panels" :key="i" class="p-splitter-panel">
             <component :is="panel"></component>
             <div class="p-splitter-gutter" v-if="i !== (panels.length -1)" :style="gutterStyle"
                @mousedown="onGutterMouseDown($event, i)"
                @touchstart="onGutterTouchStart($event, i)"
                @touchmove="onGutterTouchMove($event, i)"
                @touchend="onGutterTouchEnd($event, i)">
                 <div class="p-splitter-gutter-handle"></div>
             </div>
        </template>
    </div>
</template>

<script>
import {DomHandler,ObjectUtils} from 'primevue/utils';

export default {
    name: 'Splitter',
    emits: ['resizeend'],
    props: {
        layout: {
            type: String,
            default: 'horizontal'
        },
        gutterSize: {
            type: Number,
            default: 4
        },
        stateKey: {
            type: String,
            default: null
        },
        stateStorage: {
            type: String,
            default: 'session'
        }
    },
    dragging: false,
    mouseMoveListener: null,
    mouseUpListener: null,
    size: null,
    gutterElement: null,
    startPos: null,
    prevPanelElement: null,
    nextPanelElement: null,
    nextPanelSize: null,
    prevPanelSize: null,
    panelSizes: null,
    prevPanelIndex: null,
    mounted() {
        if (this.panels && this.panels.length) {
            let initialized = false;
            if (this.isStateful()) {
                initialized = this.restoreState();
            }

            if (!initialized) {
                let children = [...this.$el.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
                let _panelSizes = [];

                this.panels.map((panel, i) => {
                    let panelInitialSize = panel.props && panel.props.size ? panel.props.size: null;
                    let panelSize = panelInitialSize || (100 / this.panels.length);
                    _panelSizes[i] = panelSize;
                    children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                });

                this.panelSizes = _panelSizes;
            }
        }
    },
    beforeUnmount() {
        this.clear();
        this.unbindMouseListeners();
    },
    methods: {
        isSplitterPanel(child) {
            return child.type.name === 'SplitterPanel';
        },
        onResizeStart(event, index) {
            this.gutterElement = event.currentTarget;
            this.size = this.horizontal ? DomHandler.getWidth(this.$el) : DomHandler.getHeight(this.$el);
            this.dragging = true;
            this.startPos = this.layout === 'horizontal' ? event.pageX : event.pageY;
            this.prevPanelElement = this.gutterElement.previousElementSibling;
            this.nextPanelElement = this.gutterElement.nextElementSibling;
            this.prevPanelSize = 100 * (this.horizontal ? DomHandler.getOuterWidth(this.prevPanelElement, true): DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
            this.nextPanelSize = 100 * (this.horizontal ? DomHandler.getOuterWidth(this.nextPanelElement, true): DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
            this.prevPanelIndex = index;
            DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing');
            DomHandler.addClass(this.$el, 'p-splitter-resizing');
        },
        onResize(event) {
            let newPos;
            if (this.horizontal)
                newPos = (event.pageX * 100 / this.size) - (this.startPos * 100 / this.size);
            else
                newPos = (event.pageY * 100 / this.size) - (this.startPos * 100 / this.size);

            let newPrevPanelSize = this.prevPanelSize + newPos;
            let newNextPanelSize = this.nextPanelSize - newPos;

            if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
                this.prevPanelElement.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                this.nextPanelElement.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                this.panelSizes[this.prevPanelIndex] = newPrevPanelSize;
                this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
            }
        },
        onResizeEnd(event) {
            if (this.isStateful()) {
                this.saveState();
            }

            this.$emit('resizeend', {originalEvent: event, sizes: this.panelSizes});
            DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing');
            DomHandler.removeClass(this.$el, 'p-splitter-resizing');
            this.clear();
        },
        onGutterMouseDown(event, index) {
            this.onResizeStart(event, index);
            this.bindMouseListeners();
        },
        onGutterTouchStart(event, index) {
            this.onResizeStart(event, index);
            event.preventDefault();
        },
        onGutterTouchMove(event) {
            this.onResize(event);
            event.preventDefault();
        },
        onGutterTouchEnd(event) {
            this.onResizeEnd(event);
            event.preventDefault();
        },
        bindMouseListeners() {
            if (!this.mouseMoveListener) {
                this.mouseMoveListener = event => this.onResize(event)
                document.addEventListener('mousemove', this.mouseMoveListener);
            }

            if (!this.mouseUpListener) {
                this.mouseUpListener = event => {
                    this.onResizeEnd(event);
                    this.unbindMouseListeners();
                }
                document.addEventListener('mouseup', this.mouseUpListener);
            }
        },
        validateResize(newPrevPanelSize, newNextPanelSize) {
            let prevPanelMinSize = ObjectUtils.getVNodeProp(this.panels[0], 'minSize');
            if (this.panels[0].props && prevPanelMinSize && prevPanelMinSize > newPrevPanelSize) {
                return false;
            }

            let newPanelMinSize = ObjectUtils.getVNodeProp(this.panels[1], 'minSize');
            if (this.panels[1].props && newPanelMinSize && newPanelMinSize > newNextPanelSize) {
                return false;
            }

            return true;
        },
        unbindMouseListeners() {
            if (this.mouseMoveListener) {
                document.removeEventListener('mousemove', this.mouseMoveListener);
                this.mouseMoveListener = null;
            }

            if (this.mouseUpListener) {
                document.removeEventListener('mouseup', this.mouseUpListener);
                this.mouseUpListener = null;
            }
        },
        clear() {
            this.dragging = false;
            this.size = null;
            this.startPos = null;
            this.prevPanelElement = null;
            this.nextPanelElement = null;
            this.prevPanelSize = null;
            this.nextPanelSize = null;
            this.gutterElement = null;
            this.prevPanelIndex = null;
        },
        isStateful() {
            return this.stateKey != null;
        },
        getStorage() {
            switch(this.stateStorage) {
                case 'local':
                    return window.localStorage;

                case 'session':
                    return window.sessionStorage;

                default:
                    throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
            }
        },
        saveState() {
            this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes));
        },
        restoreState() {
            const storage = this.getStorage();
            const stateString = storage.getItem(this.stateKey);

            if (stateString) {
                this.panelSizes = JSON.parse(stateString);
                let children = [...this.$el.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
                children.forEach((child, i) => {
                    child.style.flexBasis = 'calc(' + this.panelSizes[i] + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                });

                return true;
            }

            return false;
        }
    },
    computed: {
        containerClass() {
            return ['p-splitter p-component', 'p-splitter-' + this.layout];
        },
        panels() {
            const panels = [];
            this.$slots.default().forEach(child => {
                    if (this.isSplitterPanel(child)) {
                        panels.push(child);
                    }
                    else if (child.children.length > 0) {
                        child.children.forEach(nestedChild => {
                            if (this.isSplitterPanel(nestedChild)) {
                                panels.push(nestedChild)
                            }
                        });
                    }
                }
            )
            return panels;
        },
        gutterStyle() {
            if (this.horizontal)
                return {width: this.gutterSize + 'px'};
            else
                return {height: this.gutterSize + 'px'};
        },
        horizontal() {
            return this.layout === 'horizontal';
        }
    }
}
</script>

<style>
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-panel {
    flex-grow: 1;
}

.p-splitter-panel-nested {
    display: flex;
}

.p-splitter-panel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: col-resize;
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: 24px;
    width: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: 24px;
    height: 100%;
}
</style>
