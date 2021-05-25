<template>
    <li :class="containerClass" v-if="visible()">
        <template v-if="!template">
            <router-link v-if="item.to" :to="item.to" custom v-slot="{navigate, href}">
                <a :href="href" class="p-menuitem-link" @click="onClick($event, navigate)">
                    <span v-if="item.icon" :class="iconClass"></span>
                    <span v-if="item.label" class="p-menuitem-text">{{item.label}}</span>
                </a>
            </router-link>
            <a v-else :href="item.url||'#'" class="p-menuitem-link" @click="onClick" :target="item.target">
                <span v-if="item.icon" :class="iconClass"></span>
                <span v-if="item.label" class="p-menuitem-text">{{item.label}}</span>
            </a>
        </template>
        <component v-else :is="template" :item="item"></component>
    </li>
</template>

<script>
export default {
    name: 'BreadcrumbItem',
    props: {
        item: null,
        template: null
    },
    methods: {
        onClick(event, navigate) {
            if (this.item.command) {
                this.item.command({
                    originalEvent: event,
                    item: this.item
                });
            }

            if (this.item.to && navigate) {
                navigate(event);
            }
        },
        visible() {
            return (typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false);
        }
    },
    computed: {
        containerClass() {
            return [{'p-disabled': this.item.disabled}, this.item.class];
        },
        iconClass() {
            return ['p-menuitem-icon', this.item.icon];
        }
    }
}
</script>
