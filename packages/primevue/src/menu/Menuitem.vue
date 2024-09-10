<template>
    <li
        v-if="visible()"
        :id="id"
        :class="[cx('item'), item.class]"
        role="menuitem"
        :style="item.style"
        :aria-label="label()"
        :aria-disabled="disabled()"
        v-bind="getPTOptions('item')"
        :data-p-focused="isItemFocused()"
        :data-p-disabled="disabled() || false"
    >
        <div :class="cx('itemContent')" @click="onItemClick($event)" @mousemove="onItemMouseMove($event)" v-bind="getPTOptions('itemContent')">
            <template v-if="!templates.item">
                <a v-ripple :href="item.url" :class="cx('itemLink')" :target="item.target" tabindex="-1" v-bind="getPTOptions('itemLink')">
                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="cx('itemIcon')" />
                    <span v-else-if="item.icon" :class="[cx('itemIcon'), item.icon]" v-bind="getPTOptions('itemIcon')" />
                    <span :class="cx('itemLabel')" v-bind="getPTOptions('itemLabel')">{{ label() }}</span>
                </a>
            </template>
            <component v-else-if="templates.item" :is="templates.item" :item="item" :label="label()" :props="getMenuItemProps(item)"></component>
        </div>
    </li>
</template>

<script>
import { resolve } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';

export default {
    name: 'Menuitem',
    hostName: 'Menu',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['item-click', 'item-mousemove'],
    props: {
        item: null,
        templates: null,
        id: null,
        focusedOptionId: null,
        index: null
    },
    methods: {
        getItemProp(processedItem, name) {
            return processedItem && processedItem.item ? resolve(processedItem.item[name]) : undefined;
        },
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    item: this.item,
                    index: this.index,
                    focused: this.isItemFocused(),
                    disabled: this.disabled()
                }
            });
        },
        isItemFocused() {
            return this.focusedOptionId === this.id;
        },
        onItemClick(event) {
            const command = this.getItemProp(this.item, 'command');

            command && command({ originalEvent: event, item: this.item.item });
            this.$emit('item-click', { originalEvent: event, item: this.item, id: this.id });
        },
        onItemMouseMove(event) {
            this.$emit('item-mousemove', { originalEvent: event, item: this.item, id: this.id });
        },
        visible() {
            return typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false;
        },
        disabled() {
            return typeof this.item.disabled === 'function' ? this.item.disabled() : this.item.disabled;
        },
        label() {
            return typeof this.item.label === 'function' ? this.item.label() : this.item.label;
        },
        getMenuItemProps(item) {
            return {
                action: mergeProps(
                    {
                        class: this.cx('itemLink'),
                        tabindex: '-1',
                        'aria-hidden': true
                    },
                    this.getPTOptions('itemLink')
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('itemIcon'), item.icon]
                    },
                    this.getPTOptions('itemIcon')
                ),
                label: mergeProps(
                    {
                        class: this.cx('itemLabel')
                    },
                    this.getPTOptions('itemLabel')
                )
            };
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
