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
        <div :class="cx('content')" @click="onItemClick($event)" v-bind="getPTOptions('content')">
            <template v-if="!templates.item">
                <router-link v-if="item.to && !disabled()" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                    <a v-ripple :href="href" :class="cx('action', { isActive, isExactActive })" tabindex="-1" aria-hidden="true" @click="onItemActionClick($event, navigate)" v-bind="getPTOptions('action')">
                        <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="[cx('icon'), item.icon]" />
                        <span v-else-if="item.icon" :class="[cx('icon'), item.icon]" v-bind="getPTOptions('icon')" />
                        <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label() }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :class="cx('action')" :target="item.target" tabindex="-1" aria-hidden="true" v-bind="getPTOptions('action')">
                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="[cx('icon'), item.icon]" />
                    <span v-else-if="item.icon" :class="[cx('icon'), item.icon]" v-bind="getPTOptions('icon')" />
                    <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label() }}</span>
                </a>
            </template>
            <component v-else :is="templates.item" :item="item"></component>
        </div>
    </li>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Ripple from 'primevue/ripple';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'Menuitem',
    hostName: 'Menu',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['item-click'],
    props: {
        item: null,
        templates: null,
        exact: null,
        id: null,
        focusedOptionId: null
    },
    methods: {
        getItemProp(processedItem, name) {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
        },
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    focused: this.isItemFocused()
                }
            });
        },
        isItemFocused() {
            return this.focusedOptionId === this.id;
        },
        onItemActionClick(event, navigate) {
            navigate && navigate(event);
        },
        onItemClick(event) {
            const command = this.getItemProp(this.item, 'command');

            command && command({ originalEvent: event, item: this.item.item });
            this.$emit('item-click', { originalEvent: event, item: this.item, id: this.id });
        },
        visible() {
            return typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false;
        },
        disabled() {
            return typeof this.item.disabled === 'function' ? this.item.disabled() : this.item.disabled;
        },
        label() {
            return typeof this.item.label === 'function' ? this.item.label() : this.item.label;
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
