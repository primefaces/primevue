<template>
    <li v-if="visible()" :class="[cx('item'), item.class]" v-bind="ptm('item', ptmOptions)">
        <template v-if="!templates.item">
            <a :href="item.url || '#'" :class="cx('itemLink')" :target="item.target" :aria-current="isCurrentUrl()" @click="onClick" v-bind="ptm('itemLink', ptmOptions)">
                <component v-if="templates && templates.itemicon" :is="templates.itemicon" :item="item" :class="cx('itemIcon', ptmOptions)" />
                <span v-else-if="item.icon" :class="[cx('itemIcon'), item.icon]" v-bind="ptm('itemIcon', ptmOptions)" />
                <span v-if="item.label" :class="cx('itemLabel')" v-bind="ptm('itemLabel', ptmOptions)">{{ label() }}</span>
            </a>
        </template>
        <component v-else :is="templates.item" :item="item" :label="label()" :props="getMenuItemProps"></component>
    </li>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import { mergeProps } from 'vue';

export default {
    name: 'BreadcrumbItem',
    hostName: 'Breadcrumb',
    extends: BaseComponent,
    props: {
        item: null,
        templates: null,
        index: null
    },
    methods: {
        onClick(event) {
            if (this.item.command) {
                this.item.command({
                    originalEvent: event,
                    item: this.item
                });
            }
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
        isCurrentUrl() {
            const { to, url } = this.item;
            const lastPath = typeof window !== 'undefined' ? window.location.pathname : '';

            return to === lastPath || url === lastPath ? 'page' : undefined;
        }
    },
    computed: {
        ptmOptions() {
            return {
                context: {
                    item: this.item,
                    index: this.index
                }
            };
        },
        getMenuItemProps() {
            return {
                action: mergeProps(
                    {
                        class: this.cx('itemLink'),
                        'aria-current': this.isCurrentUrl(),
                        onClick: ($event) => this.onClick($event)
                    },
                    this.ptm('itemLink', this.ptmOptions)
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('icon'), this.item.icon]
                    },
                    this.ptm('icon', this.ptmOptions)
                ),
                label: mergeProps(
                    {
                        class: this.cx('label')
                    },
                    this.ptm('label', this.ptmOptions)
                )
            };
        }
    }
};
</script>
