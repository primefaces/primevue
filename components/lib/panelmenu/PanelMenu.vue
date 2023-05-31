<template>
    <div :id="id" :class="cx('root')" v-bind="ptm('root')" data-pc-name="panelmenu">
        <template v-for="(item, index) of model" :key="getPanelKey(index)">
            <div v-if="isItemVisible(item)" :style="getItemProp(item, 'style')" :class="[cx('panel'), getItemProp(item, 'class')]" v-bind="ptm('panel')">
                <div
                    :id="getHeaderId(index)"
                    :class="[cx('header', { item }), getItemProp(item, 'headerClass')]"
                    :tabindex="isItemDisabled(item) ? -1 : tabindex"
                    role="button"
                    :aria-label="getItemLabel(item)"
                    :aria-expanded="isItemActive(item)"
                    :aria-controls="getContentId(index)"
                    :aria-disabled="isItemDisabled(item)"
                    @click="onHeaderClick($event, item)"
                    @keydown="onHeaderKeyDown($event, item)"
                    v-bind="getPTOptions(item, 'header')"
                    :data-p-highlight="isItemActive(item)"
                    :data-p-disabled="isItemDisabled(item)"
                >
                    <div :class="cx('headerContent')" v-bind="getPTOptions(item, 'headerContent')">
                        <template v-if="!$slots.item">
                            <router-link v-if="getItemProp(item, 'to') && !isItemDisabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="getItemProp(item, 'to')" custom>
                                <a :href="href" :class="cx('headerAction', { isActive, isExactActive })" :tabindex="-1" @click="onHeaderActionClick($event, navigate)" v-bind="getPTOptions(item, 'headerAction')">
                                    <component v-if="$slots.headericon" :is="$slots.headericon" :item="item" :class="[cx('headerIcon'), getItemProp(item, 'icon')]" />
                                    <span v-else-if="getItemProp(item, 'icon')" :class="[cx('headerIcon'), getItemProp(item, 'icon')]" v-bind="getPTOptions(item, 'headerIcon')" />
                                    <span :class="cx('headerLabel')" v-bind="getPTOptions(item, 'headerLabel')">{{ getItemLabel(item) }}</span>
                                </a>
                            </router-link>
                            <a v-else :href="getItemProp(item, 'url')" :class="cx('headerAction')" :tabindex="-1" v-bind="getPTOptions(item, 'headerAction')">
                                <slot v-if="getItemProp(item, 'items')" name="submenuicon" :active="isItemActive(item)">
                                    <component :is="isItemActive(item) ? 'ChevronDownIcon' : 'ChevronRightIcon'" :class="cx('submenuIcon')" v-bind="getPTOptions(item, 'submenuIcon')" />
                                </slot>
                                <component v-if="$slots.headericon" :is="$slots.headericon" :item="item" :class="[cx('headerIcon'), getItemProp(item, 'icon')]" />
                                <span v-else-if="getItemProp(item, 'icon')" :class="[cx('headerIcon'), getItemProp(item, 'icon')]" v-bind="getPTOptions(item, 'headerIcon')" />
                                <span :class="cx('headerLabel')" v-bind="getPTOptions(item, 'headerLabel')">{{ getItemLabel(item) }}</span>
                            </a>
                        </template>
                        <component v-else :is="$slots.item" :item="item"></component>
                    </div>
                </div>
                <transition name="p-toggleable-content">
                    <div v-show="isItemActive(item)" :id="getContentId(index)" :class="cx('toggleableContent')" role="region" :aria-labelledby="getHeaderId(index)" v-bind="ptm('toggleableContent')">
                        <div v-if="getItemProp(item, 'items')" :class="cx('menuContent')" v-bind="ptm('menuContent')">
                            <PanelMenuList
                                :panelId="getPanelId(index)"
                                :items="getItemProp(item, 'items')"
                                :templates="$slots"
                                :expandedKeys="expandedKeys"
                                @item-toggle="changeExpandedKeys"
                                @header-focus="updateFocusedHeader"
                                :exact="exact"
                                :pt="pt"
                            />
                        </div>
                    </div>
                </transition>
            </div>
        </template>
    </div>
</template>

<script>
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import { DomHandler, ObjectUtils, UniqueComponentId } from 'primevue/utils';
import BasePanelMenu from './BasePanelMenu.vue';
import PanelMenuList from './PanelMenuList.vue';

