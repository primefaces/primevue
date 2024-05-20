<template>
    <DocSectionText v-bind="$attrs">
        <p>Design tokens can be scoped to a certain component using CSS variables. In this example, first switch uses the global tokens whereas second one overrides the global with its own tokens.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <ToggleSwitch v-model="checked1" />
        <ToggleSwitch v-model="checked2" :dt="amberSwitch" />
    </div>
    <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            checked1: true,
            checked2: true,
            amberSwitch: {
                handle: {
                    borderRadius: '4px'
                },
                colorScheme: {
                    light: {
                        root: {
                            checkedBackground: '{amber.500}',
                            checkedHoverBackground: '{amber.600}',
                            borderRadius: '4px'
                        },
                        handle: {
                            checkedBackground: '{amber.50}',
                            checkedHoverBackground: '{amber.100}'
                        }
                    },
                    dark: {
                        root: {
                            checkedBackground: '{amber.400}',
                            checkedHoverBackground: '{amber.300}',
                            borderRadius: '4px'
                        },
                        handle: {
                            checkedBackground: '{amber.900}',
                            checkedHoverBackground: '{amber.800}'
                        }
                    }
                }
            },
            code1: {
                basic: `
<template>
    <div>
        <ToggleSwitch v-model="checked1" />
        <ToggleSwitch v-model="checked2" :dt="amberSwitch" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(true);
const amberSwitch = ref({
    handle: {
        borderRadius: '4px'
    },
    colorScheme: {
        light: {
            root: {
                checkedBackground: '{amber.500}',
                checkedHoverBackground: '{amber.600}',
                borderRadius: '4px'
            },
            handle: {
                checkedBackground: '{amber.50}',
                checkedHoverBackground: '{amber.100}'
            }
        },
        dark: {
            root: {
                checkedBackground: '{amber.400}',
                checkedHoverBackground: '{amber.300}',
                borderRadius: '4px'
            },
            handle: {
                checkedBackground: '{amber.900}',
                checkedHoverBackground: '{amber.800}'
            }
        }
    }
});
<\/script>

`
            }
        };
    }
};
</script>
