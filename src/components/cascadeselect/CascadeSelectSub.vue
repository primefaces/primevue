<template>
    <ul class="p-cascadeselect-panel p-cascadeselect-items" role="listbox" aria-orientation="horizontal">
        <template v-for="(option,i) of options" :key="getOptionLabelToRender(option)">
            <li :class="getItemClass(option)" role="none">
                <div class="p-cascadeselect-item-content" @click="onOptionClick($event, option)" tabindex="0" @keydown="onKeyDown($event, option, i)" v-ripple>
                    <component :is="templates['option']" :option="option" v-if="templates['option']"/>
                    <template v-else>
                        <span class="p-cascadeselect-item-text">{{getOptionLabelToRender(option)}}</span>
                    </template>
                    <span class="p-cascadeselect-group-icon pi pi-angle-right" v-if="isOptionGroup(option)"></span>
                </div>
                <CascadeSelectSub v-if="isOptionGroup(option) && isOptionActive(option)" class="p-cascadeselect-sublist" :selectionPath="selectionPath" :options="getOptionGroupChildren(option)"
                        :optionLabel="optionLabel" :optionValue="optionValue" :level="level + 1" @option-select="onOptionSelect" @optiongroup-select="onOptionGroupSelect"
                        :optionGroupLabel="optionGroupLabel" :optionGroupChildren="optionGroupChildren" :parentActive="isOptionActive(option)" :dirty="dirty" :templates="templates"/>
            </li>
        </template>
    </ul>
</template>

<script>
import {ObjectUtils} from 'primevue/utils';
import {DomHandler} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'CascadeSelectSub',
    emits: ['option-select','optiongroup-select'],
    props: {
        selectionPath: Array,
        level: Number,
        options: Array,
        optionLabel: String,
        optionValue: String,
        optionGroupLabel: String,
        optionGroupChildren: Array,
        parentActive: Boolean,
        dirty: Boolean,
        templates: null,
        root: Boolean
    },
    data() {
        return {
            activeOption: null
        }
    },
    mounted() {
        if (this.selectionPath && this.options && !this.dirty) {
            for (let option of this.options) {
                if (this.selectionPath.includes(option)) {
                    this.activeOption = option;
                    break;
                }
            }
        }

        if (!this.root) {
            this.position();
        }
    },
    watch: {
        parentActive(newValue) {
            if (!newValue) {
                this.activeOption = null;
            }
        }
    },
    methods: {
        onOptionClick(event, option) {
            if (this.isOptionGroup(option)) {
                this.activeOption = (this.activeOption === option) ? null : option;

                this.$emit('optiongroup-select', {
                    originalEvent: event,
                    value: option
                });
            }
            else {
                this.$emit('option-select', {
                    originalEvent: event,
                    value: this.getOptionValue(option)
                });
            }
        },
        onOptionSelect(event) {
            this.$emit('option-select', event);
        },
        onOptionGroupSelect(event) {
            this.$emit('optiongroup-select', event);
        },
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        getOptionGroupLabel(optionGroup) {
            return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
        },
        getOptionGroupChildren(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[this.level]);
        },
        isOptionGroup(option) {
            return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[this.level]);
        },
        getOptionLabelToRender(option) {
            return this.isOptionGroup(option) ? this.getOptionGroupLabel(option) : this.getOptionLabel(option);
        },
        getItemClass(option) {
            return [
                'p-cascadeselect-item', {
                    'p-cascadeselect-item-group': this.isOptionGroup(option),
                    'p-cascadeselect-item-active p-highlight': this.isOptionActive(option)
                }
            ]
        },
        isOptionActive(option) {
            return this.activeOption === option;
        },
        onKeyDown(event, option, index) {
            switch (event.key) {
                case 'Down':
                case 'ArrowDown':
                    var nextItem = this.$el.children[index + 1];
                    if (nextItem) {
                        nextItem.children[0].focus();
                    }
                break;

                case 'Up':
                case 'ArrowUp':
                    var prevItem = this.$el.children[index - 1];
                    if (prevItem) {
                        prevItem.children[0].focus();
                    }
                break;

                case 'Right':
                case 'ArrowRight':
                    if (this.isOptionGroup(option)) {
                        if (this.isOptionActive(option)) {
                            event.currentTarget.nextElementSibling.children[0].children[0].focus();
                        }
                        else {
                            this.activeOption = option;
                        }
                    }
                break;

                case 'Left':
                case 'ArrowLeft':
                    this.activeOption = null;

                    var parentList = event.currentTarget.parentElement.parentElement.previousElementSibling;
                    if (parentList) {
                        parentList.focus();
                    }
                break;

                case 'Enter':
                    this.onOptionClick(event, option);
                break;
            }

            event.preventDefault();
        },
        position() {
            const parentItem = this.$el.parentElement;
            const containerOffset = DomHandler.getOffset(parentItem);
            const viewport = DomHandler.getViewport();
            const sublistWidth = this.$el.offsetParent ? this.$el.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$el);
            const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

            if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
                this.$el.style.left = '-100%';
            }
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
