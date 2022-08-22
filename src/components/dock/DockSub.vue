<template>
    <div class="p-dock-list-container">
        <ul ref="list" class="p-dock-list" role="menu" @mouseleave="onListMouseLeave">
            <li v-for="(item, index) of model" :class="itemClass(index)" :key="index" role="none" @mouseenter="onItemMouseEnter(index)">
                <DockSubTemplate v-if="templates['item']" :item="item" :template="templates['item']" />
                <template v-else>
                    <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
                        <a :href="href" role="menuitem" :class="linkClass(item, {isActive, isExactActive})" :target="item.target"
                            v-tooltip:[tooltipOptions]="{value: item.label, disabled: !tooltipOptions}" @click="onItemClick($event, item, navigate)">
                            <template v-if="typeof item.icon === 'string'">
                                <span :class="['p-dock-action-icon', item.icon]" v-ripple></span>
                            </template>
                            <DockSubIconTemplate v-else :icon="item.icon" />
                        </a>
                    </router-link>
                    <a v-else :href="item.url" role="menuitem" :class="linkClass(item)" :target="item.target"
                        v-tooltip:[tooltipOptions]="{value: item.label, disabled: !tooltipOptions}" @click="onItemClick($event, item)" :tabindex="disabled(item) ? null : '0'">
                        <template v-if="typeof item.icon === 'string'">
                            <span :class="['p-dock-action-icon', item.icon]" v-ripple></span>
                        </template>
                        <DockSubIconTemplate v-else :icon="item.icon" />
                    </a>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
const DockSubIconTemplate = {
    functional: true,
    props: {
        icon: {
            type: null,
            default: null
        }
    },
    render(createElement, context) {
        return [context.props['icon']()];
    }
};

const DockSubTemplate = {
    functional: true,
    props: {
        item: {
            type: null,
            default: null
        },
        template: {
            type: null,
            default: null
        }
    },
    render(createElement, context) {
        const content = context.props.template({
            'item': context.props.item
        });

        return [content];
    }
};

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
        tooltipOptions: null,
        exact: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            currentIndex: -3
        }
    },
    methods: {
        onListMouseLeave() {
            this.currentIndex = -3;
        },
        onItemMouseEnter(index) {
            this.currentIndex = index;
        },
        onItemClick(event, item) {
            if (this.disabled(item)) {
                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            event.preventDefault();
        },
        itemClass(index) {
            return ['p-dock-item', {
                'p-dock-item-second-prev': (this.currentIndex - 2) === index,
                'p-dock-item-prev': (this.currentIndex - 1) === index,
                'p-dock-item-current': this.currentIndex === index,
                'p-dock-item-next': (this.currentIndex + 1) === index,
                'p-dock-item-second-next': (this.currentIndex + 2) === index
            }];
        },
        linkClass(item, routerProps) {
            return ['p-dock-action', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        }
    },
    components: {
        'DockSubIconTemplate': DockSubIconTemplate,
        'DockSubTemplate': DockSubTemplate
    }
}
</script>