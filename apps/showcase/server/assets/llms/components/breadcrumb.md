# Vue Breadcrumb Component

Breadcrumb provides contextual information about page hierarchy.

## Import

```javascript
import Breadcrumb from 'primevue/breadcrumb';
```

## Accessibility

Screen Reader Breadcrumb uses the nav element and since any attribute is passed to the root implicitly aria-labelledby or aria-label can be used to describe the component. Inside an ordered list is used where the list item separators have aria-hidden to be able to ignored by the screen readers. If the last link represents the current route, aria-current is added with "page" as the value. Keyboard Support No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence.

## Basic

Breadcrumb requires a collection of menuitems as its model , the root item is defined with the home property.

```vue
<Breadcrumb :home="home" :model="items" />
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

```vue
<Breadcrumb :home="home" :model="items">
    <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
                <span :class="[item.icon, 'text-color']" />
                <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
        </a>
    </template>
</Breadcrumb>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    route: '/introduction'
});
const items = ref([
    { label: 'Components' },
    { label: 'Form' },
    { label: 'InputText', route: '/inputtext' }
]);
<\/script>
```

</details>

## Template

Custom content can be placed inside the items using the item template. The divider between the items has its own separator template.

```vue
<Breadcrumb :home="home" :model="items">
    <template #item="{ item }">
        <a class="cursor-pointer" :href="item.url">
            <span :class="item.icon"></span>
        </a>
    </template>
    <template #separator> / </template>
</Breadcrumb>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer" :href="item.url">
                    <span :class="item.icon"></span>
                </a>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({ icon: 'pi pi-home' });
const items = ref([{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }]);
<\/script>
```

</details>
