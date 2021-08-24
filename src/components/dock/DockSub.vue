<template>
    <ul ref="list" class="p-dock-list" role="menu" @mouseleave="onListMouseLeave">
        <li v-for="(item, index) of model" :class="itemClass(index)" :key="index" role="none" @mouseenter="onItemMouseEnter(index)">
            <template v-if="!template">
                <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{href}">
                    <a :href="href" role="menuitem" :class="['p-dock-action', { 'p-disabled': disabled(item) }]" :target="item.target" 
                        :data-pr-tooltip="item.label" @click="onItemClick(e, item)">
                        <template v-if="typeof item.icon === 'string'">
                            <span :class="['p-dock-action-icon', item.icon]" v-ripple></span>
                        </template>
                        <component v-else :is="item.icon"></component>
                    </a>
                </router-link>
                <a v-else :href="item.url || '#'" role="menuitem" :class="['p-dock-action', { 'p-disabled': disabled(item) }]" :target="item.target" 
                    :data-pr-tooltip="item.label" @click="onItemClick($event, item)">
                    <template v-if="typeof item.icon === 'string'">
                        <span :class="['p-dock-action-icon', item.icon]" v-ripple></span>
                    </template>
                    <component v-else :is="item.icon"></component>
                </a>
            </template>
            <component v-else :is="template" :item="item"></component>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'DockSub',
    props: {
        model: {
            type: Array,
            default: null
        }, 
        template: {
            type: Function,
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
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        }
    }
}
</script>