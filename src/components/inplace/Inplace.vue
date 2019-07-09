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

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>