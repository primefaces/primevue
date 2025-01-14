<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div :class="cx('controls')" v-bind="ptm('controls')">
            <slot name="controlsstart"></slot>
            <Button @click="moveUp" :aria-label="moveUpAriaLabel" :disabled="moveDisabled()" v-bind="{ ...buttonProps, ...moveUpButtonProps }" :pt="ptm('pcMoveUpButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="moveupicon">
                        <AngleUpIcon v-bind="ptm('pcMoveUpButton')['icon']" data-pc-section="moveupicon" />
                    </slot>
                </template>
            </Button>
            <Button @click="moveTop" :aria-label="moveTopAriaLabel" :disabled="moveDisabled()" v-bind="{ ...buttonProps, ...moveTopButtonProps }" :pt="ptm('pcMoveTopButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetopicon">
                        <AngleDoubleUpIcon v-bind="ptm('pcMoveTopButton')['icon']" data-pc-section="movetopicon" />
                    </slot>
                </template>
            </Button>
            <Button @click="moveDown" :aria-label="moveDownAriaLabel" :disabled="moveDisabled()" v-bind="{ ...buttonProps, ...moveDownButtonProps }" :pt="ptm('pcMoveDownButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movedownicon">
                        <AngleDownIcon v-bind="ptm('pcMoveDownButton')['icon']" data-pc-section="movedownicon" />
                    </slot>
                </template>
            </Button>
            <Button @click="moveBottom" :aria-label="moveBottomAriaLabel" :disabled="moveDisabled()" v-bind="{ ...buttonProps, ...moveBottomButtonProps }" :pt="ptm('pcMoveBottomButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movebottomicon">
                        <AngleDoubleDownIcon v-bind="ptm('pcMoveBottomButton')['icon']" data-pc-section="movebottomicon" />
                    </slot>
                </template>
            </Button>
            <slot name="controlsend"></slot>
        </div>
        <Listbox
            ref="listbox"
            :id="$id"
            :modelValue="d_selection"
            :options="modelValue"
            multiple
            :metaKeySelection="metaKeySelection"
            :listStyle="listStyle"
            :scrollHeight="scrollHeight"
            :tabindex="tabindex"
            :dataKey="dataKey"
            :autoOptionFocus="autoOptionFocus"
            :focusOnHover="focusOnHover"
            :striped="striped"
            :disabled="disabled"
            :ariaLabel="ariaLabel"
            :ariaLabelledby="ariaLabelledby"
            :pt="ptm('pcListbox')"
            :unstyled="unstyled"
            @focus="onListFocus"
            @blur="onListBlur"
            @change="onChangeSelection"
        >
            <template v-if="$slots.header" #header>
                <slot name="header"></slot>
            </template>
            <template #option="{ option, selected, index }">
                <slot :name="$slots.option ? 'option' : 'item'" :item="option" :option="option" :selected="selected" :index="index" />
            </template>
            <!-- //TODO: item slot deprecated since v4.0. Use option slot. -->
        </Listbox>
    </div>
</template>

<script>
import { find, findSingle, scrollInView, setAttribute } from '@primeuix/utils/dom';
import { findIndexInList, isNotEmpty } from '@primeuix/utils/object';
import AngleDoubleDownIcon from '@primevue/icons/angledoubledown';
import AngleDoubleUpIcon from '@primevue/icons/angledoubleup';
import AngleDownIcon from '@primevue/icons/angledown';
import AngleUpIcon from '@primevue/icons/angleup';
import Button from 'primevue/button';
import Listbox from 'primevue/listbox';
import Ripple from 'primevue/ripple';
import BaseOrderList from './BaseOrderList.vue';

export default {
    name: 'OrderList',
    extends: BaseOrderList,
    inheritAttrs: false,
    emits: ['update:modelValue', 'reorder', 'update:selection', 'selection-change', 'focus', 'blur'],
    itemTouched: false,
    reorderDirection: null,
    styleElement: null,
    list: null,
    data() {
        return {
            d_selection: this.selection
        };
    },
    beforeUnmount() {
        this.destroyStyle();
    },
    updated() {
        if (this.reorderDirection) {
            this.updateListScroll();
            this.reorderDirection = null;
        }
    },
    mounted() {
        if (this.responsive) {
            this.createStyle();
        }
    },
    methods: {
        updateSelection(event) {
            this.$emit('update:selection', this.d_selection);
            this.$emit('selection-change', {
                originalEvent: event,
                value: this.d_selection
            });
        },
        onChangeSelection(params) {
            this.d_selection = params.value;
            this.updateSelection(params.event);
        },
        onListFocus(event) {
            this.$emit('focus', event);
        },
        onListBlur(event) {
            this.$emit('blur', event);
        },
        onReorderUpdate(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('reorder', {
                originalEvent: event,
                value: value,
                direction: this.reorderDirection
            });
        },
        moveUp(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex - 1];

                        value[selectedItemIndex - 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'up';
                this.onReorderUpdate(event, value);
            }
        },
        moveTop(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];

                        value.unshift(movedItem);
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'top';
                this.onReorderUpdate(event, value);
            }
        },
        moveDown(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== value.length - 1) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex + 1];

                        value[selectedItemIndex + 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'down';
                this.onReorderUpdate(event, value);
            }
        },
        moveBottom(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== value.length - 1) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];

                        value.push(movedItem);
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'bottom';
                this.onReorderUpdate(event, value);
            }
        },
        updateListScroll() {
            this.list = findSingle(this.$refs.listbox.$el, '[data-pc-section="list"]');

            const listItems = find(this.list, '[data-pc-section="item"][data-p-selected="true"]');

            if (listItems && listItems.length) {
                switch (this.reorderDirection) {
                    case 'up':
                        scrollInView(this.list, listItems[0]);
                        break;

                    case 'top':
                        this.list.scrollTop = 0;
                        break;

                    case 'down':
                        scrollInView(this.list, listItems[listItems.length - 1]);
                        break;

                    case 'bottom':
                        this.list.scrollTop = this.list.scrollHeight;
                        break;

                    default:
                        break;
                }
            }
        },
        createStyle() {
            if (!this.styleElement && !this.isUnstyled) {
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.head.appendChild(this.styleElement);

                let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-orderlist[${this.$attrSelector}] {
        flex-direction: column;
    }

    .p-orderlist[${this.$attrSelector}] .p-orderlist-controls {
        flex-direction: row;
    }
}
`;

                this.styleElement.innerHTML = innerHTML;
            }
        },
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        },
        moveDisabled() {
            return this.disabled ? true : !this.d_selection || !this.d_selection.length ? true : false;
        }
    },
    computed: {
        moveUpAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveUp : undefined;
        },
        moveTopAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveTop : undefined;
        },
        moveDownAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveDown : undefined;
        },
        moveBottomAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveBottom : undefined;
        },
        hasSelectedOption() {
            return isNotEmpty(this.d_selection);
        }
    },
    components: {
        Listbox,
        Button,
        AngleUpIcon,
        AngleDownIcon,
        AngleDoubleUpIcon,
        AngleDoubleDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
