<template>
    <div :class="containerClass">
        <div v-if="!d_active" :class="displayClass" :tabindex="$attrs.tabindex || '0'" @click="open" @keydown.enter="open">
            <slot name="display"></slot>
        </div>
        <div v-else class="p-inplace-content">
            <slot name="content"></slot>
            <IPButton v-if="closable" icon="pi pi-times" @click="close"></IPButton>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    name: 'Inplace',
    emits: ['open', 'close', 'update:active'],
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            d_active: this.active
        };
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    methods: {
        open(event) {
            if (this.disabled) {
                return;
            }

            this.$emit('open', event);
            this.d_active = true;
            this.$emit('update:active', true);
        },
        close(event) {
            this.$emit('close', event);
            this.d_active = false;
            this.$emit('update:active', false);
        }
    },
    computed: {
        containerClass() {
            return ['p-inplace p-component', { 'p-inplace-closable': this.closable }];
        },
        displayClass() {
            return ['p-inplace-display', { 'p-disabled': this.disabled }];
        }
    },
    components: {
        IPButton: Button
    }
};
</script>

<style>
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
}

.p-inplace .p-inplace-content {
    display: inline;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
    display: flex;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}
</style>
