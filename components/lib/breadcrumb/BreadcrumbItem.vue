<template>
    <li v-if="visible()" :class="[getCXOptions('menuitem'), item.class]" v-bind="ptm('menuitem')">
        <template v-if="!templates || !templates.item">
            <router-link v-if="item.to" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                <a :href="href" :class="getCXOptions('action', { isActive, isExactActive })" :aria-current="isCurrentUrl()" @click="onClick($event, navigate)" v-bind="ptm('action')">
                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="getCXOptions('icon')" />
                    <span v-else-if="item.icon" :class="[getCXOptions('icon'), item.icon]" v-bind="ptm('icon')" />
                    <span v-if="item.label" :class="getCXOptions('label')" v-bind="ptm('label')">{{ label() }}</span>
                </a>
            </router-link>
            <a v-else :href="item.url || '#'" :class="getCXOptions('action')" :target="item.target" :aria-current="isCurrentUrl()" @click="onClick" v-bind="ptm('action')">
                <component v-if="templates && templates.itemicon" :is="templates.itemicon" :item="item" :class="getCXOptions('icon')" />
                <span v-else-if="item.icon" :class="[getCXOptions('icon'), item.icon]" v-bind="ptm('icon')" />
                <span v-if="item.label" :class="getCXOptions('label')" v-bind="ptm('label')">{{ label() }}</span>
            </a>
        </template>
        <component v-else :is="templates.item" :item="item"></component>
    </li>
</template>

<script>
import BaseBreadcrumb from './BaseBreadcrumb.vue';

export default {
    name: 'BreadcrumbItem',
    extends: BaseBreadcrumb,
    props: {
        item: null,
        templates: null,
        exact: null,
        index: null
    },
    methods: {
        getCXOptions(key, params) {
            return this.cx(key, {
                ...params,
                context: this
            });
        },
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
            return typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false;
        },
        disabled() {
            return typeof this.item.disabled === 'function' ? this.item.disabled() : this.item.disabled;
        },
        label() {
            return typeof this.item.label === 'function' ? this.item.label() : this.item.label;
        },
        isCurrentUrl() {
            const { to, url } = this.item;
            let lastPath = this.$router ? this.$router.currentRoute.path : '';

            return to === lastPath || url === lastPath ? 'page' : undefined;
        }
    }
};
</script>
