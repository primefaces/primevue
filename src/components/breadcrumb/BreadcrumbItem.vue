<template>
    <li :class="containerClass">
        <router-link v-if="item.to" :to="item.to" class="p-menuitem-link">
            <span v-if="item.icon" :class="item.icon"></span>
            <span v-if="item.label" class="p-menuitem-text">{{item.label}}</span>
        </router-link>
        <a v-else :href="item.url||'#'" class="p-menuitem-link" @click="onClick" :target="item.target">
            <span v-if="item.icon" :class="item.icon"></span>
            <span v-if="item.label" class="p-menuitem-text">{{item.label}}</span>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        item: null
    },
    methods: {
        onClick(event) {
            if (this.item.command) {
                this.item.command({
                    originalEvent: event,
                    item: this.item
                });
            }
        }
    },
    computed: {
        containerClass() {
            return [{'p-disabled': this.item.disabled}, this.item.class];
        }
    }
}
</script>