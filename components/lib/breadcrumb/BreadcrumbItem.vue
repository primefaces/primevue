<template>
    <li v-if="visible()" :class="[cx('menuitem'), item.class]" v-bind="ptm('menuitem', ptmOptions)">
        <template v-if="!templates || !templates.item">
            <router-link v-if="item.to" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                <a :href="href" :class="cx('action', { isActive, isExactActive })" :aria-current="isCurrentUrl()" @click="onClick($event, navigate)" v-bind="ptm('action', ptmOptions)">
                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="item" :class="cx('icon')" />
                    <span v-else-if="item.icon" :class="[cx('icon'), item.icon]" v-bind="ptm('icon', ptmOptions)" />
                    <span v-if="item.label" :class="cx('label')" v-bind="ptm('label', ptmOptions)">{{ label() }}</span>
                </a>
            </router-link>
            <a v-else :href="item.url || '#'" :class="cx('action')" :target="item.target" :aria-current="isCurrentUrl()" @click="onClick" v-bind="ptm('action', ptmOptions)">
                <component v-if="templates && templates.itemicon" :is="templates.itemicon" :item="item" :class="cx('icon', ptmOptions)" />
                <span v-else-if="item.icon" :class="[cx('icon'), item.icon]" v-bind="ptm('icon', ptmOptions)" />
                <span v-if="item.label" :class="cx('label')" v-bind="ptm('label', ptmOptions)">{{ label() }}</span>
            </a>
        </template>
        <component v-else :is="templates.item" :item="item"></component>
    </li>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BreadcrumbItem',
    hostName: 'Breadcrumb',
    extends: BaseComponent,
    props: {
        item: null,
        templates: null,
        exact: null,
        index: null
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
    },
    computed: {
        ptmOptions() {
            return {
                context: {
                    item: this.item,
                    index: this.index
                }
            };
        }
    }
};
</script>
