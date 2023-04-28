<template>
    <li v-if="visible()" :id="id" :class="containerClass()" role="menuitem" :style="item.style" :aria-label="label()" :aria-disabled="disabled()" v-bind="getPTOptions('menuitem')">
        <div class="p-menuitem-content" @click="onItemClick($event)" v-bind="getPTOptions('content')">
            <template v-if="!templates.item">
                <router-link v-if="item.to && !disabled()" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                    <a v-ripple :href="href" :class="linkClass({ isActive, isExactActive })" tabindex="-1" aria-hidden="true" @click="onItemActionClick($event, navigate)" v-bind="getPTOptions('action')">
                        <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="iconClass" />
                        <span v-else-if="item.icon" :class="iconClass" v-bind="getPTOptions('icon')" />
                        <span class="p-menuitem-text" v-bind="getPTOptions('label')">{{ label() }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :class="linkClass()" :target="item.target" tabindex="-1" aria-hidden="true" v-bind="getPTOptions('action')">
                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="iconClass" />
                    <span v-else-if="item.icon" :class="iconClass" v-bind="getPTOptions('icon')" />
                    <span class="p-menuitem-text" v-bind="getPTOptions('label')">{{ label() }}</span>
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
        containerClass() {
            return ['p-menuitem', this.item.class, { 'p-focus': this.id === this.focusedOptionId, 'p-disabled': this.disabled() }];
        },
        linkClass(routerProps) {
            return [
                'p-menuitem-link',
                {
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
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
    computed: {
        iconClass() {
            return ['p-menuitem-icon', this.item.icon];
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
