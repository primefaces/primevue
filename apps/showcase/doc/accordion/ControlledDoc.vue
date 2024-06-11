<template>
    <DocSectionText v-bind="$attrs">
        <p>Accordion can be controlled programmatically using a binding to <i>value</i> along with <i>v-model</i> to update the active value.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex mb-4 gap-2 justify-end">
            <Button @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
            <Button @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
            <Button @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
        </div>

        <Accordion v-model:value="active">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
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
            active: '0',
            code: {
                basic: `
<div class="flex mb-4 gap-2 justify-end">
    <Button @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
    <Button @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
    <Button @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
</div>

<Accordion v-model:value="active">
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
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
        <div class="flex mb-4 gap-2 justify-end">
            <Button @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
            <Button @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
            <Button @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
        </div>

        <Accordion v-model:value="active">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
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
    export default {
        data() {
            return {
                active: '0'
            }
        }
    }
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex mb-4 gap-2 justify-end">
            <Button @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
            <Button @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
            <Button @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
        </div>

        <Accordion v-model:value="active">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
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
    import { ref } from 'vue';

    const active = ref('0');
<\/script>
`
            }
        };
    }
};
</script>
