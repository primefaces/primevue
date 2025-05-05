<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The term <i>unstyled</i> is used to define an alternative styling approach instead of the default theming with design tokens. In unstyled mode the css variables of the design tokens and the css rule sets that utilize them are not
            included. Here is an example of an Unstyled Select, the core functionality and accessibility is provided whereas styling is not included. Unstyled components still need to be styled on your end, in the next sections, we'll cover the
            styling solutions for both modes.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Unstyled Select" unstyled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
</script>
