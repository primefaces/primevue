<template>
    <ul class="p-cascadeselect-panel p-cascadeselect-items">
        <template v-for="(processedOption,index) of options" :key="getOptionLabelToRender(processedOption)">
            <li :id="getOptionId(processedOption)" :class="['p-cascadeselect-item', {'p-cascadeselect-item-group': isOptionGroup(processedOption), 'p-cascadeselect-item-active p-highlight': isOptionActive(processedOption), 'p-focus': isOptionFocused(processedOption), 'p-disabled': isOptionDisabled(processedOption)}]"
                role="treeitem" :aria-label="getOptionLabelToRender(processedOption)" :aria-selected="isOptionGroup(processedOption) ? undefined : isOptionSelected(processedOption)" :aria-expanded="isOptionGroup(processedOption) ? isOptionActive(processedOption) : undefined"
                :aria-setsize="processedOption.length" :aria-posinset="index + 1" :aria-level="level + 1">
                <div class="p-cascadeselect-item-content" @click="onOptionClick($event, processedOption)" v-ripple>
                    <component v-if="templates['option']" :is="templates['option']" :option="processedOption.option" />
                    <span v-else class="p-cascadeselect-item-text">{{getOptionLabelToRender(processedOption)}}</span>
                    <span v-if="isOptionGroup(processedOption)" class="p-cascadeselect-group-icon pi pi-angle-right" aria-hidden="true"></span>
                </div>
                <CascadeSelectSub v-if="isOptionGroup(processedOption) && isOptionActive(processedOption)" role="group" class="p-cascadeselect-sublist" :selectId="selectId" :focusedOptionId="focusedOptionId"
                    :options="getOptionGroupChildren(processedOption)" :activeOptionPath="activeOptionPath" :level="level + 1" :templates="templates" :optionLabel="optionLabel" :optionValue="optionValue" :optionDisabled="optionDisabled"
                    :optionGroupLabel="optionGroupLabel" :optionGroupChildren="optionGroupChildren" @option-change="onOptionChange" />
            </li>
        </template>
    </ul>
</template>

<script>
import {ObjectUtils,DomHandler} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'CascadeSelectSub',
    emits: ['option-change'],
    props: {
        selectId: String,
        focusedOptionId: String,
        options: Array,
        optionLabel: String,
        optionValue: String,
        optionDisabled: null,
        optionGroupLabel: String,
        optionGroupChildren: Array,
        activeOptionPath: Array,
        level: Number,
        templates: null
    },
    mounted() {
        if (ObjectUtils.isNotEmpty(this.parentKey)) {
            this.position();
        }
    },
    methods: {
        getOptionId(processedOption) {
            return `${this.selectId}_${processedOption.key}`;
        },
        getOptionLabel(processedOption) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
        },
        getOptionValue(processedOption) {
            return this.optionValue ? ObjectUtils.resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
        },
        isOptionDisabled(processedOption) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(processedOption.option, this.optionDisabled) : false;
        },
        getOptionGroupLabel(processedOption) {
            return this.optionGroupLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
        },
        getOptionGroupChildren(processedOption) {
            return processedOption.children;
        },
        isOptionGroup(processedOption) {
            return ObjectUtils.isNotEmpty(processedOption.children);
        },
        isOptionSelected(processedOption) {
            return !this.isOptionGroup(processedOption) && this.isOptionActive(processedOption);
        },
        isOptionActive(processedOption) {
            return this.activeOptionPath.some(path => path.key === processedOption.key);
        },
        isOptionFocused(processedOption) {
            return this.focusedOptionId === this.getOptionId(processedOption);
        },
        getOptionLabelToRender(processedOption) {
            return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
        },
        onOptionClick(event, processedOption) {
            this.$emit('option-change', { originalEvent: event, processedOption, isFocus: true });
        },
        onOptionChange(event) {
            this.$emit('option-change', event);
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
