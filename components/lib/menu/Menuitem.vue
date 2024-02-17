<template>
    <li
        v-if="visible()"
        :id="id"
        :class="[cx('menuitem'), item.class]"
        role="menuitem"
        :style="item.style"
        :aria-label="label()"
        :aria-disabled="disabled()"
        v-bind="getPTOptions('menuitem')"
        :data-p-focused="isItemFocused()"
        :data-p-disabled="disabled() || false"
    >
        <div :class="cx('content')" @click="onItemClick($event)" @mousemove="onItemMouseMove($event)" v-bind="getPTOptions('content')">
            <template v-if="!templates.item">
                <a v-ripple :href="item.url" :class="cx('action')" :target="item.target" tabindex="-1" aria-hidden="true" v-bind="getPTOptions('action')">
                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="cx('icon')" />
                    <span v-else-if="item.icon" :class="[cx('icon'), item.icon]" v-bind="getPTOptions('icon')" />
                    <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label() }}</span>
                </a>
            </template>
            <component v-else-if="templates.item" :is="templates.item" :item="item" :label="label()" :props="getMenuItemProps(item)"></component>
        </div>
    </li>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Ripple from 'primevue/ripple';
import { ObjectUtils } from 'primevue/utils';
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
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
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
                        class: this.cx('action'),
                        tabindex: '-1',
                        'aria-hidden': true
                    },
                    this.getPTOptions('action')
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('icon'), item.icon]
                    },
                    this.getPTOptions('icon')
                ),
                label: mergeProps(
                    {
                        class: this.cx('label')
                    },
                    this.getPTOptions('label')
                )
            };
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
