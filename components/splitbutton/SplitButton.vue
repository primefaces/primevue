<template>
    <div :class="containerClass" :style="style">
        <slot>
            <PVSButton type="button" class="p-splitbutton-defaultbutton" :icon="icon" :label="label" :disabled="disabled" :aria-label="label" @click="onDefaultButtonClick" v-bind="buttonProps" />
        </slot>
        <PVSButton
            ref="button"
            type="button"
            class="p-splitbutton-menubutton"
            :icon="menuButtonIcon"
            :disabled="disabled"
            aria-haspopup="true"
            :aria-expanded="isExpanded"
            :aria-controls="ariaId + '_overlay'"
            @click="onDropdownButtonClick"
            @keydown="onDropdownKeydown"
            v-bind="menuButtonProps"
        />
        <PVSMenu ref="menu" :id="ariaId + '_overlay'" :model="model" :popup="true" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" :appendTo="appendTo" />
    </div>
</template>

<script>
import Button from 'primevue/button';
import TieredMenu from 'primevue/tieredmenu';
import { UniqueComponentId } from 'primevue/utils';

export default {
    name: 'SplitButton',
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
            default: 'pi pi-chevron-down'
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
            this.$refs.menu.hide(event);

            this.$emit('click');
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return ['p-splitbutton p-component', this.class];
        }
    },
    components: {
        PVSButton: Button,
        PVSMenu: TieredMenu
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
