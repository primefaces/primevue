<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <Button ref="btn" type="button" icon="pi pi-share-alt" label="Share" @click="toggle" />
        <Popover ref="op" appendTo="self">
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
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            members: [
                { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
            ],
            ptViewerDoc: [
                {
                    data: getPTOptions('Popover'),
                    key: 'Popover'
                }
            ]
        };
    },
    methods: {
        toggle(event) {
            this.$refs.op.show(event);
        }
    }
};
</script>
