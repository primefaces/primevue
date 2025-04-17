<template>
    <ul :ref="containerRef" :class="cx('list')" v-bind="level === 0 ? ptm('list') : ptm('optionList')">
        <template v-for="(processedOption, index) of options" :key="getOptionLabelToRender(processedOption)">
            <li
                :id="getOptionId(processedOption)"
                :class="cx('option', { processedOption })"
                role="treeitem"
                :aria-label="getOptionLabelToRender(processedOption)"
                :aria-selected="isOptionGroup(processedOption) ? undefined : isOptionSelected(processedOption)"
                :aria-expanded="isOptionGroup(processedOption) ? isOptionActive(processedOption) : undefined"
                :aria-level="level + 1"
                :aria-setsize="options.length"
                :aria-posinset="index + 1"
                v-bind="getPTOptions(processedOption, index, 'option')"
                :data-p-option-group="isOptionGroup(processedOption)"
                :data-p-active="isOptionActive(processedOption)"
                :data-p-focus="isOptionFocused(processedOption)"
                :data-p-disabled="isOptionDisabled(processedOption)"
            >
                <div
                    v-ripple
                    :class="cx('optionContent')"
                    @click="onOptionClick($event, processedOption)"
                    @mouseenter="onOptionMouseEnter($event, processedOption)"
                    @mousemove="onOptionMouseMove($event, processedOption)"
                    v-bind="getPTOptions(processedOption, index, 'optionContent')"
                >
                    <component v-if="templates['option']" :is="templates['option']" :option="processedOption.option" :selected="isOptionGroup(processedOption) ? false : isOptionSelected(processedOption)" />
                    <span v-else :class="cx('optionText')" v-bind="getPTOptions(processedOption, index, 'optionText')">{{ getOptionLabelToRender(processedOption) }}</span>
                    <template v-if="isOptionGroup(processedOption)">
                        <span :class="cx('groupIconContainer')">
                            <component v-if="templates['optiongroupicon']" :is="templates['optiongroupicon']" :class="cx('groupIcon')" />
                            <span v-else-if="optionGroupIcon" :class="[cx('groupIcon'), optionGroupIcon]" aria-hidden="true" v-bind="getPTOptions(processedOption, index, 'groupIcon')" />
                            <AngleRightIcon v-else :class="cx('groupIcon')" aria-hidden="true" v-bind="getPTOptions(processedOption, index, 'groupIcon')" />
                        </span>
                    </template>
                </div>
                <CascadeSelectSub
                    v-if="isOptionGroup(processedOption) && isOptionActive(processedOption)"
                    role="group"
                    :class="cx('optionList')"
                    :selectId="selectId"
                    :focusedOptionId="focusedOptionId"
                    :options="getOptionGroupChildren(processedOption)"
                    :activeOptionPath="activeOptionPath"
                    :level="level + 1"
                    :templates="templates"
                    :optionLabel="optionLabel"
                    :optionValue="optionValue"
                    :optionDisabled="optionDisabled"
                    :optionGroupIcon="optionGroupIcon"
                    :optionGroupLabel="optionGroupLabel"
                    :optionGroupChildren="optionGroupChildren"
                    :value="value"
                    @option-change="$emit('option-change', $event)"
                    @option-focus-change="$emit('option-focus-change', $event)"
                    @option-focus-enter-change="$emit('option-focus-enter-change', $event)"
                    :pt="pt"
                    :unstyled="unstyled"
                />
            </li>
        </template>
    </ul>
</template>

<script>
import { equals, isNotEmpty, resolveFieldData } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import AngleRightIcon from '@primevue/icons/angleright';
import Ripple from 'primevue/ripple';
export default {
    name: 'CascadeSelectSub',
    hostName: 'CascadeSelect',
    extends: BaseComponent,
    emits: ['option-change', 'option-focus-change', 'option-focus-enter-change'],
    container: null,
    props: {
        selectId: String,
        focusedOptionId: String,
        options: Array,
        optionLabel: String | Function,
        optionValue: String,
        optionDisabled: null,
        optionGroupIcon: String,
        optionGroupLabel: String,
        optionGroupChildren: {
            type: [String, Array],
            default: null
        },
        activeOptionPath: Array,
        level: Number,
        templates: null,
        value: null
    },
    methods: {
        getOptionId(processedOption) {
            return `${this.selectId}_${processedOption.key}`;
        },
        getOptionLabel(processedOption) {
            return this.optionLabel ? resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
        },
        getOptionValue(processedOption) {
            return this.optionValue ? resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
        },
        getPTOptions(processedOption, index, key) {
            return this.ptm(key, {
                context: {
                    option: processedOption,
                    index,
                    level: this.level,
                    optionGroup: this.isOptionGroup(processedOption),
                    active: this.isOptionActive(processedOption),
                    focused: this.isOptionFocused(processedOption),
                    disabled: this.isOptionDisabled(processedOption)
                }
            });
        },
        isOptionDisabled(processedOption) {
            return this.optionDisabled ? resolveFieldData(processedOption.option, this.optionDisabled) : false;
        },
        getOptionGroupLabel(processedOption) {
            return this.optionGroupLabel ? resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
        },
        getOptionGroupChildren(processedOption) {
            return processedOption.children;
        },
        isOptionGroup(processedOption) {
            return isNotEmpty(processedOption.children);
        },
        isOptionSelected(processedOption) {
            return equals(this.value, processedOption?.option);
        },
        isOptionActive(processedOption) {
            return this.activeOptionPath && this.activeOptionPath.some((path) => path.key === processedOption.key);
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
        onOptionMouseEnter(event, processedOption) {
            this.$emit('option-focus-enter-change', { originalEvent: event, processedOption });
        },
        onOptionMouseMove(event, processedOption) {
            this.$emit('option-focus-change', { originalEvent: event, processedOption });
        },
        containerRef(el) {
            this.container = el;
        },
        listAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        AngleRightIcon: AngleRightIcon
    }
};
</script>
