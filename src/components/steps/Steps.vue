<template>
    <div :class="containerClass">
        <ul role="tablist">
            <li v-for="(item,index) of model" :key="item.to" :class="getItemClass(item)" :style="item.style" role="tab" :aria-selected="isActive(item)" :aria-expanded="isActive(item)">
                <router-link :to="item.to" class="p-menuitem-link" @click.native="onItemClick($event, item)" v-if="!isItemDisabled(item)" role="presentation">
                    <span class="p-steps-number">{{index + 1}}</span>
                    <span class="p-steps-title">{{item.label}}</span>
                </router-link>
                <span v-else class="p-menuitem-link" role="presentation">
                    <span class="p-steps-number">{{index + 1}}</span>
                    <span class="p-steps-title">{{item.label}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
		model: {
            type: Array,
            default: null
        },
        readonly: {
            type: Boolean,
            default: true
        }
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
}

.p-steps ul:after {
    content: "";
    display: table;
    clear: both;
}

.p-steps .p-steps-item {
    float: left;
}

.p-steps.p-steps-readonly .p-steps-item {
    cursor: auto;
}

.p-steps .p-steps-item .p-menuitem-link {
    text-decoration: none;
    display: block;
    padding: 1em;
    position: relative;
    text-align: center;
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
    .p-steps .p-steps-item .p-menuitem-link {
        padding: 0.5em;
    }

    .p-steps .p-steps-item .p-steps-title {
        display: none;
    }
}
.p-steps .p-steps-item {
     width: 25%;
 }
</style>
