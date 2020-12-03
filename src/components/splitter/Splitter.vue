<template>
    <div :class="containerClass">
        <template v-for="(panel,i) of panels" :key="i" class="p-splitter-panel">
             <component :is="panel"></component>
             <div ref="gutter" class="p-splitter-gutter" v-if="i !== (panels.length -1)" :style="gutterStyle" @mousedown="onGutterMouseDown($event)">
                 <div class="p-splitter-gutter-handle"></div>
             </div>
        </template>
    </div>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    name: 'splitter',
    props: {
        layout: {
            type: String,
            default: 'horizontal'
        },
        gutterSize: {
            type: Number,
            default: 4
        }
    },
    dragging: false,
    mouseMoveListener: null,
    mouseUpListener: null,
    size: null,
    startPos: null,
    prevPanelElement: null,
    nextPanelElement: null,
    nextPanelSize: null,
    prevPanelSize: null,
    mounted() {
        this.initialize();
    },
    beforeUnmount() {
        this.clear();
        this.unbindListeners();
    },
    methods: {
        isSplitterPanel(child) {
            return child.type.name === 'splitterpanel';
        },
        initialize() {
            if (this.panels && this.panels.length) {
                let children = [...this.$el.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));

                this.panels.forEach((panel, i) => {
                    let panelSize = panel.props && panel.props.size ? panel.props.size: null;

                    if (panelSize)
                        children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                    else
                        children[i].style.flexBasis = 'calc(' + (100 / this.panels.length) + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                });
            }
        },
        onGutterMouseDown(event) {
            this.size = this.horizontal ? DomHandler.getWidth(this.$el) : DomHandler.getHeight(this.$el);
            this.dragging = true;
            this.startPos = this.layout === 'horizontal' ? event.pageX : event.pageY;
            this.prevPanelElement = event.currentTarget.previousElementSibling;
            this.nextPanelElement = event.currentTarget.nextElementSibling;
            this.prevPanelSize = 100 * (this.horizontal ? DomHandler.getOuterWidth(this.prevPanelElement, true): DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
            this.nextPanelSize = 100 * (this.horizontal ? DomHandler.getOuterWidth(this.nextPanelElement, true): DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
            DomHandler.addClass(this.$el, 'p-splitter-resizing');
            this.bindListeners();
        },
        bindListeners() {
            if (!this.mouseMoveListener) {
                this.mouseMoveListener = event => {
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
                    }
                };
                document.addEventListener('mousemove', this.mouseMoveListener);
            }

            if (!this.mouseUpListener) {
                this.mouseUpListener = () => {
                    this.clear();
                    this.unbindListeners();
                };
                document.addEventListener('mouseup', this.mouseUpListener);
            }
        },
        validateResize(newPrevPanelSize, newNextPanelSize) {
            if (this.panels[0].props && this.panels[0].props.minSize && this.panels[0].props.minSize > newPrevPanelSize) {
                return false;
            }

            if (this.panels[1].props && this.panels[1].props.minSize && this.panels[1].props.minSize > newNextPanelSize) {
                return false;
            }

            return true;
        },
        unbindListeners() {
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
            DomHandler.removeClass(this.$el, 'p-splitter-resizing');
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
