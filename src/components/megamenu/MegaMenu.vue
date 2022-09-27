<template>
    <div :class="containerClass">
        <div v-if="$slots.start" class="p-megamenu-start">
            <slot name="start"></slot>
        </div>
        <ul :aria-orientation="horizontal ? 'horizontal' : 'vertical'" class="p-megamenu-root-list" role="menubar">
            <template v-for="(category, index) of model" :key="label(category) + '_' + index">
                <li v-if="visible(category)" :class="getCategoryClass(category)" :style="category.style" @mouseenter="onCategoryMouseEnter($event, category)" role="presentation">
                    <template v-if="!$slots.item">
                        <router-link v-if="category.to && !disabled(category)" v-slot="{ navigate, href, isActive, isExactActive }" :to="category.to" custom>
                            <a
                                ref="menuLink"
                                v-ripple
                                :href="href"
                                :class="linkClass(category, { isActive, isExactActive })"
                                @click="onCategoryClick($event, category, navigate)"
                                @keydown="onCategoryKeydown($event, category, index)"
                                role="menuitem"
                                :aria-label="label(category)"
                                :aria-disabled="disabled(category)"
                                :aria-haspopup="category.items !== null"
                                :aria-expanded="category === activeItem"
                                :aria-controls="label(category) + '_' + index"
                                :tabindex="tabIndexes[index]"
                            >
                                <span v-if="category.icon" :class="getCategoryIcon(category)"></span>
                                <span class="p-menuitem-text">{{ label(category) }}</span>
                            </a>
                        </router-link>
                        <a
                            v-else
                            ref="menuLink"
                            v-ripple
                            :href="category.url"
                            :class="linkClass(category)"
                            :target="category.target"
                            @click="onCategoryClick($event, category)"
                            @keydown="onCategoryKeydown($event, category, index)"
                            role="menuitem"
                            :aria-label="label(category)"
                            :aria-disabled="disabled(category)"
                            :aria-haspopup="category.items !== null"
                            :aria-expanded="category === activeItem"
                            :aria-controls="label(category) + '_' + index"
                            :tabindex="tabIndexes[index]"
                        >
                            <span v-if="category.icon" :class="getCategoryIcon(category)"></span>
                            <span class="p-menuitem-text">{{ label(category) }}</span>
                            <span v-if="category.items" :class="getCategorySubMenuIcon()"></span>
                        </a>
                    </template>
                    <component v-else :is="$slots.item" :item="category"></component>
                    <div v-if="category.items && category === activeItem" class="p-megamenu-panel">
                        <div class="p-megamenu-grid">
                            <div v-for="(column, columnIndex) of category.items" :key="label(category) + '_column_' + columnIndex" :class="getColumnClassName(category)">
                                <ul v-for="(submenu, submenuIndex) of column" :key="submenu.label + '_submenu_' + submenuIndex" class="p-megamenu-submenu" role="menu">
                                    <li :class="getSubmenuHeaderClass(submenu)" :style="submenu.style" role="presentation">{{ submenu.label }}</li>
                                    <template v-for="(item, i) of submenu.items" :key="label(item) + i.toString()">
                                        <li v-if="visible(item) && !item.separator" ref="subMenu" role="none" :class="getSubmenuItemClass(item)" :style="item.style">
                                            <template v-if="!$slots.item">
                                                <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                                                    <a
                                                        ref="subMenuLink"
                                                        v-ripple
                                                        tabindex="-1"
                                                        :href="href"
                                                        :class="linkClass(item, { isActive, isExactActive })"
                                                        @click="onLeafClick($event, item, navigate)"
                                                        role="menuitem"
                                                        @keydown="onSubMenuKeydown($event, item, index)"
                                                    >
                                                        <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                                                        <span class="p-menuitem-text">{{ label(item) }}</span>
                                                    </a>
                                                </router-link>
                                                <a
                                                    v-else
                                                    ref="subMenuLink"
                                                    v-ripple
                                                    :href="item.url"
                                                    :class="linkClass(item)"
                                                    :target="item.target"
                                                    @click="onLeafClick($event, item)"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    @keydown="onSubMenuKeydown($event, item, index)"
                                                >
                                                    <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                                                    <span class="p-menuitem-text">{{ label(item) }}</span>
                                                    <span v-if="item.items" :class="getSubmenuIcon()"></span>
                                                </a>
                                            </template>
                                            <component v-else :is="$slots.item" :item="item"></component>
                                        </li>
                                        <li v-if="visible(item) && item.separator" :key="'separator' + i.toString()" :class="['p-menu-separator', item.class]" :style="item.style" role="separator"></li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
        <div v-if="$slots.end" class="p-megamenu-end">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import { DomHandler } from 'primevue/utils';

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
            activeItem: null,
            tabIndexes: [],
            subMenuCurrentIndex: 0
        };
    },
    beforeUnmount() {
        this.unbindDocumentClickListener();
    },
    mounted() {
        this.tabIndexes = this.findTabIndex();
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
                } else {
                    this.activeItem = category;
                    this.bindDocumentClickListener();
                }
            }

            if (category.to && navigate) {
                navigate(event);
            }
        },
        onSubMenuKeydown(event, item, categoryIndex) {
            switch (event.code) {
                case 'ArrowDown':
                    this.navigateToNextItem(this.$refs.subMenuLink, this.subMenuCurrentIndex, 'subMenu');

                    event.preventDefault();
                    break;
                case 'ArrowUp':
                    if (this.subMenuCurrentIndex === 0 && this.activeItem) {
                        this.collapseMenu();
                        this.$refs.menuLink[categoryIndex].focus();

                        break;
                    }

                    this.navigateToPrevItem(this.$refs.subMenuLink, this.subMenuCurrentIndex, 'subMenu');

                    event.preventDefault();
                    break;

                case 'Enter':
                    this.onLeafClick(event, item);
                    this.$refs.menuLink[categoryIndex].focus();
                    event.preventDefault();

                    break;

                case 'Space':
                    this.onLeafClick(event, item);
                    this.$refs.menuLink[categoryIndex].focus();

                    event.preventDefault();
                    break;
                case 'Escape':
                    if (this.activeItem) {
                        this.collapseMenu();
                        this.$refs.menuLink[categoryIndex].focus();
                    }

                    break;
                case 'ArrowLeft':
                    if (this.activeItem && this.vertical) {
                        this.collapseMenu();
                        this.$refs.menuLink[categoryIndex].focus();
                    }

                    break;
                case 'Tab':
                    if (this.activeItem) {
                        this.collapseMenu();
                    }

                    break;

                case 'Home':
                    this.navigateToNextItem(this.$refs.subMenuLink, -1, 'subMenu');
                    event.preventDefault();
                    break;

                case 'End':
                    this.navigateToPrevItem(this.$refs.subMenuLink, this.$refs.subMenuLink.length, 'subMenu');

                    event.preventDefault();
                    break;
            }
        },
        onCategoryKeydown(event, category, index) {
            switch (event.code) {
                case 'Tab':
                    setTimeout(() => {
                        if (event.shiftKey) {
                            this.navigateToFirstItem(this.$refs.menuLink);
                        } else {
                            this.navigateToLastItem(this.$refs.menuLink);
                        }
                    }, 300);

                    break;
                case 'Escape':
                    if (this.activeItem) {
                        this.collapseMenu();
                    }

                    break;
                case 'Enter':
                    if (this.activeItem) {
                        this.collapseMenu();
                    } else {
                        this.expandMenu(category);
                    }

                    break;

                case 'Space':
                    event.preventDefault();

                    if (this.activeItem) {
                        this.collapseMenu();
                    } else {
                        this.expandMenu(category);
                    }

                    break;

                //down
                case 'ArrowDown':
                    if (this.horizontal) {
                        this.expandMenu(category);

                        setTimeout(() => {
                            this.navigateToNextItem(this.$refs.subMenuLink, -1, 'subMenu');
                            this.subMenuCurrentIndex = 0;
                        }, 1);
                    } else {
                        this.navigateToNextItem(this.$refs.menuLink, index);
                    }

                    event.preventDefault();
                    break;

                //up
                case 'ArrowUp':
                    if (this.vertical) this.navigateToPrevItem(this.$refs.menuLink, index);
                    else if (category.items && category === this.activeItem) this.collapseMenu();

                    event.preventDefault();
                    break;

                //right
                case 'ArrowRight':
                    if (this.horizontal) {
                        this.navigateToNextItem(this.$refs.menuLink, index);
                    } else {
                        this.expandMenu(category);
                        setTimeout(() => {
                            this.navigateToNextItem(this.$refs.subMenuLink, -1, 'subMenu');
                            this.subMenuCurrentIndex = 0;
                        }, 1);
                    }

                    event.preventDefault();
                    break;

                //left
                case 'ArrowLeft':
                    if (this.horizontal) this.navigateToPrevItem(this.$refs.menuLink, index);
                    else if (category.items && category === this.activeItem) this.collapseMenu();

                    event.preventDefault();
                    break;

                case 'Home':
                    this.navigateToFirstItem(this.$refs.menuLink, event.code);

                    event.preventDefault();
                    break;

                case 'End':
                    this.navigateToLastItem(this.$refs.menuLink, event.code);

                    event.preventDefault();
                    break;

                default:
                    break;
            }
        },
        findTabIndex() {
            const items = this.model;
            let tabIndexes = [];

            for (const item of items) {
                if (item.disabled || tabIndexes.includes(0)) {
                    tabIndexes.push(-1);
                } else {
                    tabIndexes.push(0);
                }
            }

            return tabIndexes;
        },
        expandMenu(item) {
            if (item.items) {
                this.activeItem = item;
            }
        },
        collapseMenu() {
            this.activeItem = null;
        },
        findNextItem(items, index) {
            let i = index + 1;

            if (i >= items.length) {
                return { nextItem: items[items.length], i: items.length };
            }

            let nextItem = items[i];

            if (nextItem) return DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextItem(items, i) : { nextItem, i };
            else return null;
        },
        findPrevItem(items, index) {
            let i = index - 1;

            if (i < 0) {
                return { nextItem: items[0], i: 0 };
            }

            let prevItem = items[i];

            if (prevItem) return DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(items, i) : { prevItem, i };
            else return null;
        },
        navigateToFirstItem(listItems, eventCode) {
            const firstItem = this.findNextItem(listItems, -1);

            for (const item of listItems) {
                item.tabIndex = '-1';
            }

            if (firstItem) {
                firstItem.nextItem.tabIndex = '0';

                if (eventCode === 'Home') {
                    firstItem.nextItem.focus();
                }
            }
        },
        navigateToLastItem(listItems, eventCode) {
            const lastItem = this.findPrevItem(listItems, listItems.length);

            for (const item of listItems) {
                item.tabIndex = '-1';
            }

            if (lastItem) {
                lastItem.prevItem.tabIndex = '0';

                if (eventCode === 'End') {
                    lastItem.prevItem.focus();
                }
            }
        },
        navigateToNextItem(listItems, index, subMenu) {
            const item = this.findNextItem(listItems, index);

            if (subMenu) {
                this.subMenuCurrentIndex = item.i;
            }

            if (!item.nextItem) return;

            if (!subMenu) {
                if (listItems[index].tabIndex) {
                    listItems[index].tabIndex = '-1';
                }

                item.nextItem.tabIndex = '0';
            }

            item.nextItem.focus();
        },
        navigateToPrevItem(listItems, index, subMenu) {
            const item = this.findPrevItem(listItems, index);

            if (subMenu) {
                this.subMenuCurrentIndex = item.i;
            }

            if (!item.prevItem) return;

            if (listItems[index]) {
                listItems[index].tabIndex = '-1';
            }

            item.prevItem.tabIndex = '0';

            item.prevItem.focus();
        },
        getCategoryClass(category) {
            return [
                'p-menuitem',
                {
                    'p-menuitem-active': category === this.activeItem
                },
                category.class
            ];
        },
        getCategorySubMenuIcon() {
            return [
                'p-submenu-icon pi',
                {
                    'pi-angle-down': this.horizontal,
                    'pi-angle-right': this.vertical
                }
            ];
        },
        getCategoryIcon(category) {
            return ['p-menuitem-icon', category.icon];
        },
        getColumnClassName(category) {
            let length = category.items ? category.items.length : 0;
            let columnClass;

            switch (length) {
                case 2:
                    columnClass = 'p-megamenu-col-6';
                    break;

                case 3:
                    columnClass = 'p-megamenu-col-4';
                    break;

                case 4:
                    columnClass = 'p-megamenu-col-3';
                    break;

                case 6:
                    columnClass = 'p-megamenu-col-2';
                    break;

                default:
                    columnClass = 'p-megamenu-col-12';
                    break;
            }

            return columnClass;
        },
        getSubmenuHeaderClass(submenu) {
            return ['p-megamenu-submenu-header', submenu.class, { 'p-disabled': this.disabled(submenu) }];
        },
        getSubmenuItemClass(item) {
            return ['p-menuitem', item.class];
        },
        linkClass(item, routerProps) {
            return [
                'p-menuitem-link',
                {
                    'p-disabled': this.disabled(item),
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
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
            return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        },
        label(item) {
            return typeof item.disabled === 'function' ? item.label() : item.label;
        }
    },
    computed: {
        containerClass() {
            return [
                'p-megamenu p-component',
                {
                    'p-megamenu-horizontal': this.horizontal,
                    'p-megamenu-vertical': this.vertical
                }
            ];
        },
        horizontal() {
            return this.orientation === 'horizontal';
        },
        vertical() {
            return this.orientation === 'vertical';
        }
    },
    directives: {
        ripple: Ripple
    }
};
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
