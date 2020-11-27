<template>
    <div class="p-splitbutton p-component">
        <PVSButton type="button" class="p-splitbutton-defaultbutton" :icon="icon" :label="label" @click="onDefaultButtonClick" :disabled="disabled" :tabindex="tabindex" />
        <PVSButton type="button" class="p-splitbutton-menubutton" icon="pi pi-chevron-down" @click="onDropdownButtonClick" :disabled="disabled"
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
        onDefaultButtonClick(event) {
            this.$emit('click', event);
             this.$refs.menu.hide();
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
    display: inline-flex;
    position: relative;
}

.p-splitbutton .p-splitbutton-defaultbutton {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-menubutton {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton  {
    display: flex;
}
</style>
