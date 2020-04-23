<template>
    <div :id="id" :class="containerClass">
        <ul role="tablist">
            <template v-for="(item,index) of model">
                <li v-if="visible(item)" :key="item.to" :class="getItemClass(item)" :style="item.style" role="tab" :aria-selected="isActive(item)" :aria-expanded="isActive(item)">
                    <router-link :to="item.to" class="p-menuitem-link" @click.native="onItemClick($event, item)" v-if="!isItemDisabled(item)" role="presentation">
                        <span class="p-steps-number">{{index + 1}}</span>
                        <span class="p-steps-title">{{item.label}}</span>
                    </router-link>
                    <span v-else class="p-menuitem-link" role="presentation">
                        <span class="p-steps-number">{{index + 1}}</span>
                        <span class="p-steps-title">{{item.label}}</span>
                    </span>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
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
        }
    },
    stepsStyle: null,
    watch: {
		model(newValue) {
			if (this.model !== newValue) {
                this.createStyle();
            }
        }
    },
    mounted() {
        this.createStyle();
    },
    methods: {
        onItemClick(event, item) {
            if (item.disabled || this.readonly) {
                event.preventDefault();
                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
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
        isItemDisabled(item) {
            return (item.disabled || (this.readonly && !this.isActive(item)));
        },
        createStyle() {
            if (!this.stepsStyle) {
                this.stepsStyle = document.createElement('style');
                this.stepsStyle.type = 'text/css';
                document.body.appendChild(this.stepsStyle);
            }

            let innerHTML = `
                #${this.id} .p-steps-item {
                    flex: 1 0 ${ (100/ this.model.length) }%
                }
            `;

            this.stepsStyle.innerHTML = innerHTML;
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        }
    },
    computed: {
        activeRoute() {
            return this.$route.path;
        },
        containerClass() {
            return ['p-steps p-component', {'p-steps-readonly': this.readonly}];
        }
    }
}
</script>

<style>
.p-steps ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}

.p-steps .p-steps-item {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
}

.p-steps.p-steps-readonly .p-steps-item {
    cursor: auto;
}

.p-steps .p-steps-item .p-menuitem-link {
    text-decoration: none;
    padding: 1em;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
}

.p-steps .p-steps-item.p-steps-current .p-menuitem-link,
.p-steps .p-steps-item.p-disabled .p-menuitem-link {
    cursor: default;
}

.p-steps .p-steps-number {
    font-size: 2em;
    display: block;
}

.p-steps .p-steps-title {
    display: block;
    white-space: nowrap;
}

@media (max-width: 40em) {
    .p-steps ul {
        flex-wrap: wrap;
    }

    .p-steps .p-steps-item .p-menuitem-link {
        padding: 0.5em;
    }
}
</style>
