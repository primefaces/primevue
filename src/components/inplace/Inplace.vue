<template>
    <div :class="containerClass">
        <div class="p-inplace-display" :tabindex="$attrs.tabindex||'0'" v-if="!d_active" @click="open" @keydown.enter="open">
            <slot name="display"></slot>
        </div>
        <div class="p-inplace-content" v-else>
            <slot name="content"></slot>
            <IPButton v-if="closable" icon="pi pi-times" @click="close"></IPButton>
        </div>
    </div>
</template>

<script>
import Button from '../button/Button';

export default {
    props: {
        closable: {
            type: Boolean,
            defaault: false
        },
        active: {
            type: Boolean,
            defaault: false
        }
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    data() {
        return {
            d_active: this.active
        }
    },
    methods: {
        open(event) {
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
            return ['p-inplace p-component', {'p-inplace-closable': this.closable}];
        }
    },
    components: {
        'IPButton': Button
    }
}
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
