<template>
    <DocSectionText v-bind="$attrs">
        <p>Header content of a panel is customized with the <i>default</i> slot.</p>
    </DocSectionText>
    <div class="card">
        <Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionPanel value="0">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                        <Badge value="3" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                        <Badge value="4" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                        <Badge value="2" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
    <AccordionPanel value="0">
        <AccordionHeader>
            <span class="flex items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                <Badge value="3" class="ml-auto mr-2" />
            </span>
        </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>
            <span class="flex items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                <Badge value="4" class="ml-auto mr-2" />
            </span>
        </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>
            <span class="flex items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                <Badge value="2" class="ml-auto mr-2" />
            </span>
        </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
`,
                options: `
<template>
    <div class="card">
        <Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionPanel value="0">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                        <Badge value="3" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                        <Badge value="4" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                        <Badge value="2" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionPanel value="0">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                        <Badge value="3" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                        <Badge value="4" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                        <Badge value="2" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
