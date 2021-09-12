<template>
    <div :id="id" :class="containerClass">
        <ul role="tablist">
            <template v-for="(item,index) of model" :key="item.to">
                <li v-if="visible(item)" :class="getItemClass(item)" :style="item.style" role="tab" :aria-selected="isActive(item)" :aria-expanded="isActive(item)">
                    <template v-if="!$slots.item">
                        <router-link :to="item.to" v-if="!isItemDisabled(item)" custom v-slot="{navigate, href, isActive, isExactActive}">
                            <a :href="href" :class="linkClass({isActive, isExactActive})" @click="onItemClick($event, item, navigate)" role="presentation">
                                <span class="p-steps-number">{{index + 1}}</span>
                                <span class="p-steps-title">{{item.label}}</span>
                            </a>
                        </router-link>
                        <span v-else :class="linkClass()" role="presentation">
                            <span class="p-steps-number">{{index + 1}}</span>
                            <span class="p-steps-title">{{item.label}}</span>
                        </span>
                    </template>
                    <component v-else :is="$slots.item" :item="item"></component>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import {UniqueComponentId} from 'primevue/utils';

export default {
    name: 'Steps',
    props: {
        id: {
            type: String,
            default: UniqueComponentId()
        },
		model: {
            type: Array,
            default: null
        },
        readonly: {
            type: Boolean,
            default: true
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onItemClick(event, item, navigate) {
            if (this.disabled(item) || this.readonly) {
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
        isActive(item) {
            return this.activeRoute === item.to || this.activeRoute === item.to + '/' ;
        },
        getItemClass(item) {
            return ['p-steps-item', item.class, {
                'p-highlight p-steps-current': this.isActive(item),
                'p-disabled': this.isItemDisabled(item)
            }];
        },
        linkClass(routerProps) {
            return ['p-menuitem-link', {
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        isItemDisabled(item) {
            return (this.disabled(item) || (this.readonly && !this.isActive(item)));
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        }
    },
    computed: {
        activeRoute() {
            return this.$route.path;
        },
        containerClass() {
            return ['p-steps p-component', {'p-readonly': this.readonly}];
        }
    }
}
</script>

<style>
.p-steps {
    position: relative;
}

.p-steps ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}

.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.p-steps-item .p-menuitem-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
}

.p-steps.p-steps-readonly .p-steps-item {
    cursor: auto;
}

.p-steps-item.p-steps-current .p-menuitem-link {
    cursor: default;
}

.p-steps-title {
    white-space: nowrap;
}

.p-steps-number {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-steps-title {
    display: block;
}
</style>
