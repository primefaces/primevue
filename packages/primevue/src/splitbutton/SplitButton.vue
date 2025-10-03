<template>
    <div :class="containerClass" :style="style" v-bind="ptmi('root')" :data-p-severity="severity">
        <PVSButton
            type="button"
            :class="cx('pcButton')"
            :label="label"
            :disabled="disabled"
            :severity="severity"
            :text="text"
            :icon="icon"
            :outlined="outlined"
            :size="size"
            :fluid="fluid"
            :aria-label="label"
            @click="onDefaultButtonClick"
            v-bind="buttonProps"
            :pt="ptm('pcButton')"
            :unstyled="unstyled"
        >
            <template v-if="$slots.icon" #icon="slotProps">
                <slot name="icon" :class="slotProps.class">
                    <span :class="[icon, slotProps.class]" v-bind="ptm('pcButton')['icon']" data-pc-section="buttonicon" />
                </slot>
            </template>
            <template #default>
                <slot></slot>
            </template>
        </PVSButton>
        <PVSButton
            ref="button"
            type="button"
            :class="cx('pcDropdown')"
            :disabled="disabled"
            aria-haspopup="true"
            :aria-expanded="isExpanded"
            :aria-controls="isExpanded ?  $id + '_overlay' : undefined"
            @click="onDropdownButtonClick"
            @keydown="onDropdownKeydown"
            :severity="severity"
            :text="text"
            :outlined="outlined"
            :size="size"
            :unstyled="unstyled"
            v-bind="menuButtonProps"
            :pt="ptm('pcDropdown')"
        >
            <template #icon="slotProps">
                <!--TODO: menubuttonicon and menuButtonIcon deprecated since v4.0-->
                <slot :name="$slots.dropdownicon ? 'dropdownicon' : 'menubuttonicon'" :class="slotProps.class">
                    <component :is="menuButtonIcon || dropdownIcon ? 'span' : 'ChevronDownIcon'" :class="[dropdownIcon || menuButtonIcon, slotProps.class]" v-bind="ptm('pcDropdown')['icon']" data-pc-section="menubuttonicon" />
                </slot>
            </template>
        </PVSButton>
        <PVSMenu ref="menu" :id="$id + '_overlay'" :model="model" :popup="true" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" :appendTo="appendTo" :unstyled="unstyled" :pt="ptm('pcMenu')">
            <template v-if="$slots.menuitemicon" #itemicon="slotProps">
                <slot name="menuitemicon" :item="slotProps.item" :class="slotProps.class" />
            </template>
            <template v-if="$slots.item" #item="slotProps">
                <slot name="item" :item="slotProps.item" :hasSubmenu="slotProps.hasSubmenu" :label="slotProps.label" :props="slotProps.props"></slot>
            </template>
        </PVSMenu>
    </div>
</template>

<script>
import { isEmpty } from '@primeuix/utils/object';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import Button from 'primevue/button';
import TieredMenu from 'primevue/tieredmenu';
import BaseSplitButton from './BaseSplitButton.vue';

export default {
    name: 'SplitButton',
    extends: BaseSplitButton,
    inheritAttrs: false,
    emits: ['click'],
    inject: {
        $pcFluid: { default: null }
    },
    data() {
        return {
            isExpanded: false
        };
    },
    mounted() {
        this.$watch('$refs.menu.visible', (newValue) => {
            this.isExpanded = newValue;
        });
    },
    methods: {
        onDropdownButtonClick(event) {
            if (event) {
                event.preventDefault();
            }

            this.$refs.menu.toggle({ currentTarget: this.$el, relatedTarget: this.$refs.button.$el });
            this.isExpanded = this.$refs.menu.visible;
        },
        onDropdownKeydown(event) {
            if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
                this.onDropdownButtonClick();
                event.preventDefault();
            }
        },
        onDefaultButtonClick(event) {
            if (this.isExpanded) {
                this.$refs.menu.hide(event);
            }

            this.$emit('click', event);
        }
    },
    computed: {
        containerClass() {
            return [this.cx('root'), this.class];
        },
        hasFluid() {
            return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
        }
    },
    components: {
        PVSButton: Button,
        PVSMenu: TieredMenu,
        ChevronDownIcon: ChevronDownIcon
    }
};
</script>
