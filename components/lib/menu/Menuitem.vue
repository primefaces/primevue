<template>
    <li
        v-if="visible()"
        :id="id"
        :class="[getCXOptions('menuitem'), item.class]"
        role="menuitem"
        :style="item.style"
        :aria-label="label()"
        :aria-disabled="disabled()"
        v-bind="getPTOptions('menuitem')"
        :data-p-focused="isItemFocused()"
        :data-p-disabled="disabled() || false"
    >
        <div :class="getCXOptions('content')" @click="onItemClick($event)" v-bind="getPTOptions('content')">
            <template v-if="!templates.item">
                <router-link v-if="item.to && !disabled()" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                    <a v-ripple :href="href" :class="getCXOptions('action', { isActive, isExactActive })" tabindex="-1" aria-hidden="true" @click="onItemActionClick($event, navigate)" v-bind="getPTOptions('action')">
                        <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="[getCXOptions('icon'), item.icon]" />
                        <span v-else-if="item.icon" :class="[getCXOptions('icon'), item.icon]" v-bind="getPTOptions('icon')" />
                        <span :class="getCXOptions('label')" v-bind="getPTOptions('label')">{{ label() }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :class="getCXOptions('action')" :target="item.target" tabindex="-1" aria-hidden="true" v-bind="getPTOptions('action')">
                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="[getCXOptions('icon'), item.icon]" />
                    <span v-else-if="item.icon" :class="[getCXOptions('icon'), item.icon]" v-bind="getPTOptions('icon')" />
                    <span :class="getCXOptions('label')" v-bind="getPTOptions('label')">{{ label() }}</span>
                </a>
            </template>
            <component v-else :is="templates.item" :item="item"></component>
        </div>
    </li>
</template>

<script>
import Ripple from 'primevue/ripple';
import { ObjectUtils } from 'primevue/utils';
import BaseMenu from './BaseMenu.vue';

export default {
    name: 'Menuitem',
    extends: BaseMenu,
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
        getCXOptions(key, params) {
            return this.cx(key, {
                ...params,
                context: this
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
