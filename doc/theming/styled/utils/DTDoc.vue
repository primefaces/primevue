<template>
    <DocSectionText v-bind="$attrs">
        <div class="notification mb-3">This is a proposed api for beta.2, and not yet available in beta.1.</div>
        <p>The <i>$dt</i> function returns the information about a token like the full path and value. This would be useful if you need to access tokens programmatically.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { $dt } from 'primevue/themes'; 

const duration = $dt('transition.duration');
/* 
  duration: {
    name: '--transition-duration',
    variable: 'var(--p-transition-duration)',
    value: '0.2s'  
  } 
*/

const primaryColor = $dt('primary.color');
/*
  primaryColor: {
    name: '--primary-color',
    variable: 'var(--p-primary-color)',
    value: {
      light: {
        value: '#10b981',
        path: {
            name: 'semantic.primary.color',
            binding: {
                name: 'primitive.emerald.500'
            }
        }
      },
      dark: {
        value: '#34d399',
        path: {
            name: 'semantic.primary.color',
            binding: {
                name: 'primitive.emerald.400'
            }
        }
      }
    }
  } 
*/
`
            }
        };
    }
};
</script>
