<template>
<div :class= "containerClass">
    <template>
        <div v-show="displayShowMethod()" @click="handleDisplayClick" class="p-inplace-display" tabindex="0">
            <slot name="inplaceDisplay"></slot>
        </div>
    </template>
    <template>
        <div v-show="contentShowMethod()" class="p-inplace-content">
            <slot name="inplaceContent"></slot>
                <button v-if="closable === 'true'" type="button" @click="handleCloseButton" class="p-button p-component p-button-icon-only">
                    <span class="pi pi-times p-c p-button-icon-left">
                    </span>
                    <span class="p-button-text p-c">p-btn</span>
                </button>

        </div>
    </template>
    <!-- <button @click="changeActive()">
        active
    </button>

    <button @click="changeDisabled()">
        disabled
    </button>

    {{this.active}}
    {{this.disabled}} -->

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
            contentOpened: false
        }
    },
    computed: {
        containerClass() {
            return ['p-inplace p-component', {
                'p-inplace-closable': this.closable
            }];
        },
        dynamicClass() {
            if(this.disabled) {
                return ['p-disabled']
            }
            else {
                return []
            }
        }
    },
    methods: {
        handleDisplayClick() {
            if(!this.disabled) {
                this.contentOpened = true;
            }
        },
        handleCloseButton() {
            if(!this.disabled) {
                if(this.active && this.closable) {
                    this.contentOpened = false;
                }
                else if(!this.active && this.closable) {
                    this.contentOpened = false;
                }
            }
        },
        displayShowMethod() {
            if(this.contentOpened) {
                return false;
            }
            else {
                if(!this.contentOpened) {
                    return true;
                }
            }
        },
        contentShowMethod() {
            if(!this.disabled) {
                    if(this.contentOpened) {
                        return true;
                    }
                    else {
                        return false;
                    }
            }
            else {
                return this.contentOpened;
            }
        },
        changeActive() {
            this.active= !this.active;

            if(this.active) {
                this.contentOpened = true;
            }
            else {
                this.contentOpened = false;
            }

        },
        changeDisabled() {
            this.disabled = !this.disabled;
        }
    },
    mounted() {
        if(this.active) {
            this.contentOpened = true;
        }
    }
}
</script>

<style>
.p-inplace-display:focus {
    outline: 0;
    outline: none;
}

.p-inplace-display:hover {
   cursor: pointer;
}

.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
    border: 0 none;
    padding: .25em;
    font-weight: normal;
}

.p-inplace .p-inplace-content {
    display: inline;
    cursor: pointer;
}

.p-disabled {
    cursor: default;
}
</style>