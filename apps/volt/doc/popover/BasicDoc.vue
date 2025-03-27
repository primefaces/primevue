<template>
    <DocSectionText v-bind="$attrs">
        <p>Popover is accessed via its ref and visibility is controlled using <i>toggle</i>, <i>show</i> and <i>hide</i> functions with an event of the target.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-share-alt" label="Share" @click="toggle" />

        <Popover ref="op">
            <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                    <span class="font-medium block mb-2">Share this document</span>
                    <div class="flex items-stretch w-full">
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly pt:root="flex-1 rounded-e-none rounded-s-md"></InputText>
                        <span class="flex items-center justify-center w-10 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                            <i class="pi pi-copy"></i>
                        </span>
                    </div>
                </div>
                <div>
                    <span class="font-medium block mb-2">Invite Member</span>
                    <div class="flex items-stretch w-full">
                        <InputText disabled pt:root="flex-1 rounded-s-md rounded-e-none" />
                        <span class="flex items-center justify-center border-y border-e border-surface-300 dark:border-surface-700 rounded-e-md overflow-hidden">
                            <Button icon="pi pi-users" pt:root="rounded-none" />
                        </span>
                    </div>
                </div>
                <div>
                    <span class="font-medium block mb-2">Team Members</span>
                    <ul class="list-none p-0 m-0 flex flex-col gap-4">
                        <li v-for="member in members" :key="member.name" class="flex items-center gap-2">
                            <img :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`" style="width: 32px" />
                            <div>
                                <span class="font-medium">{{ member.name }}</span>
                                <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                            </div>
                            <div class="flex items-center gap-2 text-surface-500 dark:text-surface-400 ml-auto text-sm">
                                <span>{{ member.role }}</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Popover>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import InputText from '@/volt/InputText.vue';
import Popover from '@/volt/Popover.vue';
import { ref } from 'vue';

const op = ref();
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event: MouseEvent) => {
    op.value.toggle(event);
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-share-alt" label="Share" @click="toggle" />

        <Popover ref="op">
            <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                    <span class="font-medium block mb-2">Share this document</span>
                    <div class="flex items-stretch w-full">
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly pt:root="flex-1 rounded-e-none rounded-s-md"></InputText>
                        <span class="flex items-center justify-center w-10 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                            <i class="pi pi-copy"></i>
                        </span>
                    </div>
                </div>
                <div>
                    <span class="font-medium block mb-2">Invite Member</span>
                    <div class="flex items-stretch w-full">
                        <InputText disabled pt:root="flex-1 rounded-s-md rounded-e-none" />
                        <span class="flex items-center justify-center border-y border-e border-surface-300 dark:border-surface-700 rounded-e-md overflow-hidden">
                            <Button icon="pi pi-users" pt:root="rounded-none" />
                        </span>
                    </div>
                </div>
                <div>
                    <span class="font-medium block mb-2">Team Members</span>
                    <ul class="list-none p-0 m-0 flex flex-col gap-4">
                        <li v-for="member in members" :key="member.name" class="flex items-center gap-2">
                            <img :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${member.image}\`" style="width: 32px" />
                            <div>
                                <span class="font-medium">{{ member.name }}</span>
                                <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                            </div>
                            <div class="flex items-center gap-2 text-surface-500 dark:text-surface-400 ml-auto text-sm">
                                <span>{{ member.role }}</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Popover>
    </div>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import Popover from '@/volt/Popover.vue';
import { ref } from 'vue';

const op = ref();
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event) => {
    op.value.toggle(event);
};
<\/script>
`);
</script>
