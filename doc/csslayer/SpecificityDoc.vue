<template>
    <DocSectionText v-bind="$attrs">
        <p class="notification">A CSS layer is utilized in styled mode only, in unstyled mode the built-in CSS classes are not included and as a result no layer is defined. This documentation only applies to styled mode.</p>
        <p>
            The <i>@layer</i> is a standard CSS feature to define cascade layers for a customizable order of precedence. If you need to become more familiar with layers, visit the documentation at
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer">MDN</a> to begin with. In styled mode, PrimeVue wraps the built-in style classes under the <i>primevue</i> cascade layer to make the library styles easy to override. CSS in
            your app without a layer has the highest CSS specificity, so you'll be able to override styles regardless of the location or how strong a class is written.
        </p>
        <p>
            For example, let's assume you need to remove the rounded borders of the InputSwitch component defined by the theme in use. In order to achieve this, <i>.p-inputswitch .p-inputswitch-slider</i> selector needs to be overriden. Without the
            layers, we'd have to write a stronger css or use <i>!important</i> however, with layers, this does not present an issue as your CSS can always override PrimeVue with a more straightforward class name such as <i>my-switch-slider</i>.
            Another advantage of this approach is that it does not force you to figure out the built-in class names of the components.
        </p>
        <div class="card flex justify-content-center">
            <InputSwitch v-model="checked" :pt="{ slider: 'my-switch-slider' }" />
        </div>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
        <p>Layers also make it possible to use CSS Modules, view the <NuxtLink to="/theming/#cssmodules">CSS Modules</NuxtLink> guide for examples.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<template>
    <InputSwitch v-model="checked" :pt="{ slider: 'my-switch-slider' }" />
</template>

<script>
import { ref } from "vue";

const checked = ref(false);
<\/script>

<style>
.my-switch-slider {
    border-radius: 0;
}

.my-switch-slider:before {
    border-radius: 0;
}
</style>
`
            }
        };
    }
};
</script>

<style>
.my-switch-slider {
    border-radius: 0;
}

.my-switch-slider:before {
    border-radius: 0;
}
</style>
