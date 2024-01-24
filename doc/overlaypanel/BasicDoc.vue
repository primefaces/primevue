<template>
    <DocSectionText v-bind="$attrs">
        <p>OverlayPanel is accessed via its ref and visibility is controlled using <i>toggle</i>, <i>show</i> and <i>hide</i> functions with an event of the target.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-share-alt" label="Share" @click="toggle" />

        <OverlayPanel ref="op">
            <div class="flex flex-column gap-3 w-25rem">
                <div>
                    <span class="font-medium text-900 block mb-2">Share this document</span>
                    <InputGroup>
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-25rem"></InputText>
                        <InputGroupAddon>
                            <i class="pi pi-copy"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium text-900 block mb-2">Invite Member</span>
                    <InputGroup>
                        <Chips disabled></Chips>
                        <Button label="Invite" icon="pi pi-users"></Button>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium text-900 block mb-2">Team Members</span>
                    <ul class="list-none p-0 m-0 flex flex-column gap-3">
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Amy Elsner</span>
                                <div class="text-sm text-color-secondary">amy@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Owner</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/bernardodominic.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Bernardo Dominic</span>
                                <div class="text-sm text-color-secondary">bernardo@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Editor</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Ioni Bowcher Elsner</span>
                                <div class="text-sm text-color-secondary">ioni@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Viewer</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </OverlayPanel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

<OverlayPanel ref="op">
    <div class="flex flex-column gap-3 w-25rem">
        <div>
            <span class="font-medium text-900 block mb-2">Share this document</span>
            <InputGroup>
                <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-25rem"></InputText>
                <InputGroupAddon>
                    <i class="pi pi-copy"></i>
                </InputGroupAddon>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium text-900 block mb-2">Invite Member</span>
            <InputGroup>
                <Chips disabled></Chips>
                <Button label="Invite" icon="pi pi-users"></Button>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium text-900 block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-column gap-3">
                <li class="flex align-items-center gap-2">
                    <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px" />
                    <div>
                        <span class="font-medium">Amy Elsner</span>
                        <div class="text-sm text-color-secondary">amy@email.com</div>
                    </div>
                    <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                        <span>Owner</span>
                        <i class="pi pi-angle-down"></i>
                    </div>
                </li>
                <li class="flex align-items-center gap-2">
                    <img src="https://primefaces.org/cdn/primevue/images/avatar/bernardodominic.png" style="width: 32px" />
                    <div>
                        <span class="font-medium">Bernardo Dominic</span>
                        <div class="text-sm text-color-secondary">bernardo@email.com</div>
                    </div>
                    <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                        <span>Editor</span>
                        <i class="pi pi-angle-down"></i>
                    </div>
                </li>
                <li class="flex align-items-center gap-2">
                    <img src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" style="width: 32px" />
                    <div>
                        <span class="font-medium">Ioni Bowcher Elsner</span>
                        <div class="text-sm text-color-secondary">ioni@email.com</div>
                    </div>
                    <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                        <span>Viewer</span>
                        <i class="pi pi-angle-down"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</OverlayPanel>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op">
            <div class="flex flex-column gap-3 w-25rem">
                <div>
                    <span class="font-medium text-900 block mb-2">Share this document</span>
                    <InputGroup>
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-25rem"></InputText>
                        <InputGroupAddon>
                            <i class="pi pi-copy"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium text-900 block mb-2">Invite Member</span>
                    <InputGroup>
                        <Chips disabled></Chips>
                        <Button label="Invite" icon="pi pi-users"></Button>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium text-900 block mb-2">Team Members</span>
                    <ul class="list-none p-0 m-0 flex flex-column gap-3">
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Amy Elsner</span>
                                <div class="text-sm text-color-secondary">amy@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Owner</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/bernardodominic.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Bernardo Dominic</span>
                                <div class="text-sm text-color-secondary">bernardo@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Editor</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Ioni Bowcher Elsner</span>
                                <div class="text-sm text-color-secondary">ioni@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Viewer</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </OverlayPanel>
    </div>
</template>

<script>
export default {
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
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op">
            <div class="flex flex-column gap-3 w-25rem">
                <div>
                    <span class="font-medium text-900 block mb-2">Share this document</span>
                    <InputGroup>
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-25rem"></InputText>
                        <InputGroupAddon>
                            <i class="pi pi-copy"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium text-900 block mb-2">Invite Member</span>
                    <InputGroup>
                        <Chips disabled></Chips>
                        <Button label="Invite" icon="pi pi-users"></Button>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium text-900 block mb-2">Team Members</span>
                    <ul class="list-none p-0 m-0 flex flex-column gap-3">
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Amy Elsner</span>
                                <div class="text-sm text-color-secondary">amy@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Owner</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/bernardodominic.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Bernardo Dominic</span>
                                <div class="text-sm text-color-secondary">bernardo@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Editor</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                        <li class="flex align-items-center gap-2">
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" style="width: 32px" />
                            <div>
                                <span class="font-medium">Ioni Bowcher Elsner</span>
                                <div class="text-sm text-color-secondary">ioni@email.com</div>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>Viewer</span>
                                <i class="pi pi-angle-down"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();

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
