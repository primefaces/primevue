<template>
    <div class="p-splitbutton p-buttonset p-component">
        <PVSButton type="button" :icon="icon" :label="label" @click="onClick" :disabled="disabled" :tabindex="tabindex" />
        <PVSButton type="button" class="p-splitbutton-menubutton" icon="pi pi-caret-down" @click="onDropdownButtonClick" :disabled="disabled"
            aria-haspopup="true" :aria-controls="ariaId + '_overlay'"/>
        <PVSMenu :id="ariaId + '_overlay'" ref="menu" :model="model" :popup="true" :autoZIndex="autoZIndex"
            :baseZIndex="baseZIndex" :appendTo="appendTo" />
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
        },
        appendTo: {
            type: String,
            default: null
        }
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
        },
        onDropdownButtonClick() {
            this.$refs.menu.toggle({currentTarget: this.$el, relativeAlign: this.appendTo == null});
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

<style scoped>
.p-splitbutton {
    position: relative;
    display: inline-block;
    zoom: 1;
}

.p-splitbutton .p-button.p-splitbutton-menubutton {
    width: 2em;
    vertical-align: top;
}

.p-splitbutton .p-menu {
    left: auto;
    top: auto;
}

.p-splitbutton.p-disabled button {
    cursor: default;
}

.p-fluid .p-splitbutton {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
}

.p-fluid .p-splitbutton .p-button:first-child {
    width: calc(100% - 2em);
}

.p-fluid .p-splitbutton .p-button.p-splitbutton-menubutton {
    width: 2em;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
}

.p-splitbutton.p-button-secondary .p-button:first-child {
    border-right: 0 none;
}
</style>
