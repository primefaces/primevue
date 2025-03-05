<template>
    <DocSectionText v-bind="$attrs">
        <p>A simple Panel is created with a <i>header</i> property along with the content as children.</p>
    </DocSectionText>
    <div class="card">
        <Panel header="Header">
            <p class="!m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Panel from '@/volt/panel';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <Panel header="Header">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Panel>
</template>

<script setup>
import Panel from '@/volt/panel';
<\/script>
`);
</script>
