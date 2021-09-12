<template>
    <div :class="containerClass">
        <div class="p-megamenu-start" v-if="$slots.start">
            <slot name="start"></slot>
        </div>
        <ul class="p-megamenu-root-list" role="menubar">
            <template v-for="(category,index) of model" :key="category.label + '_' + index">
                <li v-if="visible(category)"  :class="getCategoryClass(category)" :style="category.style"
                    @mouseenter="onCategoryMouseEnter($event, category)" role="none">
                    <template v-if="!$slots.item">
                        <router-link v-if="category.to && !disabled(category)" :to="category.to" custom v-slot="{navigate, href, isActive, isExactActive}">
                            <a :href="href" :class="linkClass(category, {isActive, isExactActive})" @click="onCategoryClick($event, category, navigate)" @keydown="onCategoryKeydown($event, category)" role="menuitem" v-ripple>
                                <span v-if="category.icon" :class="getCategoryIcon(category)"></span>
                                <span class="p-menuitem-text">{{category.label}}</span>
                            </a>
                        </router-link>
                        <a v-else :href="category.url" :class="linkClass(category)" :target="category.target" @click="onCategoryClick($event, category)" @keydown="onCategoryKeydown($event, category)"
                            role="menuitem" :aria-haspopup="category.items != null" :aria-expanded="category === activeItem" :tabindex="disabled(category) ? null : '0'" v-ripple>
                            <span v-if="category.icon" :class="getCategoryIcon(category)"></span>
                            <span class="p-menuitem-text">{{category.label}}</span>
                            <span v-if="category.items" :class="getCategorySubMenuIcon()"></span>
                        </a>
                    </template>
                    <component v-else :is="$slots.item" :item="item"></component>
                    <div class="p-megamenu-panel" v-if="category.items">
                        <div class="p-megamenu-grid">
                            <div v-for="(column,columnIndex) of category.items" :key="category.label + '_column_' + columnIndex" :class="getColumnClassName(category)">
                                <ul v-for="(submenu,submenuIndex) of column" class="p-megamenu-submenu" :key="submenu.label + '_submenu_' + submenuIndex" role="menu">
                                    <li :class="getSubmenuHeaderClass(submenu)" :style="submenu.style" role="presentation">{{submenu.label}}</li>
                                    <template v-for="(item, i) of submenu.items" :key="item.label + i.toString()">
                                        <li role="none" :class="getSubmenuItemClass(item)" :style="item.style" v-if="visible(item) && !item.separator">
                                            <template v-if="!$slots.item">
                                                <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
                                                    <a :href="href" :class="linkClass(item, {isActive, isExactActive})" @click="onLeafClick($event, item, navigate)" role="menuitem" v-ripple>
                                                        <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                                                        <span class="p-menuitem-text">{{item.label}}</span>
                                                    </a>
                                                </router-link>
                                                <a v-else :href="item.url" :class="linkClass(item)" :target="item.target" @click="onLeafClick($event, item)" role="menuitem" :tabindex="disabled(item) ? null : '0'" v-ripple>
                                                    <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                                                    <span class="p-menuitem-text">{{item.label}}</span>
                                                    <span :class="getSubmenuIcon()" v-if="item.items"></span>
                                                </a>
                                            </template>
                                            <component v-else :is="$slots.item" :item="item"></component>
                                        </li>
                                        <li :class="['p-menu-separator', item.class]" :style="item.style" v-if="visible(item) && item.separator" :key="'separator' + i.toString()" role="separator"></li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
        <div class="p-megamenu-end" v-if="$slots.end">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import {DomHandler} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'MegaMenu',
    props: {
		model: {
            type: Array,
            default: null
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    documentClickListener: null,
    data() {
        return {
            activeItem: null
        }
    },
    beforeUnmount() {
        this.unbindDocumentClickListener();
    },
    methods: {
        onLeafClick(event, item, navigate) {
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

            this.activeItem = null;

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onCategoryMouseEnter(event, category) {
            if (this.disabled(category)) {
                event.preventDefault();
                return;
            }

            if (this.activeItem) {
                this.activeItem = category;
            }
        },
        onCategoryClick(event, category, navigate) {
            if (this.disabled(category)) {
                event.preventDefault();
                return;
            }

            if (category.command) {
                category.command({
                    originalEvent: event,
                    item: category
                });
            }

            if (category.items) {
                if (this.activeItem && this.activeItem === category) {
                    this.activeItem = null;
                    this.unbindDocumentClickListener();
                }
                else {
                    this.activeItem = category;
                    this.bindDocumentClickListener();
                }
            }

            if (category.to && navigate) {
                navigate(event);
            }
        },
        onCategoryKeydown(event, category) {
            let listItem = event.currentTarget.parentElement;

            switch(event.which) {
                //down
                case 40:
                    if (this.horizontal)
                        this.expandMenu(category);
                    else
                        this.navigateToNextItem(listItem);

                    event.preventDefault();
                break;

                //up
                case 38:
                    if (this.vertical)
                        this.navigateToPrevItem(listItem);
                    else if (category.items && category === this.activeItem)
                        this.collapseMenu();

                    event.preventDefault();
                break;

                //right
                case 39:
                    if (this.horizontal)
                        this.navigateToNextItem(listItem);
                    else
                        this.expandMenu(category);

                    event.preventDefault()
                break;

                //left
                case 37:
                    if (this.horizontal)
                        this.navigateToPrevItem(listItem);
                    else if (category.items && category === this.activeItem)
                        this.collapseMenu();

                    event.preventDefault();
                break;

                default:
                break;
            }
        },
        expandMenu(item) {
            if (item.items) {
                this.activeItem = item;
            }
        },
        collapseMenu() {
            this.activeItem = null;
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        navigateToNextItem(listItem) {
            var nextItem = this.findNextItem(listItem);
            if (nextItem) {
                nextItem.children[0].focus();
            }
        },
        navigateToPrevItem(listItem) {
            var prevItem = this.findPrevItem(listItem);
            if (prevItem) {
                prevItem.children[0].focus();
            }
        },
        getCategoryClass(category) {
            return ['p-menuitem', {
                'p-menuitem-active': category === this.activeItem
            }, category.class];
        },
        getCategorySubMenuIcon() {
            return ['p-submenu-icon pi', {
                'pi-angle-down': this.horizontal,
                'pi-angle-right': this.vertical
            }];
        },
        getCategoryIcon(category) {
            return ['p-menuitem-icon', category.icon];
        },
        getColumnClassName(category) {
            let length = category.items ? category.items.length: 0;
            let columnClass;

            switch(length) {
                case 2:
                    columnClass= 'p-megamenu-col-6';
                break;

                case 3:
                    columnClass= 'p-megamenu-col-4';
                break;

                case 4:
                    columnClass= 'p-megamenu-col-3';
                break;

                case 6:
                    columnClass= 'p-megamenu-col-2';
                break;

                default:
                    columnClass= 'p-megamenu-col-12';
                break;
            }

            return columnClass;
        },
        getSubmenuHeaderClass(submenu) {
            return ['p-megamenu-submenu-header', submenu.class, {'p-disabled': this.disabled(submenu)}];
        },
        getSubmenuItemClass(item) {
            return ['p-menuitem', item.class];
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        bindDocumentClickListener() {
            if (!this.documentClickListener) {
                this.documentClickListener = (event) => {
                    if (this.$el && !this.$el.contains(event.target)) {
                        this.activeItem = null;
                        this.unbindDocumentClickListener();
                    }
                };

                document.addEventListener('click', this.documentClickListener);
            }
        },
        unbindDocumentClickListener() {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
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
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-megamenu-root-list > .p-menuitem {
    position: relative;
}

.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-megamenu .p-menuitem-text {
    line-height: 1;
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

.p-megamenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Horizontal */
.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

/* Vertical */
.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
}


.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}
</style>
