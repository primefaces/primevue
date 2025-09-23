<template>
    <DocSectionText v-bind="$attrs">
        <p>A token can be defined per color scheme using <i>light</i> and <i>dark</i> properties of the <i>colorScheme</i> property. Each token can have specific values based on the current color scheme.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <div class="font-bold mb-4">Common Pitfall</div>
        <p>
            When customizing an existing preset, your token overrides may be ignored if you don't properly account for color scheme variations. If the original preset defines a token using the <i>colorScheme</i> property, but your customization only
            provides a direct value, your override will be ignored because the <i>colorScheme</i> property takes precedence over direct values and the system will continue using the preset's scheme-specific values. When customizing tokens that are
            not defined with <i>colorScheme</i> in the original preset, your customizations will be applied successfully regardless of how you structure them; whether direct or under colorScheme.
        </p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
        <div class="font-bold mb-4">Best Practices</div>
        <ul class="leading-normal list-disc list-inside mb-4">
            <li>Check how tokens are defined in the preset before customizing from the <a href="https://github.com/primefaces/primeuix/tree/main/packages/themes/src/presets" target="_blank" rel="noopener noreferrer">source</a>.</li>
            <li>Always maintain the same structure (direct value or colorScheme) as the original preset.</li>
            <li>Consider both light and dark mode values when overriding scheme-dependent tokens.</li>
        </ul>
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
        <p>This approach ensures your customizations will be applied correctly regardless of the user's selected color scheme.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                //...
            },
            dark: {
                //...
            }
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    }
 });
`
            },
            code2: {
                basic: `
/* Fails as Aura defines highlight tokens in colorScheme */
const MyPreset = definePreset(Aura, {
    semantic: {
        highlight: {
            background: '{primary.50}',
            color: '{primary.700}',
        }
    }
});
`
            },
            code3: {
                basic: `
/* Works because highlight tokens are defined under colorScheme */
const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                semantic: {
                    highlight: {
                        background: '{primary.50}',
                        color: '{primary.700}',
                    }
                }
            },
            dark: {
                semantic: {
                    highlight: {
                        background: '{primary.200}',
                        color: '{primary.900}',
                    }
                }
            }
        }
    }
});
`
            }
        };
    }
};
</script>
