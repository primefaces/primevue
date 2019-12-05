<template>
    <div :class="containerClass">
        <ul class="p-megamenu-root-list">
            <li v-for="(category,index) of model" :key="category.label + '_' + index" :class="getCategoryClass(category)" :style="category.style" 
                @mouseenter="onCategoryMouseEnter($event, category)">
                <a :href="category.url||'#'" class="p-menuitem-link" :target="category.target" @click="onCategoryClick($event, category)" @keydown="onCategoryKeydown($event, category)">
                    <span v-if="category.icon" :class="getCategoryIcon(category)"></span>
                    <span class="p-menuitem-text">{{category.label}}</span>
                    <span v-if="category.items" :class="getCategorySubMenuIcon(category)"></span>
                </a>
            </li>
        </ul>
        <div class="p-menubar-custom" v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
		model: {
            type: Array,
            default: null
        },
        orientation: {
            type: String,
            default: 'horizontal'
        }
    },
    data() {
        return {
            activeItem: null
        }
    },
    methods: {
        itemClick(event) {
            
        },
        onCategoryMouseEnter(event, category) {

        },
        onCategoryClick(event, category) {

        },
        onCategoryKeydown(event, category) {

        },
        getCategoryClass(category) {
            return ['p-menuitem', {
                'p-menuitem-active': category === this.activeItem,
                'p-disabled': category.disabled
            }, category.class];
        },
        getCategorySubMenuIcon(category) {
            return ['p-submenu-icon pi pi-fw', {
                'pi-caret-down': this.horizontal,
                'pi-caret-right': this.vertical
            }];
        },
        getCategoryIcon(category) {
            return ['p-menuitem-icon', category.icon];
        }
    },
    computed: {
        containerClass() {
            return ['p-megamenu p-component', {
                'p-megamenu-horizontal': this.horizontal,
                'p-megamenu-vertical': this.vertical
            }];
        },
        horizontal() {
            return this.orientation === 'horizontal';
        },
        vertical() {
            return this.orientation === 'vertical';
        }
    }
}
</script>

<style>
.p-megamenu {
    padding: .25em;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-megamenu-root-list > .p-menuitem {
    position: relative;
}

.p-megamenu .p-menuitem-link {
    padding: .25em;
    display: block;
    text-decoration: none;
}

.p-megamenu .p-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.p-megamenu .p-menuitem-text {
    vertical-align: middle;
}

.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
}

.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}

.p-megamenu-panel .p-menuitem {
    margin: .125em 0;
}

.p-megamenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 12.5em;
}

.p-megamenu-submenu-header {
    padding: .25em;
}

/* Horizontal */
.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem {
    display: inline-block;
}

.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    vertical-align: middle;
    margin-left: .25em;
}

/* Vertical */
.p-megamenu-vertical {
    width: 12.5em;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem {
    display: block;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
    position: relative;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    position: absolute;
    width: 1em;
    height: 1em;
    top: 50%;
    right: 0;
    margin-top: -.5em;
}

.p-megamenu .p-grid {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
</style>