<template>
    <DocSectionText v-bind="$attrs">
        <p>Tabs can be controlled programmatically using <i>value</i> property.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="value = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="value !== '0'" />
            <Button @click="value = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="value !== '1'" />
            <Button @click="value = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="value !== '2'" />
        </div>

        <Tabs v-model:value="value">
            <TabList>
                <Tab value="0">Header I</Tab>
                <Tab value="1">Header II</Tab>
                <Tab value="2">Header III</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '0',
            code: {
                basic: `
<div class="flex mb-2 gap-2 justify-end">
    <Button @click="value = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="value !== '0'" />
    <Button @click="value = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="value !== '1'" />
    <Button @click="value = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="value !== '2'" />
</div>

<Tabs v-model:value="value">
    <TabList>
        <Tab value="0">Header I</Tab>
        <Tab value="1">Header II</Tab>
        <Tab value="2">Header III</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </TabPanel>
        <TabPanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </TabPanel>
    </TabPanels>
</Tabs>
`,
                options: `
<template>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="value = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="value !== '0'" />
            <Button @click="value = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="value !== '1'" />
            <Button @click="value = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="value !== '2'" />
        </div>

        <Tabs v-model:value="value">
            <TabList>
                <Tab value="0">Header I</Tab>
                <Tab value="1">Header II</Tab>
                <Tab value="2">Header III</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '0'
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="value = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="value !== '0'" />
            <Button @click="value = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="value !== '1'" />
            <Button @click="value = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="value !== '2'" />
        </div>

        <Tabs v-model:value="value">
            <TabList>
                <Tab value="0">Header I</Tab>
                <Tab value="1">Header II</Tab>
                <Tab value="2">Header III</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('0');
<\/script>
`
            }
        };
    }
};
</script>