export default {
    name: 'PanelMenu',
    extends: BasePanelMenu,
    emits: ['update:expandedKeys', 'panel-open', 'panel-close'],
    data() {
        return {
            id: this.$attrs.id,
            activeItem: null
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
    },
    methods: {
        getItemProp(item, name) {
            return item ? ObjectUtils.getItemValue(item[name]) : undefined;
        },
        getItemLabel(item) {
            return this.getItemProp(item, 'label');
        },
        getPTOptions(item, key) {
            return this.ptm(key, {
                options: {
                    active: this.isItemActive(item),
                    focused: this.isItemFocused(item)
                }
            });
        },
        isItemActive(item) {
            return this.expandedKeys ? this.expandedKeys[this.getItemProp(item, 'key')] : ObjectUtils.equals(item, this.activeItem);
        },
        isItemVisible(item) {
            return this.getItemProp(item, 'visible') !== false;
        },
        isItemDisabled(item) {
            return this.getItemProp(item, 'disabled');
        },
        isItemFocused(item) {
            return ObjectUtils.equals(item, this.activeItem);
        },
        getPanelId(index) {
            return `${this.id}_${index}`;
        },
        getPanelKey(index) {
            return this.getPanelId(index);
        },
        getHeaderId(index) {
            return `${this.getPanelId(index)}_header`;
        },
        getContentId(index) {
            return `${this.getPanelId(index)}_content`;
        },
        onHeaderClick(event, item) {
            if (this.isItemDisabled(item)) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({ originalEvent: event, item });
            }

            this.changeActiveItem(event, item);
            DomHandler.focus(event.currentTarget);
        },
        onHeaderKeyDown(event, item) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onHeaderArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onHeaderArrowUpKey(event);
                    break;

                case 'Home':
                    this.onHeaderHomeKey(event);
                    break;

                case 'End':
                    this.onHeaderEndKey(event);
                    break;

                case 'Enter':
                case 'Space':
                    this.onHeaderEnterKey(event, item);
                    break;

                default:
                    break;
            }
        },
        onHeaderArrowDownKey(event) {
            const rootList = DomHandler.getAttribute(event.currentTarget, 'data-p-highlight') === true ? DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;

            rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({ originalEvent: event, focusOnNext: true });
            event.preventDefault();
        },
        onHeaderArrowUpKey(event) {
            const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
            const rootList = DomHandler.getAttribute(prevHeader, 'data-p-highlight') === true ? DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;

            rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({ originalEvent: event, focusOnNext: false });
            event.preventDefault();
        },
        onHeaderHomeKey(event) {
            this.changeFocusedHeader(event, this.findFirstHeader());
            event.preventDefault();
        },
        onHeaderEndKey(event) {
            this.changeFocusedHeader(event, this.findLastHeader());
            event.preventDefault();
        },
        onHeaderEnterKey(event, item) {
            const headerAction = DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');

            headerAction ? headerAction.click() : this.onHeaderClick(event, item);
            event.preventDefault();
        },
        onHeaderActionClick(event, navigate) {
            navigate && navigate(event);
        },
        findNextHeader(panelElement, selfCheck = false) {
            const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
            const headerElement = DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');

            return headerElement ? (DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeader(headerElement.parentElement) : headerElement) : null;
        },
        findPrevHeader(panelElement, selfCheck = false) {
            const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
            const headerElement = DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');

            return headerElement ? (DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeader(headerElement.parentElement) : headerElement) : null;
        },
        findFirstHeader() {
            return this.findNextHeader(this.$el.firstElementChild, true);
        },
        findLastHeader() {
            return this.findPrevHeader(this.$el.lastElementChild, true);
        },
        updateFocusedHeader(event) {
            const { originalEvent, focusOnNext, selfCheck } = event;
            const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
            const header = selfCheck ? DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);

            header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
        },
        changeActiveItem(event, item, selfActive = false) {
            if (!this.isItemDisabled(item)) {
                const active = this.isItemActive(item);
                const eventName = !active ? 'panel-open' : 'panel-close';

                this.activeItem = selfActive ? item : this.activeItem && ObjectUtils.equals(item, this.activeItem) ? null : item;
                this.changeExpandedKeys({ item, expanded: !active });
                this.$emit(eventName, { originalEvent: event, item });
            }
        },
        changeExpandedKeys({ item, expanded = false }) {
            if (this.expandedKeys) {
                let _keys = { ...this.expandedKeys };

                if (expanded) _keys[item.key] = true;
                else delete _keys[item.key];

                this.$emit('update:expandedKeys', _keys);
            }
        },
        changeFocusedHeader(event, element) {
            element && DomHandler.focus(element);
        }
    },
    components: {
        PanelMenuList: PanelMenuList,
        ChevronRightIcon: ChevronRightIcon,
        ChevronDownIcon: ChevronDownIcon
    }
};
</script>
