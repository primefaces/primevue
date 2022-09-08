<template>
    <div class="p-dock-list-container">
        <ul ref="list" class="p-dock-list" role="menu" @mouseleave="onListMouseLeave">
            <li v-for="(item, index) of model" :key="index" :class="itemClass(index)" role="none" @mouseenter="onItemMouseEnter(index)">
                <template v-if="!templates['item']">
                    <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                        <a
                            v-tooltip:[tooltipOptions]="{ value: item.label, disabled: !tooltipOptions }"
                            :href="href"
                            role="menuitem"
                            :class="linkClass(item, { isActive, isExactActive })"
                            :target="item.target"
                            @click="onItemClick($event, item, navigate)"
                        >
                            <template v-if="!templates['icon']">
                                <span v-ripple :class="['p-dock-action-icon', item.icon]"></span>
                            </template>
                            <component v-else :is="templates['icon']" :item="item"></component>
                        </a>
                    </router-link>
                    <a
                        v-else
                        v-tooltip:[tooltipOptions]="{ value: item.label, disabled: !tooltipOptions }"
                        :href="item.url"
                        role="menuitem"
                        :class="linkClass(item)"
                        :target="item.target"
                        @click="onItemClick($event, item)"
                        :tabindex="disabled(item) ? null : '0'"
                    >
                        <template v-if="!templates['icon']">
                            <span v-ripple :class="['p-dock-action-icon', item.icon]"></span>
                        </template>
                        <component v-else :is="templates['icon']" :item="item"></component>
                    </a>
                </template>
                <component v-else :is="templates['item']" :item="item"></component>
            </li>
        </ul>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';

export default {
    name: 'DockSub',
    props: {
        model: {
            type: Array,
            default: null
        },
        templates: {
            type: null,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        tooltipOptions: null
    },
    data() {
        return {
            currentIndex: -3
        };
    },
    methods: {
        onListMouseLeave() {
            this.currentIndex = -3;
        },
        onItemMouseEnter(index) {
            this.currentIndex = index;
        },
        onItemClick(event, item, navigate) {
            if (this.disabled(item)) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (item.to && navigate) {
                navigate(event);
            }
        },
        itemClass(index) {
            return [
                'p-dock-item',
                {
                    'p-dock-item-second-prev': this.currentIndex - 2 === index,
                    'p-dock-item-prev': this.currentIndex - 1 === index,
                    'p-dock-item-current': this.currentIndex === index,
                    'p-dock-item-next': this.currentIndex + 1 === index,
                    'p-dock-item-second-next': this.currentIndex + 2 === index
                }
            ];
        },
        linkClass(item, routerProps) {
            return [
                'p-dock-action',
                {
                    'p-disabled': this.disabled(item),
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        }
    },
    directives: {
        ripple: Ripple,
        tooltip: Tooltip
    }
};
</script>
