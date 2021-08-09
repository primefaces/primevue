<template>
    <ul ref="list" class="p-dock-list" role="menu" @mouseleave="onListMouseLeave">
        <li v-for="(item, index) of model" :class="itemClass(index)" :key="index" role="none" @mouseenter="onItemMouseEnter(index)">
            <DockSubTemplate v-if="templates['item']" :item="item" :template="templates['item']" />
            <template v-else>
                <router-link v-if="item.to && !item.disabled" :to="item.to" custom v-slot="{href}">
                    <a :href="href" role="menuitem" :class="['p-dock-action', { 'p-disabled': item.disabled }]" :target="item.target"
                        :data-pr-tooltip="item.label" @click="onItemClick(e, item)">
                        <template v-if="typeof item.icon === 'string'">
                            <span :class="['p-dock-action-icon', item.icon]" v-ripple></span>
                        </template>
                        <DockSubIconTemplate v-else :icon="item.icon" />
                    </a>
                </router-link>
                <a v-else :href="item.url || '#'" role="menuitem" :class="['p-dock-action', { 'p-disabled': item.disabled }]" :target="item.target"
                    :data-pr-tooltip="item.label" @click="onItemClick($event, item)">
                    <template v-if="typeof item.icon === 'string'">
                        <span :class="['p-dock-action-icon', item.icon]" v-ripple></span>
                    </template>
                    <DockSubIconTemplate v-else :icon="item.icon" />
                </a>
            </template>
        </li>
    </ul>
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
        onItemClick(e, item) {
            if (item.command) {
                item.command({ originalEvent: e, item });
            }

            e.preventDefault();
        },
        itemClass(index) {
            return ['p-dock-item', {
                'p-dock-item-second-prev': (this.currentIndex - 2) === index,
                'p-dock-item-prev': (this.currentIndex - 1) === index,
                'p-dock-item-current': this.currentIndex === index,
                'p-dock-item-next': (this.currentIndex + 1) === index,
                'p-dock-item-second-next': (this.currentIndex + 2) === index
            }];
        }
    },
    components: {
        'DockSubIconTemplate': DockSubIconTemplate,
        'DockSubTemplate': DockSubTemplate
    }
}
</script>