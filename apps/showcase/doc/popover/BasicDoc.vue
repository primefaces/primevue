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
                    <InputGroup>
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                        <InputGroupAddon>
                            <i class="pi pi-copy"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium block mb-2">Invite Member</span>
                    <InputGroup>
                        <InputText disabled></InputText>
                        <Button label="Invite" icon="pi pi-users"></Button>
                    </InputGroup>
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

<script>
export default {
    data() {
        return {
            members: [
                { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
            ],
            code: {
                basic: `
<Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

<Popover ref="op">
    <div class="flex flex-col gap-4 w-[25rem]">
        <div>
            <span class="font-medium block mb-2">Share this document</span>
            <InputGroup>
                <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                <InputGroupAddon>
                    <i class="pi pi-copy"></i>
                </InputGroupAddon>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium block mb-2">Invite Member</span>
            <InputGroup>
                <InputText disabled />
                <Button label="Invite" icon="pi pi-users"></Button>
            </InputGroup>
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
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <Popover ref="op">
            <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                    <span class="font-medium block mb-2">Share this document</span>
                    <InputGroup>
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                        <InputGroupAddon>
                            <i class="pi pi-copy"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium block mb-2">Invite Member</span>
                    <InputGroup>
                        <InputText disabled />
                        <Button label="Invite" icon="pi pi-users"></Button>
                    </InputGroup>
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

<script>
export default {
    data() {
        return {
            members: [
                { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <Popover ref="op">
            <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                    <span class="font-medium block mb-2">Share this document</span>
                    <InputGroup>
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                        <InputGroupAddon>
                            <i class="pi pi-copy"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium block mb-2">Invite Member</span>
                    <InputGroup>
                        <InputText disabled />
                        <Button label="Invite" icon="pi pi-users"></Button>
                    </InputGroup>
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

<script setup>
import { ref } from "vue";

const op = ref();
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event) => {
    op.value.toggle(event);
}
<\/script>
`
            }
        };
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        }
    }
};
</script>
