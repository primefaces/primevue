<template>
    <div ref="container" class="p-splitbutton p-buttonset p-component">
        <PVSButton type="button" :icon="icon" :label="label" @click="onClick" :disabled="disabled" :tabindex="tabindex" />
        <PVSButton type="button" class="p-splitbutton-menubutton" icon="pi pi-caret-down" @click="onDropdownButtonClick" :disabled="disabled"
            aria-haspopup="true" :aria-controls="ariaId + '_overlay'"/>
        <PVSMenu :id="ariaId + '_overlay'" ref="menu" :model="model" :popup="true" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" />
    </div>
</template>

<script>
import Button from '../button/Button';
import Menu from '../menu/Menu';
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
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
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: String,
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        }
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
        },
        onDropdownButtonClick() {
            this.$refs.menu.toggle(event);
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        }
    },
    components: {
        'PVSButton': Button,
        'PVSMenu': Menu
    }
}
</script>
