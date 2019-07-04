<template>
<div id= "inplaceObject" class="p-inplace p-component p-inplace-closable p-inplace-active p-inplace-disabled">
    <template>
        <div v-show="!isClicked" @click="isClicked = !isClicked" class="p-inplace-display" tabindex="0">
            <slot name="inplaceDisplay"></slot>
        </div>
    </template>
    <template>
        <div v-show="isClicked || active == 'true'" class="p-inplace-content">
            <slot name="inplaceContent"></slot>
                <button type="button" v-if="closable" @click="isClicked = !isClicked, active = !active" class="p-button p-component p-button-icon-only">
                    <span class="pi pi-times p-c p-button-icon-left">
                    </span>
                    <span class="p-button-text p-c">p-btn</span>
                </button>
        </div>
    </template>
</div>
</template> 

<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: false
        },
        style: {
            type: String,
            default: null
        },
        styleClass: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            isClickedButton: false,
            isClicked: false
        }
    },
    computed: {

        containerClass() {
            return ['p-inplace p-component', {
                'p-style': this.style,
                'p-style-class': this.styleClass,
                'p-inplace-closable': this.closable,
                'p-inplace-active': this.active,
                'p-inplace-disabled': this.disabled
            }];
        }
    }
}
</script>

<style>
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
    border: 0 none;
    padding: .25em;
    font-weight: normal;
}

.p-inplace .p-inplace-content {
    display: inline;
}
</style>