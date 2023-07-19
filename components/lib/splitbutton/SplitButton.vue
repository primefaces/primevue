<template>
    <div :class="containerClass" :style="style" v-bind="ptm('root')" data-pc-name="splitbutton" :data-pc-severity="severity">
        <slot>
            <PVSButton type="button" :class="cx('button')" :label="label" :disabled="disabled" :aria-label="label" @click="onDefaultButtonClick" :pt="ptm('button')" v-bind="buttonProps" :unstyled="unstyled" data-pc-section="button">
                <template v-if="icon" #icon="slotProps">
                    <slot name="icon" :class="slotProps.class">
                        <span :class="[icon, slotProps.class]" v-bind="ptm('button')['icon']" />
                    </slot>
                </template>
            </PVSButton>
        </slot>
        <PVSButton
            ref="button"
            type="button"
            :class="cx('menuButton')"
            :disabled="disabled"
            aria-haspopup="true"
            :aria-expanded="isExpanded"
            :aria-controls="ariaId + '_overlay'"
            @click="onDropdownButtonClick"
            @keydown="onDropdownKeydown"
            :pt="ptm('menuButton')"
            v-bind="menuButtonProps"
            :unstyled="unstyled"
            data-pc-section="menubutton"
        >
            <template #icon="slotProps">
                <slot name="menubuttonicon" :class="slotProps.class">
                    <component :is="menuButtonIcon ? 'span' : 'ChevronDownIcon'" :class="[menuButtonIcon, slotProps.class]" v-bind="ptm('menuButton')['icon']" />
                </slot>
            </template>
        </PVSButton>
        <PVSMenu ref="menu" :id="ariaId + '_overlay'" :model="model" :popup="true" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" :appendTo="appendTo" :unstyled="unstyled" :pt="ptm('menu')" />
    </div>
</template>

<script>
import Button from 'primevue/button';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import TieredMenu from 'primevue/tieredmenu';
import { UniqueComponentId } from 'primevue/utils';
import BaseSplitButton from './BaseSplitButton.vue';

export default {
    name: 'SplitButton',
    extends: BaseSplitButton,
    emits: ['click'],
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
        onDropdownButtonClick() {
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
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return [this.cx('root'), this.class];
        }
    },
    components: {
        PVSButton: Button,
        PVSMenu: TieredMenu,
        ChevronDownIcon: ChevronDownIcon
    }
};
</script>
