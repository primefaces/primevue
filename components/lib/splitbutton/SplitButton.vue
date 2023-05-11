<template>
    <div :class="containerClass" :style="style" v-bind="ptm('root')">
        <slot>
            <PVSButton type="button" class="p-splitbutton-defaultbutton" :label="label" :disabled="disabled" :aria-label="label" @click="onDefaultButtonClick" :pt="ptm('button')" v-bind="buttonProps">
                <template #icon="slotProps">
                    <slot name="icon">
                        <span :class="[icon, slotProps.class]" v-bind="ptm('button')['icon']" />
                    </slot>
                </template>
            </PVSButton>
        </slot>
        <PVSButton
            ref="button"
            type="button"
            class="p-splitbutton-menubutton"
            :disabled="disabled"
            aria-haspopup="true"
            :aria-expanded="isExpanded"
            :aria-controls="ariaId + '_overlay'"
            @click="onDropdownButtonClick"
            @keydown="onDropdownKeydown"
            :pt="ptm('menuButton')"
            v-bind="menuButtonProps"
        >
            <template #icon="slotProps">
                <slot name="menubuttonicon">
                    <component :is="menuButtonIcon ? 'span' : 'ChevronDownIcon'" :class="[menuButtonIcon, slotProps.class]" v-bind="ptm('menuButton')['icon']" />
                </slot>
            </template>
        </PVSButton>
        <PVSMenu ref="menu" :id="ariaId + '_overlay'" :model="model" :popup="true" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" :appendTo="appendTo" :pt="ptm('menu')" />
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import TieredMenu from 'primevue/tieredmenu';
import { UniqueComponentId } from 'primevue/utils';

export default {
    name: 'SplitButton',
    extends: BaseComponent,
    emits: ['click'],
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        model: {
            type: Array,
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        class: {
            type: null,
            default: null
        },
        style: {
            type: null,
            default: null
        },
        buttonProps: {
            type: null,
            default: null
        },
        menuButtonProps: {
            type: null,
            default: null
        },
        menuButtonIcon: {
            type: String,
            default: undefined
        },
        severity: {
            type: String,
            default: null
        },
        raised: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: null
        },
        plain: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isExpanded: false
        };
    },
    methods: {
        onDropdownButtonClick() {
            this.$refs.menu.toggle({ currentTarget: this.$el, relatedTarget: this.$refs.button.$el });
            this.isExpanded = !this.$refs.menu.visible;
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
            return [
                'p-splitbutton p-component',
                this.class,
                {
                    [`p-button-${this.severity}`]: this.severity,
                    'p-button-raised': this.raised,
                    'p-button-rounded': this.rounded,
                    'p-button-text': this.text,
                    'p-button-outlined': this.outlined,
                    'p-button-sm': this.size === 'small',
                    'p-button-lg': this.size === 'large'
                }
            ];
        }
    },
    components: {
        PVSButton: Button,
        PVSMenu: TieredMenu,
        ChevronDownIcon: ChevronDownIcon
    }
};
</script>

<style scoped>
.p-splitbutton {
    display: inline-flex;
    position: relative;
}

.p-splitbutton .p-splitbutton-defaultbutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-menubutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton {
    display: flex;
}
</style>
