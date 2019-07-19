<template>
    <div :class="containerClass">
        Yoo man
    </div>
</template>

<script>
export default {
    props: {
        closable: {
            type: Boolean,
            defaault: false
        },
        active: {
            type: Boolean,
            defaault: false
        },
        tabindex: {
            type: String,
            defaault: '0'
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
    computed: {
        containerClass() {
            return ['p-inplace p-component', {'p-inplace-closable': this.closable}];
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
